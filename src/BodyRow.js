import React, { useState } from "react";
import moment from "moment";

const BodyRow = props => {
  const [isSelected, setIsSelected] = useState(null);

  const buttonChangeHandler = event => {
    props.setClickedBtn(props.field.id);
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

  const nightsSpent = moment(props.field.checkOutDate).diff(
    props.field.checkInDate,
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
      <th scope="row">{props.field.id}</th>
      <td>{props.field.title}</td>
      <td>{props.field.firstName}</td>
      <td>{props.field.surname}</td>
      <td>{props.field.email}</td>
      <td>{props.field.roomId}</td>
      <td>{props.field.checkInDate}</td>
      <td>{props.field.checkOutDate}</td>
      <td>{nightsSpent}</td>
      <td>
        <button
          type="button"
          className="btn btn-primary"
          onClick={buttonChangeHandler}
        >
          Show profile
        </button>
      </td>
    </tr>
  );
};

export default BodyRow;
