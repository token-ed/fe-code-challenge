import { useCallback, useMemo } from "react";
import {
  AjaxActions,
  AjaxRequestParams,
  AjaxState,
  HttpVerb,
  MapResponse,
  UpdateAction,
} from "./interfaces";
import { fetchRequest } from "./shared";
import { useAjaxActions } from "./use-ajax-actions";

export interface AjaxResponse {
  ajaxState: AjaxState;
}

export interface AjaxRequestEndpoint {
  endpoint: string;
}

export interface AjaxCommonProps {
  headers?: Headers;
  contentType?: ContentType;
  acceptLanguage?: string;
}

export enum ContentType {
  JSON = "application/json",
  Text = "text/plain",
}

type StateExcluded<Response extends AjaxResponse> = Pick<
  Response,
  Exclude<keyof Response, "ajaxState">
>;

export type MappedResponse<Response extends AjaxResponse> = StateExcluded<Response>;

export interface FetchRequest<ApiResponse, CustomResponse extends AjaxResponse>
  extends AjaxRequestEndpoint,
    AjaxCommonProps,
    Partial<Headers> {
  mapResponse: (map: MapResponse<ApiResponse>) => MappedResponse<CustomResponse>;
}

export interface AjaxProps<ApiResponse, Response extends AjaxResponse>
  extends FetchRequest<ApiResponse, Response> {
  onAjaxStateUpdate: UpdateAction;
}

export interface AjaxHook<Response extends AjaxResponse> extends AjaxActions {
  get: <QueryParams>(params?: { queryParams: QueryParams; headers?: Headers }) => Promise<Response>;
  post: <QueryParams, BodyParams>(
    params?: AjaxRequestParams<BodyParams, QueryParams>,
    headers?: Headers
  ) => Promise<Response>;
  // Other HTTP verbs can be defined as application scales (for example PUT or DELETE)
}

export function useAjax<ApiResponse, Response extends AjaxResponse>(
  props: AjaxProps<ApiResponse, Response>
): AjaxHook<Response> {
  const ajaxActions = useAjaxActions(props.onAjaxStateUpdate);

  const performRequest = useCallback(
    async (
      method: HttpVerb,
      params: AjaxRequestParams<Record<string, unknown>, URLSearchParams>,
      customHeaders: Headers
    ): Promise<AjaxResponse> => {
      try {
        const response = await fetchRequest({
          ...props,
          method,
          bodyParams: params?.bodyParams,
          queryParams: params?.queryParams,
          headers: customHeaders,
        });

        return { ...response, ajaxState: { ...response?.ajaxState, ...ajaxActions } };
      } catch (ajaxState) {
        throw {
          ...ajaxState,
          ...ajaxActions,
        };
      }
    },
    [ajaxActions, props]
  );

  const ajaxHook = useMemo(
    () => ({
      get: performRequest.bind(null, HttpVerb.GET),
      post: performRequest.bind(null, HttpVerb.POST),
      ...ajaxActions,
    }),
    [ajaxActions, performRequest]
  );

  return ajaxHook as AjaxHook<Response>;
}
