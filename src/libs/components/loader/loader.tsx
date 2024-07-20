import loader from "@assets/fe-code-challenge.png";
import { Image } from "@components/image";
import React from "react";
import css from "./loader.scss";

interface Props {
  isLoading?: boolean;
}

export const Loader: React.FC<Props> = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className={css.container}>
      <div className={css.loader}>
        <Image src={loader} />
      </div>
    </div>
  );
};
