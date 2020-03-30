import React from "react";
import { useSelector } from "react-redux";

import LocalTaxiIcon from "@material-ui/icons/LocalTaxi";
import PersonIcon from "@material-ui/icons/Person";
import s from "./Header.module.scss";

export default props => {
  const { title = "" } = props;
  const { isLoggedIn } = useSelector(({ isLoggedIn }) => ({
    isLoggedIn
  }));
  return (
    <>
      <header>
        <div className={s.left}>
          <LocalTaxiIcon className={s.taxi} />
          <div className={s.title}>{title}</div>
        </div>
        {isLoggedIn && (
          <div className={s.right}>
            <PersonIcon className={s.user} />
          </div>
        )}
      </header>
    </>
  );
};
