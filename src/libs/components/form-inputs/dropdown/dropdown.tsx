import classnames from "classnames";
import React, { memo, SyntheticEvent, useCallback, useMemo } from "react";
import css from "./dropdown.scss";

export interface Option {
    label: React.ReactNode;
    value: string | number;
}

export interface DropdownProps {
    className?: string;
    id: string;
    isValid?: boolean;
    label: React.ReactNode;
    name?: string;
    onBlur?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    onSelect?: (value: string) => void;
    options?: Option[];
    selected: number | string;
}

export const Dropdown: React.FC<DropdownProps> = memo(({
    className,
    id,
    label,
    name,
    onBlur,
    onSelect,
    options,
    selected,
    isValid,
}) => {
    const containerStyles = classnames(className, css.dropdownContainer);
    const selectStyles = classnames(css.select, { [css.selectNotValid]: isValid === false });

    const handleSelect = useCallback((event: SyntheticEvent<HTMLSelectElement, Event>) => {
        if (event) {
            const { currentTarget } = event;

            onSelect(currentTarget.value);
        }
    }, [onSelect]);

    const selectedItem = useMemo(() => {
        const current = options?.find(option => option.value === selected);
        if (current) return current.value;
    }, [options, selected])

    const items = options?.map(
        option =>
            <option value={option.value} key={option.value}>{option.label}</option>
    );

    if (items && !selectedItem) items.unshift(<option value={0} key="0">Choose Category</option>)

    return (
        <div className={containerStyles}>
            <label htmlFor={id} className={css.label}>{label}</label>
            <select
                className={selectStyles}
                name={name}
                id={id}
                value={selectedItem}
                onChange={handleSelect}
                onBlur={onBlur}
            >
                {items}
            </select>
        </div>
    )
});

Dropdown.displayName = "Dropdown";