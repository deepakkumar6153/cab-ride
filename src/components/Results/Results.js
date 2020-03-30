import React, { Component } from "react";
// import Button from "@material-ui/core/Button";
// import TextField from "@material-ui/core/TextField";
import PersonIcon from "@material-ui/icons/Person";
import CallIcon from "@material-ui/icons/Call";
import Rating from "@material-ui/lab/Rating";

import s from "./Results.module.scss";

export default props => {
  const { results, onCabSelect } = props;
  return (
    <>
      <div className={s.results} onClick={onCabSelect}>
        {results.length > 0
          ? results.map((result, index) => {
              const {
                selected = false,
                name = "name",
                from = "from",
                to = "to"
              } = result;
              return (
                <div
                  key={index}
                  className={`${s.card} ${selected ? s.selected : ""}`}
                >
                  <div className={s.left}>
                    <PersonIcon className={s.user} />
                  </div>
                  <div className={s.center}>
                    <div>{name}</div>
                    <div>6 min(s) away</div>
                    <div>{`From: ${from}`}</div>
                    <div>{`To: ${to}`}</div>

                    <div></div>
                  </div>
                  <div className={s.right}>
                    {selected ? (
                      <CallIcon className={s.call} />
                    ) : (
                      <Rating
                        className={s.rating}
                        name="size-small"
                        defaultValue={2}
                        size="small"
                      />
                    )}
                  </div>
                </div>
              );
            })
          : null}
      </div>
    </>
  );
};
