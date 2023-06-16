import React from "react";

const SearchButton = (props) => {
  return (
    <button
      className={props.className}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default SearchButton;
