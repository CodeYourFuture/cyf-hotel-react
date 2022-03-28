import moment from "moment";
import React, { useState } from "react";

// const TableBody = (props) => {
//   const people = props.data.results;
//   const persons = Object.values(people)
//   return (<tbody>
//     {persons.map((person) => {
//       Object.values(person).map(details => {
//         console.log(details)
//         return (<td>{details}</td>)
//       })
//     })}
//   </tbody>)
// }

const TableBody = props => {
  const people = props.data.results;

  return (
    <tbody>
      {people.map((person, index) => {
        const [rowColor, setRowColor] = useState(false);
        function highlightRow() {
          setRowColor(!rowColor);
        }

        const checkIn = moment(person.checkInDate);
        const checkOut = moment(person.checkOutDate);
        return (
          <tr
            key={index}
            className={rowColor ? "highlighted" : null}
            onClick={highlightRow}
          >
            <th scope="row">{person.id}</th>
            <td>{person.title}</td>
            <td>{person.firstName}</td>
            <td>{person.surname}</td>
            <td>{person.email}</td>
            <td>{person.roomId}</td>
            <td>{person.checkInDate}</td>
            <td>{person.checkOutDate}</td>
            <td>{checkOut.diff(checkIn, "days")}</td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableBody;
