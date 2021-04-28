import React, { useState } from "react";
import moment from "moment";

const SearchResult = props => {
  const [isSelected, setSelected] = useState(false);

  const handleClick = () => {
    setSelected(selected => !selected);
  };

  const { info, index } = props;
  let checkInDate = moment(info.checkInDate);
  let checkOutDate = moment(info.checkOutDate);
  let lengthOfStay = checkOutDate.diff(checkInDate, "days");

  return (
    <tr
      key={index}
      className={isSelected ? "selected" : ""}
      onClick={handleClick}
    >
      <td>{info.title}</td>
      <td>{info.firstName}</td>
      <td>{info.surname}</td>
      <td>{info.email}</td>
      <td>{info.roomId}</td>
      <td>{info.checkInDate}</td>
      <td>{info.checkOutDate}</td>
      <td>{lengthOfStay} Night(s)</td>
    </tr>
  );
};

export default SearchResult;
