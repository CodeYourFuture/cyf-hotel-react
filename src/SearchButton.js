import React from "react";

export default function SearchButton({ onSubmitHandler }) {
  return (
    <button className="btn btn-primary" onClick={onSubmitHandler}>
      Search
    </button>
  );
}
