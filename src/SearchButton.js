import React from "react";

function SearchButton(props) {
  return (
    <div>
      <button className="btn btn-primary" onClick={props.search}>
        Search
      </button>
    </div>
  );
}

export default SearchButton;
