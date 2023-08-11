import { useState } from "react";
import moment from "moment";
import CustomerProfile from "./CustomerProfile";

export default function SearchResults({ bookings }) {
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectedProfile, setSelectedProfile] = useState(null);

  const setSelectedProfileFunction = (event, id) => {
    // prevent the row from being highlighted when clicking the button
    event.stopPropagation();
    console.log("setSelectedProfileFunction id:", id);
    setSelectedProfile(id);
  };

  const handleRowClick = (rowId) => {
    if (selectedRows.includes(rowId)) {
      // Row is already selected, remove it from selectedRows
      setSelectedRows(selectedRows.filter((id) => id !== rowId));
    } else {
      // Row is not selected, add it to selectedRows
      setSelectedRows([...selectedRows, rowId]);
    }
    // console.log("handleRowClick", selectedRows);
  };

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">FirstName</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">RoomId</th>
            <th scope="col">CheckInDate</th>
            <th scope="col">CheckOutDate</th>
            <th scope="col">Nights</th>
            <th score="col">Profile</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((element) => (
            <tr
              onClick={() => handleRowClick(element.id)}
              className={
                selectedRows.includes(element.id) ? "selected-row" : ""
              }
              key={element.id}
            >
              <th scope="row">{element.id}</th>
              <td>{element.title}</td>
              <td>{element.firstName}</td>
              <td>{element.surname}</td>
              <td>{element.email}</td>
              <td>{element.roomId}</td>
              <td>{element.checkInDate}</td>
              <td>{element.checkOutDate}</td>

              <td>
                {moment(element.checkOutDate).diff(
                  moment(element.checkInDate),
                  "days"
                )}
              </td>
              <td>
                <button
                  key={element.id}
                  onClick={(event) =>
                    setSelectedProfileFunction(event, element.id)
                  }
                >
                  Show profile
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <CustomerProfile id={selectedProfile} />
    </div>
  );
}
