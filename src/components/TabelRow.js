import React, { useState } from "react";
import moment from "moment";
import CustomerProfile from "./CustomerProfile";

function calculateNumberOfNights(a, b) {
  return moment(a).diff(moment(b), "days");
}

const TableRow = ({ result }) => {
  const [isHighlighted, setIsHighlighted] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  return (
    <tr
      onClick={() => {
        setIsHighlighted(!isHighlighted);
      }}
      className={isHighlighted ? "highlighted" : ""}
    >
      <th scope="row">{result.id}</th>
      <td>{result.title}</td>
      <td>{result.firstName}</td>
      <td>{result.surname}</td>
      <td>{result.email}</td>
      <td>{result.roomId}</td>
      <td>{result.checkInDate}</td>
      <td>{result.checkOutDate}</td>
      <td>
        {calculateNumberOfNights(result.checkOutDate, result.checkInDate)}
      </td>
      <td>
        <button
          onClick={() => {
            setShowProfile(!showProfile);
          }}
        >
          Show profile
        </button>
      </td>
      {showProfile && <CustomerProfile id={result.id} />}
    </tr>
  );
};

export default TableRow;
