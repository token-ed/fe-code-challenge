import { useCallback, useMemo, useState } from "react";
import { useCategories } from "./helpers/use-categories";
import { useProfessionals } from "./helpers/use-professionals";
import { useStateUpdater } from "./helpers/use-state-updater";
import { useValidations } from "./helpers/use-validations";
import { initialState, InputFields } from "./interfaces";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useData = () => {
    const [inputState, setInputState] = useState<InputFields>(initialState);

    const { ajaxState: categoriesAjaxState, categories } = useCategories();

    const {
        ajaxState: professionalsAjaxState,
        professionalsWithPagination,
        getProfessionals,
        resetProfessionals,
    } = useProfessionals();

    const validations = useValidations({
        state: inputState,
        setState: setInputState,
    });

    const handlers = useStateUpdater({
        state: inputState,
        setState: setInputState,
    });

    const isDataValid = useMemo(() => {
        const { isCategoryIdValid, isPostCodeValid } = inputState;
        return isCategoryIdValid && isPostCodeValid;
    }, [inputState])

    const onSubmit = useCallback(() => {
        if (isDataValid)
            getProfessionals(inputState.categoryId, inputState.postCode.toLowerCase());
    }, [getProfessionals, inputState.categoryId, inputState.postCode, isDataValid])

    const onPageChange = useCallback((currentPage?: number) => {
        if (isDataValid)
            getProfessionals(inputState.categoryId, inputState.postCode.toLowerCase(), currentPage);
    }, [getProfessionals, inputState.categoryId, inputState.postCode, isDataValid])

    return {
        categoriesAjaxState,
        professionalsAjaxState,
        categories,
        professionalsWithPagination,
        onSubmit,
        onPageChange,
        resetProfessionals,
        ...validations,
        ...handlers,
        ...inputState,
    }
}