import React, { useState, useEffect } from "react";
import moment from "moment";
import CustomerProfile from "./CustomerProfile";

const caculateNightsSpent = (start, end) => {
  let startDate = moment(start, "YYYY-M-D");
  let endDate = moment(end, "YYYY-M-D");
  return endDate.diff(startDate, "days");
};
const SearchResults = ({ searchResults }) => {
  const [rowIndexClicked, setRowIndexClicked] = useState(null);
  const [customerID, setCustomerID] = useState(1);
  const [showProfile, setShowProfile] = useState(false);
  const [sortBookings, setSortBookings] = useState(false);
  const [sortQuery, setSortQuery] = useState("");
  const [sortedSearchResults, setSortedSearchResults] = useState(searchResults);

  const handlerRowClicked = rowIndex => {
    if (rowIndexClicked !== rowIndex) {
      // handle if user clicks again the same row
      setRowIndexClicked(rowIndex);
    } else {
      setRowIndexClicked(null); // set clicked row to null if same row is selected
    }
  };
  const handleOnShowProfile = id => {
    setCustomerID(id);
  };
  const handleSortColumnClicked = e => {
    setSortQuery(e.target.id);
    setSortBookings(!sortBookings);
    console.log(sortBookings);
    console.log(sortQuery);
    console.log(sortedSearchResults);
  };
  useEffect(() => {
    const sort = () => {
      let sortedResults = sortedSearchResults.sort((a, b) => {
        if (sortQuery === "surname") return a.surname - b.surname;
        return a;
      });
      setSortedSearchResults(sortedResults);
    };
    sort();
  }, []);

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th id="id" onClick={handleSortColumnClicked} scope="col">
              Id
            </th>
            <th id="title" onClick={handleSortColumnClicked} scope="col">
              Title
            </th>
            <th id="firstName" onClick={handleSortColumnClicked} scope="col">
              First Name
            </th>
            <th id="surname" onClick={handleSortColumnClicked} scope="col">
              Surname
            </th>
            <th id="email" onClick={handleSortColumnClicked} scope="col">
              Email
            </th>
            <th id="roomId" onClick={handleSortColumnClicked} scope="col">
              Room_Id
            </th>
            <th id="checkInDate" onClick={handleSortColumnClicked} scope="col">
              Check_In_Date
            </th>
            <th
              element="checkOutDate"
              onClick={handleSortColumnClicked}
              scope="col"
            >
              Check_Out_Date
            </th>
            <th onClick={handleSortColumnClicked} scope="col">
              Nights_Spent
            </th>
            <th onClick={handleSortColumnClicked} scope="col">
              Show_profile
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedSearchResults &&
            sortedSearchResults.map(
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
                    <td>
                      <button
                        onClick={() => {
                          handleOnShowProfile(id);
                          setShowProfile(true);
                        }}
                        className="btn btn-secondary btn-sm"
                      >
                        Show Profile
                      </button>
                    </td>
                  </tr>
                );
              }
            )}
        </tbody>
      </table>
      <CustomerProfile customerID={customerID} showProfile={showProfile} />
    </div>
  );
};

export default SearchResults;
