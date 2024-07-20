import React from "react";
import ReactPaginate, { ReactPaginateProps } from "react-paginate";
import css from "./table.scss";
export interface TableProps<HeadData, BodyData> extends ReactPaginateProps {
    bodyData?: BodyData[];
    headData: HeadData[];
    tableClassName?: string;
}

export type HeadData = Record<string, unknown>;
export type BodyData = Record<string, unknown>;

const getKey = (item: unknown, index: number) => {
    return !React.isValidElement(item) ? item.toString() : `${index}`;
}

export const Table = <HeadData, BodyData>(props: TableProps<HeadData, BodyData>): JSX.Element => {
    const {
        headData,
        bodyData,
        tableClassName,
        onPageChange,
    } = props;

    if (!headData || !headData.length) return null;

    return (
        <section className={css.tableContainer}>
            <table className={tableClassName}>
                <thead>
                    <tr>
                        {headData.map((key, index) => (
                            <td key={index}>
                                {key}
                            </td>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {bodyData?.map((item: BodyData, index: number) =>
                        <tr key={index}>
                            {(Object.values(item)).map((value, valueIndex) => (
                                <td key={getKey(value, valueIndex)}>{value}</td>
                            ))}
                        </tr>
                    )}
                </tbody>
            </table>
            {onPageChange && bodyData.length
                ? <ReactPaginate
                    previousLabel="←"
                    nextLabel="→"
                    containerClassName={css.paginationContainer}
                    activeClassName={css.paginationLinkActive}
                    pageClassName={css.pageLi}
                    pageLinkClassName={css.pageLiLink}
                    previousClassName={css.previous}
                    nextLinkClassName={css.nextLink}
                    previousLinkClassName={css.previousLink}
                    breakClassName={css.pageLi}
                    nextClassName={css.next}
                    breakLinkClassName={css.pageLiLink}
                    {...props}
                />
                : null
            }
        </section>
    );
};
