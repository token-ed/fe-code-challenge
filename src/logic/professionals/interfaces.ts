import React from "react";
import { AjaxResponse } from "../use-ajax/use-ajax";
import { Validations } from "./helpers/use-validations";

export interface GetCategoriesResponse extends AjaxResponse {
  categories: Category[];
}

export interface Category {
  id: number;
  designation: string;
  concealed: boolean;
}

export interface GetProfessionalsResponse extends AjaxResponse {
  professionals: Professional[];
}

export interface ProfessionalsWithPagination {
  professionals?: Professional[];
  totalPages?: number;
}

export interface Professional {
  id: number;
  name: string;
  postCode: string;
  reviewRating?: number;
}

export interface InputFields extends Validations {
  categoryId: number;
  postCode: string;
}

export interface InputFieldsActions {
  setState?: React.Dispatch<React.SetStateAction<InputFields>>;
}

export interface InputFieldsState {
  state: InputFields;
}

export type StateUpdaterProps = InputFieldsActions & InputFieldsState;

export const initialState: InputFields = {
  categoryId: null,
  postCode: "",
  isCategoryIdValid: null,
  isPostCodeValid: null,
};
