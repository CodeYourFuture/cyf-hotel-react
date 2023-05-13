import React from "react";

function SearchButton (props) {
  const {onClick} = props;
  return <button onClick={onClick} className="btn btn-primary">Search</button>;
}

export default SearchButton;

