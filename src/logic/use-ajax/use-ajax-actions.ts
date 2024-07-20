import { AjaxActions, AjaxState, UpdateAction } from "./interfaces";

export const cleanState: AjaxState = {
    ajaxServerErrors: [],
    isLoading: false,
}

export const useAjaxActions = (setAjaxState: UpdateAction): AjaxActions => {
    const updateState = (state: Partial<AjaxState>) => {
        if (!setAjaxState) {
            return;
        }

        setAjaxState({ ...cleanState, ...state });
    }

    const setLoading = (isLoading: boolean) => {
        updateState({ isLoading });
    }

    const clearErrors = () => {
        updateState({});
    }

    return {
        clearErrors,
        setLoading,
    }
}