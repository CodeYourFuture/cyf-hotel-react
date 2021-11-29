import React, { useState } from "react";
import FindDateDifference from "./FindDateDifference";
const TableRowsLoop = props => {
  const [highLightedState, setHighLightedState] = useState([]);
  const toggleHighLight = index => {
    setHighLightedState((highLightedState[index] = !highLightedState[index]));
  };
  return props.results.map((person, index) => {
    const appendNewBool = () => {
      setHighLightedState(array => (array = [...highLightedState, false]));
    };
    appendNewBool();
    return (
      <tr
        key={`tr-${index}`}
        className={highLightedState[index] ? "high-lighted" : ""}
        onClick={toggleHighLight}
      >
        <td key={`id-${index}`}>{person.id}</td>
        <td key={`title-${index}`}>{person.title}</td>
        <td key={`fname-${index}`}>{person.firstName}</td>
        <td key={`lname-${index}`}>{person.surname}</td>
        <td key={`email-${index}`}>{person.email}</td>
        <td key={`roomID-${index}`}>{person.roomID}</td>
        <td key={`inDate-${index}`}>{person.checkInDate}</td>
        <td key={`outDate-${index}`}>{person.checkOutDate}</td>
        <td key={`timeStayed-${index}`}>
          {FindDateDifference(person.checkInDate, person.checkOutDate)}
        </td>
      </tr>
    );
  });
};
export default TableRowsLoop;
