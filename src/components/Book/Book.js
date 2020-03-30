import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { connect } from "react-redux";
import * as R from "ramda";
import Header from "../Header/Header";
import Results from "../Results/Results";
import { searchResults, setResults } from "../../actions/bookingActions";
import s from "./Book.module.scss";

export default props => {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       from: "",
  //       to: ""
  //     };
  //   }
  const dispatch = useDispatch();

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const { results } = useSelector(({ results }) => ({
    results
  }));
  const handleCabSelect = selectedIndex => {};

  const handleSearch = e => {
    if (e.key === "Enter") {
      //   const { from, to } = this.props;
      //   const { searchResults, setResults } = this.props;
      dispatch(searchResults(from, to));
      //   dispatch(setResults(Array.from({ length: 12 })));
    }
  };
  return (
    <>
      <Header title="PICK A RIDE" />
      <main className={s.main}>
        <div className={s.search}>
          <div className={s.from}>
            <TextField
              value={from}
              onChange={e => {
                setFrom(e.target.value);
              }}
              placeholder="Enter from"
              variant="outlined"
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
              placeholder="Enter destination"
              variant="outlined"
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
        <Results {...{ results }}></Results>
        <div className={s.confirm}>
          <Button
            className={s.submit}
            onClick={() => {}}
            variant="contained"
            color="primary"
          >
            CONFIRM RIDE
          </Button>
        </div>
      </main>
    </>
  );
};

// const mapStateToProps = state => {
//   return {
//     results: R.pathOr([], ["results"], state)
//   };
// };
// const mapDispatchToProps = () => ({
//   searchResults,
//   setResults
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Book);
