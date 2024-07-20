import { ApiCategory } from "@logic/api-contracts/professionals";
import { AjaxState, MapResponse } from "@logic/use-ajax/interfaces";
import { ContentType, MappedResponse, useAjax } from "@logic/use-ajax/use-ajax";
import { useCallback, useEffect, useState } from "react";
import { Category, GetCategoriesResponse } from "../interfaces";
import { CATEGORIES_ENDPOINT } from "../shared";

interface UseCategoriesHook {
  ajaxState: AjaxState;
  categories: Category[];
}

const compareCategoriesNames = (categoryA: ApiCategory, categoryB: ApiCategory) => {
  if (categoryA.designation < categoryB.designation) {
    return -1;
  }

  if (categoryA.designation > categoryB.designation) {
    return 1;
  }

  return 0;
};

const mapResponse = (map: MapResponse<ApiCategory[]>): MappedResponse<GetCategoriesResponse> => {
  const { response } = map;

  if (!response || !response.length) return null;

  return {
    categories: response.filter((category) => !category.concealed).sort(compareCategoriesNames),
  };
};

export const useCategories = (): UseCategoriesHook => {
  const [ajaxState, setAjaxState] = useState<AjaxState>({ isLoading: true });
  const [categories, setCategories] = useState<Category[]>(null);

  const ajax = useAjax({
    endpoint: CATEGORIES_ENDPOINT,
    mapResponse,
    onAjaxStateUpdate: setAjaxState,
    contentType: ContentType.Text,
  });

  const getCategories = useCallback(() => {
    try {
      // setTimeout used purely for better experience since the response is settled instantly.
      // the loader rendered in the presentational component will be shown for 0,5 seconds.
      setTimeout(async () => {
        const response = await ajax.get();

        const { categories } = response;

        setCategories(categories);

        ajax.setLoading(false);
      }, 500);
    } catch (error) {
      throw error;
    }
  }, [ajax]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => getCategories(), []);

  return {
    ajaxState,
    categories,
  };
};
