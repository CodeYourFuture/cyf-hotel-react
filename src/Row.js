import React, { useState } from "react";
import moment from "moment";
import CustomerProfile from "./CustomerProfile";

const Row = props => {
  const [showId, setShowId] = useState("");
  const [clicked, setClicked] = useState(false);
  const idHandler = () => {
    setClicked(!clicked);
    setShowId(props.Id);
    console.log(props.Id);
  };

  const [selectedRow, setSelectedRow] = useState(null);

  const clickHandler = () => {
    setSelectedRow(props.Id);
    if (selectedRow === props.Id) {
      setSelectedRow(null);
    }
  };
  return (
    <tr
      key={props.Id}
      className={selectedRow === props.Id ? "colored" : ""}
      onClick={clickHandler}
    >
      <td>
        <button onClick={idHandler}>Show profile</button>
      </td>
      <td key={1}>{props.Id}</td>
      <td key={2}>{props.Title}</td>
      <td key={3}>{props.FirstName}</td>
      <td key={4}>{props.SureName}</td>
      <td key={5}>{props.Email}</td>
      <td key={6}>{props.RoomId}</td>
      <td key={7}>{props.CheckInDate}</td>
      <td key={8}>{props.CheckOutDate}</td>
      <td key={9}>
        {moment(props.CheckOutDate, "YYYY/MM/DD").diff(
          moment(props.CheckInDate, "YYYY/MM/DD"),
          "days"
        )}
      </td>

      <CustomerProfile id={clicked ? showId : null} />
    </tr>
  );
};
export default Row;
