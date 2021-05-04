import React, { useState } from "react";

const diffInDays = (a, b) => {
  const date1 = new Date(a);
  const date2 = new Date(b);
  const diffTime = Math.abs(date2 - date1);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
};

const SearchResult = ({
  id,
  title,
  firstName,
  surname,
  email,
  roomId,
  checkInDate,
  checkOutDate,
  handleProfile
}) => {
  const [selected, setSelected] = useState(false);

  const highlight = () => {
    setSelected(!selected);
  };

  return (
    <>
      <tr className={selected ? "highlighted" : undefined} onClick={highlight}>
        <th scope="row">{id}</th>
        <td>{title}</td>
        <td>{firstName}</td>
        <td>{surname}</td>
        <td>{email}</td>
        <td>{roomId}</td>
        <td>{checkInDate}</td>
        <td>{checkOutDate}</td>
        <td>{diffInDays(checkOutDate, checkInDate) || ""}</td>
        <td>
          <button className="btn btn-primary" onClick={handleProfile}>
            Profile
          </button>
        </td>
      </tr>
    </>
  );
};

export default SearchResult;
