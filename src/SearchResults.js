import React, { useState } from "react";

const SearchResults = item => {
  const [isSelected, setIsSelected] = useState(true);
  const colorH = () => {
    setIsSelected(!isSelected);
  };
  return (
    <tbody>
      <tr
        style={
          isSelected
            ? { backgroundColor: "#3450a1" }
            : { backgroundColor: " rgb(12, 14, 114)" }
        }
        onClick={colorH}
      >
        <td>{item.id}</td>
        <td>{item.title}</td>
        <td>{item.firstName}</td>
        <td>{item.surname}</td>
        <td>{item.email}</td>
        <td>{item.roomId}</td>
        <td>{item.checkInDate}</td>
        <td>{item.checkOutDat}</td>
        <td>{item.nights}</td>
      </tr>
    </tbody>
  );
};

export default SearchResults;
