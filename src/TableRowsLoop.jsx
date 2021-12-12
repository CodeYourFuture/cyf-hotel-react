import React, { useState } from "react";
import FindDateDifference from "./FindDateDifference";
const TableRowsLoop = props => {
  const [highLightedRows, setHighLightedRows] = useState([]);
  return props.results.map((person, index) => {
    return (
      <tr
        key={`tr-${index}`}
        id={`tr-${index}`}
        className={
          highLightedRows.includes(`tr-${index}`) ? "high-lighted" : ""
        }
        onClick={() =>
          setHighLightedRows(oldArr => {
            const found = oldArr.findIndex(x => x === `tr-${index}`);
            return found === -1
              ? [...oldArr, `tr-${index}`]
              : oldArr.filter(x => x !== `tr-${index}`);
          })
        }
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
