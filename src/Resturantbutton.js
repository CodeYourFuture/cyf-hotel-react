import React from "react";

export default function Resturantbutton({ buttonOrderProps }) {
  return (
    <div>
      <button className="btn btn-primary" onClick={() => buttonOrderProps()}>
        Add
      </button>
    </div>
  );
}
