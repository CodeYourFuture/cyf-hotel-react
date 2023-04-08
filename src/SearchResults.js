import "./App.css";
import moment from "moment";
import { useState } from "react";
import { CustomerProfile } from "./CustomerProfile";

const SearchResults = ({ results }) => {
  let [activeRow, setActiveRow] = useState(null);
  let [selectedCustomerId, setSelectedCustomerId] = useState(null);

  function handleClick(rowId) {
    setActiveRow(rowId === activeRow ? null : rowId);
  }

  return (
    <div>
      <h4>Search Results</h4>
      <table>
        <thead>
          <tr>
            <th className="table-titles">Id</th>
            <th className="table-titles">Title</th>
            <th className="table-titles">First Name</th>
            <th className="table-titles">Surname</th>
            <th className="table-titles">Email</th>
            <th className="table-titles">Room Id</th>
            <th className="table-titles">Check in date</th>
            <th className="table-titles">Check out date</th>
            <th className="table-titles">Nights Stayed</th>
            <th className="table-titles">Customer Profile</th>
          </tr>
        </thead>
        <tbody>
          {results.map(obj => {
            const dateOne = new Date(obj.checkInDate);
            const dateTwo = new Date(obj.checkOutDate);
            const differenceInTime = dateTwo.getTime() - dateOne.getTime();
            const differenceInDays = differenceInTime / (1000 * 3600 * 24);
            return (
              <tr
                onClick={() => handleClick(obj.id)}
                style={{
                  backgroundColor: obj.id === activeRow ? "#f2def2" : "#f7f7f7"
                }}
              >
                <td>{obj.id}</td>
                <td>{obj.title}</td>
                <td>{obj.firstName}</td>
                <td>{obj.surname}</td>
                <td>{obj.email}</td>
                <td>{obj.roomId}</td>
                <td>{obj.checkInDate}</td>
                <td>{obj.checkOutDate}</td>
                <td>{differenceInDays}</td>
                <td>
                  <button
                    onClick={() => {
                      setSelectedCustomerId(obj.id);
                    }}
                    className="btn btn-primary"
                  >
                    Show profile
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {selectedCustomerId === null ? (
        <></>
      ) : (
        <CustomerProfile id={selectedCustomerId} />
      )}
    </div>
  );
};

export default SearchResults;
