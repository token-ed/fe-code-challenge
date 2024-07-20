import { Dropdown, DropdownProps } from "@components/form-inputs/dropdown";
import { TextBox, TextBoxProps } from "@components/form-inputs/text-box";
import { UseValidationsHook } from "@logic/professionals/helpers/use-validations";
import { InputFields } from "@logic/professionals/interfaces";
import React from "react";
import css from "./styles.shared.scss";

interface Props extends
    Pick<DropdownProps, "options" | "onSelect">,
    Pick<TextBoxProps, "onChange" | "maxLength">,
    UseValidationsHook,
    InputFields {
    onSubmit: () => void;
}

export const Form: React.FC<Props> = ({
    maxLength,
    onChange,
    onSelect,
    onSubmit,
    options,
    categoryId,
    postCode,
    isCategoryIdValid,
    isPostCodeValid,
    validateCategory,
    validatePostcode,
}) => {

    const handleOnSubmit = (event) => {
        event.preventDefault();
        validatePostcode();
        validateCategory();
        onSubmit();
    }

    const handleOnPostcodeBlur = () => {
        validatePostcode();
    }

    const handleOnCategoryBlur = () => {
        validateCategory();
    }

    const handleOnSelect = (value: string) => {
        onSelect(value);
    }

    return (
        <form className={css.formContainer} onSubmit={handleOnSubmit}>
            <Dropdown
                id="category-dropdown"
                isValid={isCategoryIdValid}
                label="Category"
                name="categories"
                onSelect={handleOnSelect}
                options={options}
                selected={categoryId}
                onBlur={handleOnCategoryBlur}
                className={css.dropdown}
            />
            <TextBox
                id="postcode-text-box"
                isValid={isPostCodeValid}
                label="Postcode"
                maxLength={maxLength}
                onBlur={handleOnPostcodeBlur}
                onChange={onChange}
                value={postCode}
                className={css.textBox}
            />
            <button className={css.button} type="submit">Submit</button>
        </form>
    );
};