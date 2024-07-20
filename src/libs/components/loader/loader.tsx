import loager from "@assets/loader.gif";
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
        <Image src={loager} />
      </div>
    </div>
  );
};
