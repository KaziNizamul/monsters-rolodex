import React from "react";
import "./searchbox.styles.scss";

// function SearchBox(props) {
function SearchBox({ handleChange }) {
  return (
    <div>
      <input
        className="search"
        type="text"
        placeholder="Search Monster"
        onChange={
          // (evt)=> {
          //   this.setState( {searchField : evt.target.value} )
          //   console.log(this.state.searchField)
          // }                                                              -> this lags in consoling

          // (evt) => {
          //   this.setState(
          //     { searchField: evt.target.value },
          //     function callback() {
          //       // console.log(this.state.searchField)
          //     }
          //   );
          // }                                 -> for better understanding of callback inside setState

          handleChange //                     -> as a props now (earlier this codes was in App.js)
        }
      />
    </div>
  );
}

export default SearchBox;
