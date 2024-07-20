import { ApiProfessionals } from "@logic/api-contracts/professionals/professionals";
import { AjaxState, MapResponse } from "@logic/use-ajax/interfaces";
import { ContentType, MappedResponse, useAjax } from "@logic/use-ajax/use-ajax";
import { useCallback, useState } from "react";
import { GetProfessionalsResponse, Professional, ProfessionalsWithPagination } from "../interfaces";
import { PROFESSIONALS_ENDPOINT } from "../shared";

interface UseProfessionalsHook {
  ajaxState: AjaxState;
  getProfessionals: (categoryId: number, location: string, currentPage?: number) => Promise<void>;
  professionalsWithPagination: ProfessionalsWithPagination;
  resetProfessionals: () => void;
}

const ENTRIES_PER_PAGE = 5;
const START_QUERYPARAM = "_start";
const LIMIT_QUERYPARAM = "_limit";

const mapResponse = (
  map: MapResponse<ApiProfessionals[]>
): MappedResponse<GetProfessionalsResponse> => {
  const { response, httpResponse } = map;
  if (!response || !response.length || !httpResponse) return null;

  return {
    professionals: response.map(
      (pro): Professional => ({
        id: pro.id,
        name: pro.name,
        postCode: pro.address?.postcode,
        reviewRating: pro.rating,
      })
    ),
  };
};

export const useProfessionals = (): UseProfessionalsHook => {
  const [ajaxState, setAjaxState] = useState<AjaxState>({ isLoading: false });
  const [professionalsWithPagination, setProfessionalsWithPagination] =
    useState<ProfessionalsWithPagination>();

  const ajax = useAjax({
    endpoint: PROFESSIONALS_ENDPOINT,
    mapResponse,
    onAjaxStateUpdate: setAjaxState,
    contentType: ContentType.JSON,
  });

  const getProfessionals = useCallback(
    async (categoryId: number, location: string, currentPage = 1) => {
      try {
        ajax.setLoading(true);

        const entriesStartValue = currentPage === 1 ? 0 : currentPage * ENTRIES_PER_PAGE;

        // setTimeout used purely for better experience since the response is settled instantly.
        // the loader rendered in the presentational component will be shown for 1 second.
        setTimeout(async () => {
          const response = await ajax.get({
            queryParams: {
              [START_QUERYPARAM]: entriesStartValue,
              [LIMIT_QUERYPARAM]: ENTRIES_PER_PAGE,
            },
          });
          const { professionals: professionalsResponse } = response;

          const professionalsWithPagination: ProfessionalsWithPagination = {
            professionals: professionalsResponse,
            // json-server does not return any headers or information about the length of records for professionals so we will assume the length is 15 (db.json)
            totalPages: Math.floor(15 / ENTRIES_PER_PAGE),
          };

          setProfessionalsWithPagination(professionalsWithPagination);

          ajax.setLoading(false);
        }, 1000);
      } catch (error) {
        ajax.setLoading(false);
        throw error;
      }
    },
    [ajax]
  );

  const resetProfessionals = useCallback(() => {
    setProfessionalsWithPagination({});
  }, []);

  return {
    ajaxState,
    getProfessionals,
    professionalsWithPagination,
    resetProfessionals,
  };
};
