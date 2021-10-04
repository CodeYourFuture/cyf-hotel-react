import React from "react";

export default function SearchResultHeading({ headingItems }) {
  return (
    <thead className="thead-light">
      <tr>
        {headingItems.map((headingItem, i) => {
          return <th key={`headingItem-${i}`}>{headingItem}</th>;
        })}
      </tr>
    </thead>
  );
}
