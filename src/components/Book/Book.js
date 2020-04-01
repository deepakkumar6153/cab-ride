import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import uuid4 from "uuid4";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import Header from "../Header/Header";
import Card from "../Card/Card";
import { searchResults } from "../../actions/bookingActions";
import { setToastInfo } from "../../actions/appActions";
import s from "./Book.module.scss";

export default () => {
  const dispatch = useDispatch();

  const { results } = useSelector(({ results }) => ({
    results
  }));

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [selectedCabIndex, setSelectedCabIndex] = useState(-1);

  const onCardSelect = index => {
    setSelectedCabIndex(index);
  };

  const handleSearch = e => {
    if (e.key === "Enter") {
      if (from && to) {
        setSelectedCabIndex(-1);
        dispatch(searchResults(from, to));
      } else {
        dispatch(
          setToastInfo({
            show: true,
            message: `Please select From and To destinations`,
            type: "error"
          })
        );
      }
    }
  };
  return (
    <>
      <Header title="PICK A RIDE" />
      <main className={s.main}>
        <div className={s.contentWrap}>
          <div className={s.search}>
            <div className={s.from}>
              <TextField
                value={from}
                onChange={e => {
                  setFrom(e.target.value);
                }}
                placeholder="Enter Start Location"
                variant="standard"
                margin="normal"
                required
                fullWidth
                id="name"
                label="Start From"
                name="from"
                autoFocus
                onKeyDown={handleSearch}
              />
            </div>
            <div className={s.to}>
              <TextField
                value={to}
                onChange={e => {
                  setTo(e.target.value);
                }}
                placeholder="Enter Destination"
                variant="standard"
                margin="normal"
                required
                fullWidth
                id="to"
                label="Destination"
                name="to"
                onKeyDown={handleSearch}
              />
            </div>
          </div>
          {results.length > 0 ? (
            <div className={s.results}>
              {results.map((result, index) => {
                let selected = index === selectedCabIndex;
                return (
                  <div
                    key={uuid4()}
                    className={`${s.card}`}
                    onClick={() => {
                      onCardSelect(index);
                    }}
                  >
                    <Card {...{ ...result, selected }} />
                  </div>
                );
              })}
            </div>
          ) : (
            <div className={s.noResults}>
              Type destinations and press 'Enter' to view cabs
            </div>
          )}

          <div className={s.confirm}>
            <Button
              className={s.submit}
              onClick={() => {
                const { name } = results[selectedCabIndex];
                dispatch(
                  setToastInfo({
                    show: true,
                    message: `${name} is coming to pick you up!!`
                  })
                );
              }}
              variant="contained"
              color="primary"
              disabled={selectedCabIndex < 0}
            >
              CONFIRM RIDE
            </Button>
          </div>
        </div>
      </main>
    </>
  );
};
