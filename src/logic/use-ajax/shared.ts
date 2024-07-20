import { AjaxRequest, AjaxState, ErrorObject, ServerErrorsDefinitions } from "./interfaces";
import { AjaxCommonProps, AjaxResponse, FetchRequest, MappedResponse } from "./use-ajax";

interface MyRequest<
  ApiResponse,
  Response extends AjaxResponse,
  BodyParams extends Record<string, unknown>,
  QueryParams extends URLSearchParams,
> extends FetchRequest<ApiResponse, Response>,
    AjaxRequest<BodyParams, QueryParams>,
    AjaxCommonProps {}

const getOptions = <ApiResponse, Response extends AjaxResponse>(
  request: MyRequest<ApiResponse, Response, Record<string, unknown>, URLSearchParams>
) => {
  const { headers = new Headers(), method, contentType, acceptLanguage, bodyParams } = request;

  //   headers.set("Access-Control-Allow-Headers", `content-type x-total-count`);

  if (contentType) {
    headers.set("Content-Type", contentType);
  }

  if (acceptLanguage) {
    headers.set("Accept-Language", acceptLanguage);
  }

  const operation: RequestInit = {
    headers,
    method,
  };

  if (bodyParams) {
    operation.body = JSON.stringify(bodyParams);
  }

  return operation;
};

async function execute<ApiResponse, Response extends AjaxResponse>(
  request: MyRequest<ApiResponse, Response, Record<string, unknown>, URLSearchParams>
) {
  if (!request || !request.endpoint) {
    return null;
  }

  try {
    const options = getOptions(request);
    const queryParams = new URLSearchParams(request.queryParams);

    const response = await fetch(`${request.endpoint}?${queryParams}`, options);

    if (!response.ok) {
      throw {
        errorHandled: new Error(response.statusText),
        response,
      };
    }

    return response;
  } catch (error) {
    if (error & error.errorHandled) {
      throw {
        error: error.errorHandled,
        response: error.response,
      };
    }

    const errorResponse: ErrorObject = {
      error,
    };

    throw errorResponse;
  }
}

export async function parseResponse<ApiResponse, MyResponse extends AjaxResponse>(
  request: MyRequest<ApiResponse, MyResponse, Record<string, unknown>, URLSearchParams>,
  response: Response
): Promise<MyResponse> {
  if (!response) {
    return null;
  }

  let ajaxState: AjaxState = {
    isLoading: false,
  };

  let json: MappedResponse<MyResponse> = null;

  try {
    // Mining response JSON
    const text = await response.text();
    const data = (text && JSON.parse(text)) || null;

    // Mining response errors
    const errors: ServerErrorsDefinitions[] = (data && data.errors) || [];

    ajaxState = {
      ...ajaxState,
      ajaxServerErrors: errors,
    };

    if (request) {
      json = request.mapResponse({
        httpResponse: response,
        request,
        response: data,
      });
    }
  } catch (error) {
    throw { error, response };
  }

  const fullResponse = {
    ajaxState,
    ...(json as Record<string, unknown>),
  };

  return fullResponse as MyResponse;
}

export async function fetchRequest<ApiResponse, Response extends AjaxResponse>(
  request: MyRequest<ApiResponse, Response, Record<string, unknown>, URLSearchParams>
): Promise<Response> {
  const myFetch = async () => {
    const response = await execute(request);

    const ajaxState = await parseResponse(request, response);

    return { rawResponse: response, ajaxState };
  };

  try {
    const fetchPromise = myFetch();
    const response = await fetchPromise;

    return response.ajaxState;
  } catch (error) {
    const ajaxState: AjaxState = {
      ajaxError: error,
      ajaxServerErrors: [],
      isLoading: false,
    };

    throw { ...ajaxState };
  }
}
