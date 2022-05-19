import React from "react";

const SearchButton = props => {
  return (
    <>
      <button className="btn btn-primary" onClick={props.onSubmitHandler}>
        Search
      </button>
    </>
  );
};
export default SearchButton;
