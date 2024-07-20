import loader from "@assets/loader.gif";
import { Image } from "@components/image";
import classNames from "classnames";
import React from "react";
import css from "./loader.scss";

interface Props {
  isLoading?: boolean;
}

export const Loader: React.FC<Props> = ({ isLoading }) => {
  const styles = classNames({ [css.hidden]: !isLoading }, css.container);
  return (
    <div className={styles}>
      <div className={css.loader}>
        <Image src={loader} />
      </div>
    </div>
  );
};
