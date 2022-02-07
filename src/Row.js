import React from "react";
import { useState } from "react";
import moment from "moment";

const Row = ({ results }) => {
  const [clicked, setClicked] = useState(null);

  const toggleClass = () => {
    clicked === results.id ? setClicked(null) : setClicked(results.id);
  };

  return (
    <tr
      key={results.id}
      id={results.id}
      className={clicked === results.id ? "highlight" : ""}
      onClick={() => toggleClass(results)}
    >
      <td>{results.title}</td>
      <td>{results.firstName}</td>
      <td>{results.surname}</td>
      <td>{results.email}</td>
      <td>{results.roomId}</td>
      <td>{results.checkInDate}</td>
      <td>{results.checkOutDate}</td>
      <td>
        {moment(results.checkOutDate).diff(moment(results.checkInDate), "days")}
      </td>
    </tr>
  );
};
/*<tr key={item.id} id={item.id} className={clicked === item.id ? "highlight" : ''} onClick={() => toggleClass(results)}>
                <td>{item.title}</td>
                <td>{item.firstName}</td>
                <td>{item.surname}</td>
                <td>{item.email}</td>
                <td>{item.roomId}</td>
                <td>{item.checkInDate}</td>
                <td>{item.checkOutDate}</td>
                <td>
                  {moment(item.checkOutDate).diff(
                    moment(item.checkInDate),
                    "days"
                  )}
                </td>
              </tr>*/
export default Row;
