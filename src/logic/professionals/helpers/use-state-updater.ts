import { useCallback } from "react";
import { StateUpdaterProps } from "../interfaces";

interface UseStateUpdaterHook {
    setCategory: (value: string) => void;
    setPostcode: (postCode: string) => void;
}

const onlyNumbersAndLettersRegex = /^[a-zA-Z0-9 ]*$/;

export const useStateUpdater = ({ state, setState }: StateUpdaterProps): UseStateUpdaterHook => {
    const setCategory = useCallback((value: string) => {
        const castedCategoryId = parseInt(value);

        if (!isNaN(castedCategoryId)) {
            setState({ ...state, categoryId: castedCategoryId });
        }

    }, [setState, state])

    const setPostcode = useCallback((postCode: string) => {
        if (onlyNumbersAndLettersRegex.test(postCode))
            setState({ ...state, postCode: postCode.toUpperCase() });
    }, [setState, state])

    return {
        setPostcode,
        setCategory,
    }
};