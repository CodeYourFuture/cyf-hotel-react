import "./App.css";
import moment from "moment";
import { useState } from "react";
import { CustomerProfile } from "./CustomerProfile";

const SearchResults = ({ results }) => {
  // let [rowColor, setRowColor] = useState("#f7f7f7");
  let [activeRow, setActiveRow] = useState(null);
  let [selectedCustomerId, setSelectedCustomerId] = useState(null);

  function handleClick(rowId) {
    // console.log("Hello", rowId);
    // return setRowColor(rowColor === "#f7f7f7" ? "red" : "#f7f7f7");
    setActiveRow(rowId === activeRow ? null : rowId);
  }

  // console.log(activeRow);
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
            // let a = moment(obj.checkInDate, "YYYY-MM-DD");
            // let b = moment(obj.checkOutDate, "YYYY-MM-DD");
            const dateOne = new Date(obj.checkInDate);
            const dateTwo = new Date(obj.checkOutDate);
            const Difference_In_Time = dateTwo.getTime() - dateOne.getTime();
            const Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
            return (
              <tr
                onClick={() => handleClick(obj.id)}
                style={{
                  backgroundColor: obj.id === activeRow ? "#f2def2" : "#f7f7f7"
                  // color: obj.id === activeRow ? "white" : "black",
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
                <td>{Difference_In_Days}</td>
                <td>
                  <button
                    onClick={() => {
                      console.log(obj.id);
                      setSelectedCustomerId(obj.id);

                      console.log(selectedCustomerId);
                    }}
                    className="btn btn-primary"
                  >
                    Show profile
                  </button>
                </td>
                {/* <td>{moment(b).diff(a, "days")}</td> */}
              </tr>
            );
          })}
        </tbody>
      </table>
      {console.log(selectedCustomerId)}
      {selectedCustomerId === null ? (
        <></>
      ) : (
        <CustomerProfile id={selectedCustomerId} />
      )}
    </div>
  );
};

export default SearchResults;
