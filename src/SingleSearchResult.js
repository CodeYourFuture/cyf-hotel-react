import React, { useState } from "react";
import moment from "moment";

const SingleSearchResult = props => {
  const [isSelected, setSelected] = useState(false);
  const toggleSelected = () => {
    setSelected(!isSelected);
  };
  return (
    <tr onClick={toggleSelected} className={`${isSelected ? "selected" : ""}`}>
      <td>{props.guestElem.id}</td>
      <td>{props.guestElem.title}</td>
      <td>{props.guestElem.firstName}</td>
      <td>{props.guestElem.surname}</td>
      <td>{props.guestElem.email}</td>
      <td>{props.guestElem.roomId}</td>
      <td>{props.guestElem.checkInDate}</td>
      <td>{props.guestElem.checkOutDate}</td>
      <td>
        {moment(props.guestElem.checkOutDate).diff(
          moment(props.guestElem.checkInDate),
          "days"
        )}
      </td>
    </tr>
  );
};

export default SingleSearchResult;
