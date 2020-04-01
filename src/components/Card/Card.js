import React, { PureComponent } from "react";
import PersonIcon from "@material-ui/icons/Person";
import CallIcon from "@material-ui/icons/Call";
import Rating from "@material-ui/lab/Rating";

import s from "./Card.module.scss";

export default class Card extends PureComponent {
  render() {
    const {
      name = "Name",
      from = "From",
      to = "To",
      rating = 2,
      eta = 3,
      selected = false
    } = this.props;
    return (
      <div className={`${s.cardWrap}  ${selected ? s.selected : ""}`}>
        <div className={s.left}>
          <PersonIcon
            className={`${s.user}  ${selected ? s.selectedUser : ""}`}
          />
        </div>
        <div className={s.center}>
          <div>{name}</div>
          <div>{`${eta} min(s) away`}</div>
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
              readOnly
              name="size-small"
              defaultValue={rating}
              size="small"
            />
          )}
        </div>
      </div>
    );
  }
}
