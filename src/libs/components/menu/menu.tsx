import logo from "@assets/fe-code-challenge.png";
import { Image } from "@components/image";
import React from "react";
import { Link } from "react-router-dom";
import css from "./menu.scss";

const LOGO_WIDTH = 280;

export const Menu: React.FC = () => {
  return (
    <nav className={css.navigation}>
      <Image className={css.image} src={logo} width={LOGO_WIDTH} />
      <ul className={css.ul}>
        <Link to="/">
          <li>
            <h5>About</h5>
          </li>
        </Link>
        <Link to="/search-professionals">
          <li>
            <h5>Search Professionals</h5>
          </li>
        </Link>
      </ul>
    </nav>
  );
};
