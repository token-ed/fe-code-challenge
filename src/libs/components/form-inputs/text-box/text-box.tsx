import classnames from "classnames";
import React from "react";
import css from "./text-box.scss";

export interface TextBoxProps {
    id?: string;
    isValid?: boolean;
    label?: string;
    maxLength?: number;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
    className?: string;
}

export const TextBox: React.FC<TextBoxProps> = ({
    id,
    isValid,
    maxLength,
    className,
    label,
    onChange,
    value,
    onBlur
}) => {
    const inputStyles = classnames(css.input, { [css.inputNotValid]: isValid === false });

    return (
        <div className={classnames(className, css.textBoxContainer)}>
            <label htmlFor={id} className={css.label}>
                {label}
            </label>
            <input
                id={id}
                className={inputStyles}
                maxLength={maxLength}
                onChange={onChange}
                value={value}
                onBlur={onBlur}
            />
        </div>
    )
};
