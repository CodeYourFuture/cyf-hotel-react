import React, { useState } from "react";

const SearchResult = (props) => {
  const [customClass, setCustomClass] = useState("");

  const classToggle = () => {
    setCustomClass((customClass) => (customClass ? "" : "table-primary"));
  };
  return (
    <>
      <tr className={`text-center ${customClass}`} onClick={classToggle}>
        <th scope="row">{props.id}</th>
        <td>{props.title}</td>
        <td>{props.firstName}</td>
        <td>{props.surname}</td>
        <td>{props.email}</td>
        <td>{props.roomId}</td>
        <td>{props.checkInDate}</td>
        <td>{props.checkOutDate}</td>
        <td>{props.diff}</td>
      </tr>
    </>
  );
};

export default SearchResult;
