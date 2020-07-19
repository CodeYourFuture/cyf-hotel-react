import React, { useState } from "react";
import moment from "moment";

const BodyRow = ({ field }) => {
  const [isSelected, setIsSelected] = useState(false);
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
      <th scope="row">{field.id}</th>
      <td>{field.title}</td>
      <td>{field.firstName}</td>
      <td>{field.lastName}</td>
      <td>{field.email}</td>
      <td>{field.roomId}</td>
      <td>{field.checkInDate}</td>
      <td>{field.checkOutDate}</td>
      <td>{nightsSpent}</td>
    </tr>
  );
};

export default BodyRow;
