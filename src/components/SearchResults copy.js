import React, { useState, useEffect } from "react";
import moment from "moment";
import CustomerProfile from "./CustomerProfile";
import Modal from "react-modal";
import "../style/searchResults.scss";

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

  const customStyles = {
    overlay: {
      zIndex: "999",
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      opacity: 0.9,
      background: "#1A132F"
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: 0,
      border: "none"
    }
  };
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
  };
  useEffect(() => {
    const sort = () => {
      if (!sortBookings) return;
      let sortedResults = sortedSearchResults.sort((a, b) => {
        console.log(sortQuery);
        if (a[sortQuery] < b[sortQuery]) return -1;
        return 0;
      });
      setSortedSearchResults(sortedResults);
      console.log(sortBookings);
      console.log(sortQuery);
      console.log(sortedSearchResults);
    };
    sort();
  }, [sortQuery, sortBookings]);

  return (
    <div className="table-content table-responsive" id="bookings">
      <table className="table">
        <thead>
          <tr className="table-header">
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
            <th id="checkOutDate" onClick={handleSortColumnClicked} scope="col">
              Check_Out_Date
            </th>
            <th onClick={handleSortColumnClicked} scope="col">
              Nights Spent
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
                          setShowProfile(true);
                          handleOnShowProfile(id);
                        }}
                        className="btn btn-sm "
                        data-toggle="modal"
                        data-target="#exampleModal"
                      >
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/747/747965.png"
                          alt="show icon"
                          width={"30px"}
                        />
                      </button>
                    </td>
                  </tr>
                );
              }
            )}
        </tbody>
      </table>
      <Modal
        isOpen={showProfile}
        onRequestClose={() => setShowProfile(false)}
        style={customStyles}
      >
        <CustomerProfile customerID={customerID} showProfile={showProfile} />
      </Modal>
    </div>
  );
};

export default SearchResults;
