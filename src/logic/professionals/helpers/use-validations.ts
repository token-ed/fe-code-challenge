import { useCallback } from "react";
import { StateUpdaterProps } from "../interfaces";

const ukPostCodeRegex = /^(([A-Z]{1,2}[0-9][A-Z0-9]?|ASCN|STHL|TDCU|BBND|[BFS]IQQ|PCRN|TKCA) ?[0-9][A-Z]{2}|BFPO ?[0-9]{1,4}|(KY[0-9]|MSR|VG|AI)[ -]?[0-9]{4}|[A-Z]{2} ?[0-9]{2}|GE ?CX|GIR ?0A{2}|SAN ?TA1)$/i;

export interface Validations {
    isPostCodeValid?: boolean
    isCategoryIdValid?: boolean;
}

export interface UseValidationsHook {
    validateCategory: () => boolean;
    validatePostcode: () => boolean;
}

export const useValidations = ({ state, setState }: StateUpdaterProps): UseValidationsHook => {
    const { categoryId, postCode } = state;

    const categoryIsValid = useCallback((): boolean => {
        return !!categoryId && categoryId > 0;
    }, [categoryId])

    const postCodeIsValid = useCallback((): boolean => {
        return !!postCode && ukPostCodeRegex.test(postCode);
    }, [postCode])

    const validateCategory = useCallback(() => {
        const isValid = categoryIsValid();

        if (isValid) {
            setState((prevState) => { return { ...prevState, isCategoryIdValid: true } });
        } else {
            setState(prevState => { return { ...prevState, isCategoryIdValid: false } });
        }

        return isValid;
    }, [categoryIsValid, setState])

    const validatePostcode = useCallback(() => {
        const isValid = postCodeIsValid();

        if (isValid) {
            setState(prevState => { return { ...prevState, isPostCodeValid: true } });
        } else {
            setState(prevState => { return { ...prevState, isPostCodeValid: false } });
        }

        return isValid;
    }, [postCodeIsValid, setState])

    return {
        validateCategory,
        validatePostcode,
    }
};