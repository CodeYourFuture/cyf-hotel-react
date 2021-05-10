import React, { useState } from "react";
import moment from "moment";

const SearchResult = props => {
  const [isSelected, setSelected] = useState(false);

  const highlightRow = () => {
    setSelected(selected => !selected);
  };

  const test = () => {
    props.handleClickButton(props.info.id);
  };
  const { info, index } = props;
  let checkInDate = moment(info.checkInDate);
  let checkOutDate = moment(info.checkOutDate);
  let lengthOfStay = checkOutDate.diff(checkInDate, "days");

  return (
    <tr
      key={index}
      className={isSelected ? "selected" : ""}
      onClick={highlightRow}
    >
      <td>{info.title}</td>
      <td>{info.firstName}</td>
      <td>{info.surname}</td>
      <td>{info.email}</td>
      <td>{info.roomId}</td>
      <td>{info.checkInDate}</td>
      <td>{info.checkOutDate}</td>
      <td>{lengthOfStay} Night(s)</td>
      <button className="btn btn-primary" onClick={test}>
        Show profile
      </button>
    </tr>
  );
};

export default SearchResult;
