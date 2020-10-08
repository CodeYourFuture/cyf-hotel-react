import React, { useState } from "react";
import moment from "moment";
import "./BodyRow.css";

const BodyRow = ({ field, setClickedBtn, deleteBooking }) => {
  const [isSelected, setIsSelected] = useState(null);

  console.log(field.id);
  const deleteChangeHandler = event => {
    deleteBooking(field.id);
    event.stopPropagation();
  };

  const buttonChangeHandler = event => {
    setClickedBtn(field.id);
    event.stopPropagation();
  };
  //   const setClassName = id => {

  //     if (!isSelected.includes(id)) {
  //       // setIsSelected([...isSelected, id]);
  //       setIsSelected(isSelected.concat([id]));
  //     } else {
  //       setIsSelected(isSelected.filter(p => p !== id));
  //     }
  //   };

  const nightsSpent = moment(field.checkOutDate).diff(
    field.checkInDate,
    "days"
  );

  return (
    <tr
      onClick={() => setIsSelected(!isSelected)}
      style={
        isSelected
          ? { backgroundColor: "yellow" }
          : { backgroundColor: "white" }
      }
    >
      <th class="table" scope="row">
        {field.id}
      </th>
      <td>{field.title}</td>
      <td>{field.firstName}</td>
      <td>{field.surname}</td>
      <td>{field.email}</td>
      <td>{field.roomId}</td>
      <td>{field.checkInDate}</td>
      <td>{field.checkOutDate}</td>
      <td>{nightsSpent}</td>
      <button
        type="button"
        className="btn btn-danger"
        onClick={deleteChangeHandler}
      >
        X
      </button>

      <button
        type="button"
        className="btn btn-primary"
        onClick={buttonChangeHandler}
      >
        Profile
      </button>
    </tr>
  );
};

export default BodyRow;
