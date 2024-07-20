import { Option } from "@components/form-inputs/dropdown";
import { Loader } from "@components/loader/loader";
import { Table } from "@components/table/table";
import { Professional } from "@logic/professionals/interfaces";
import { useData } from "@logic/professionals/use-data";
import React, { useCallback, useMemo } from "react";
import ReactStars from "react-stars";
import { Form } from "./form";
import css from "./styles.shared.scss";
interface Props {
  prop?: string;
}

interface ReviewRatingType extends Professional {
  reviewRatingComponent?: React.ReactNode;
}

const TABLE_HEAD_DATA = ["Id", "Name", "Postcode", "Review Rating"];
const PAGE_RANGE_DISPLAYED = 8;
const MARGIN_PAGES = 0;

export const Search: React.FC<Props> = () => {
  const {
    categories,
    categoriesAjaxState,
    categoryId,
    isCategoryIdValid,
    isPostCodeValid,
    onSubmit,
    onPageChange,
    postCode,
    professionalsAjaxState,
    professionalsWithPagination,
    resetProfessionals,
    setCategory,
    setPostcode,
    validateCategory,
    validatePostcode,
  } = useData();

  const inputFieldsAreValid = isCategoryIdValid && isPostCodeValid;

  const handleSetCategory = (value: string) => {
    setCategory(value);
    resetProfessionals();
  };

  const handleSetPostcode = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setPostcode(event.target.value);
    },
    [setPostcode]
  );

  const handleOnSubmit = useCallback(() => {
    onSubmit();
  }, [onSubmit]);

  const handlePageChange = useCallback(
    (selectedItem: { selected: number }) => {
      if (!selectedItem) return null;
      onPageChange(selectedItem.selected + 1);
    },
    [onPageChange]
  );

  const mappedCategories = useMemo(() => {
    const options: Option[] = categories?.map((category) => ({
      label: category.designation,
      value: category.id,
    }));

    return options;
  }, [categories]);

  const mappedProsWithReviewRatingComponent = useMemo(() => {
    const professionalsAux =
      professionalsWithPagination && professionalsWithPagination.professionals
        ? [...professionalsWithPagination.professionals]
        : [];

    const prosWithReviewRating = professionalsAux?.map((proAux): ReviewRatingType => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { reviewRating, ...rest } = proAux;

      return {
        ...rest,
        reviewRatingComponent: (
          <ReactStars
            count={5}
            edit={false}
            size={24}
            value={Math.round(proAux.reviewRating)}
            className={css.stars}
          />
        ),
      };
    });
    return prosWithReviewRating;
  }, [professionalsWithPagination]);

  return (
    <>
      <Loader isLoading={categoriesAjaxState.isLoading || professionalsAjaxState.isLoading} />
      <section className={css.searchContainer}>
        <Form
          maxLength={8}
          onChange={handleSetPostcode}
          onSelect={handleSetCategory}
          onSubmit={handleOnSubmit}
          options={mappedCategories}
          categoryId={categoryId}
          postCode={postCode}
          isCategoryIdValid={isCategoryIdValid}
          isPostCodeValid={isPostCodeValid}
          validateCategory={validateCategory}
          validatePostcode={validatePostcode}
        />
        <Table
          headData={TABLE_HEAD_DATA}
          bodyData={mappedProsWithReviewRatingComponent}
          pageCount={professionalsWithPagination?.totalPages || 0}
          onPageChange={inputFieldsAreValid && handlePageChange}
          disableInitialCallback={true}
          pageRangeDisplayed={PAGE_RANGE_DISPLAYED}
          marginPagesDisplayed={MARGIN_PAGES}
        />
      </section>
    </>
  );
};
