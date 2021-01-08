import React, { useState } from "react";

const diffInDays = (a, b) => {
  const date1 = new Date(a);
  const date2 = new Date(b);
  const diffTime = Math.abs(date2 - date1);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
};

const SearchResult = props => {
  const [selected, setSelected] = useState(false);

  const highlight = () => {
    setSelected(!selected);
  };

  return (
    <>
      <tr className={selected ? "highlighted" : null} onClick={highlight}>
        <th scope="row">{props.id}</th>
        <td>{props.title}</td>
        <td>{props.firstName}</td>
        <td>{props.surname}</td>
        <td>{props.email}</td>
        <td>{props.roomId}</td>
        <td>{props.checkInDate}</td>
        <td>{props.checkOutDate}</td>
        <td>
          {diffInDays(props.checkOutDate, props.checkInDate)
            ? diffInDays(props.checkOutDate, props.checkInDate)
            : ""}
        </td>
        <td>
          <button className="btn btn-primary" onClick={props.handleProfile}>
            Profile
          </button>
        </td>
      </tr>
    </>
  );
};

export default SearchResult;
