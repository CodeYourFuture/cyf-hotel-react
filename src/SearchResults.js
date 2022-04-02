import React, { useState } from "react";
import moment from "moment";

const caculateNightsSpent = (start, end) => {
  let startDate = moment(start, "D/M/YYYY");
  let endDate = moment(end, "D/M/YYYY");
  return endDate.diff(startDate, "days");
};
const SearchResults = ({ results }) => {
  const [rowIndexClicked, setRowIndexClicked] = useState(null);
  const handlerRowClicked = rowIndex => {
    if (rowIndexClicked !== rowIndex) {
      // handle if user clicks again the same row
      setRowIndexClicked(rowIndex);
    } else {
      setRowIndexClicked(null); // set clicked row to null if same row is selected
    }
  };
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">Title</th>
          <th scope="col">First Name</th>
          <th scope="col">Surname</th>
          <th scope="col">Email</th>
          <th scope="col">Room_Id</th>
          <th scope="col">Check_In_Date</th>
          <th scope="col">Check_Out_Date</th>
          <th scope="col">Nights_Spent</th>
        </tr>
      </thead>
      <tbody>
        {results.map(
          ({
            id,
            title,
            firstName,
            surname,
            email,
            roomId,
            checkInDate,
            checkOutDate
          }) => {
            return (
              <tr
                id={id}
                className={rowIndexClicked === id ? "highlighted" : ""}
                onClick={() => handlerRowClicked(id)}
                key={id}
              >
                <th scope="row">{id}</th>
                <td>{title}</td>
                <td>{firstName}</td>
                <td>{surname}</td>
                <td>{email}</td>
                <td>{roomId}</td>
                <td>{checkInDate}</td>
                <td>{checkOutDate}</td>
                <td>{caculateNightsSpent(checkInDate, checkOutDate)}</td>
              </tr>
            );
          }
        )}
      </tbody>
    </table>
  );
};

export default SearchResults;
