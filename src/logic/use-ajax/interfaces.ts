export interface Options {
  url: string;
  method: HttpVerb;
}

export enum HttpVerb {
  GET = "GET",
  POST = "POST",
}

export type UpdateAction = (ajaxState: AjaxState) => void;

// AJAX Params
export interface QueryParams<QueryParamsDefinition> {
  queryParams?: QueryParamsDefinition;
}

export interface BodyParams<BodyParamsDefinition> {
  bodyParams?: BodyParamsDefinition;
}

export interface AjaxRequestParams<RequestBodyParams, RequestQueryParams>
  extends QueryParams<RequestQueryParams>,
    BodyParams<RequestBodyParams> {}

export interface AjaxRequest<RequestBodyParams, RequestQueryParams>
  extends QueryParams<RequestQueryParams>,
    BodyParams<RequestBodyParams> {
  method: HttpVerb;
}

export interface MapResponse<ApiResponse> {
  response: ApiResponse;
  httpResponse: Response;
  request: AjaxRequest<Record<string, unknown>, URLSearchParams>;
}

// AJAX errors
export interface AjaxError {
  ajaxError?: unknown;
}

// AJAX network errors
export interface AjaxServerErrors {
  ajaxServerErrors?: ServerErrorsDefinitions[];
}

export interface ServerErrorsDefinitions {
  errorCode: string;
  validationErrorField: string;
  validationErrorMessage: string;
  vaidationErrorTitle: string;
}

export interface ErrorObject {
  response?: Response;
  error: Error;
}

// AJAX Loading
export interface AjaxLoading {
  isLoading?: boolean;
}

// AJAX custom actions
export interface AjaxActions {
  clearErrors?: () => void;
  setLoading?: (isLoading: boolean) => void;
}

export type AjaxState = AjaxError & AjaxServerErrors & AjaxLoading & AjaxActions;
