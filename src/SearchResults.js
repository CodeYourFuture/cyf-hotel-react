import { useState } from "react";
import moment from "moment";

export default function SearchResults(props) {
  const [selectedRows, setSelectedRows] = useState([]);

  const handleRowClick = (rowId) => {
    if (selectedRows.includes(rowId)) {
      // Row is already selected, remove it from selectedRows
      setSelectedRows(selectedRows.filter((id) => id !== rowId));
    } else {
      // Row is not selected, add it to selectedRows
      setSelectedRows([...selectedRows, rowId]);
    }
  };

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">title</th>
            <th scope="col">firstName</th>
            <th scope="col">surname</th>
            <th scope="col">email</th>
            <th scope="col">roomId</th>
            <th scope="col">checkInDate</th>
            <th scope="col">checkOutDate</th>
            <th scope="col">Nights</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((element) => (
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
