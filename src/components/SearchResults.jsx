import React, { useState } from "react";
import moment from "moment";
import CustomerProfile from "./CustomerProfile";

// 15. Highlight booking row when clicked
// https://bobbyhadz.com/blog/react-add-remove-class-on-click

const SearchResults = ({ results }) => {
  //  const handleClick = (current) => {!current;};
  //15? const [isHighlighted, setIsHighlighted] = useState("highlighted");
  const [showProfile, setShowProfile] = useState(null);
  const handleShowProfile = (index) => {
    setShowProfile(index + 1);
  };

  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Email</th>
            <th scope="col">Room ID</th>
            <th scope="col">Check In Date</th>
            <th scope="col">Check Out Date</th>
            <th scope="col">Diff Date</th>
          </tr>
        </thead>
        <tbody>
          {results.map((item, index) => {
            var a = moment(item.checkInDate);
            var b = moment(item.checkOutDate);
            return (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{item.title}</td>
                <td>{item.firstName}</td>
                <td>{item.surname}</td>
                <td>{item.email}</td>
                <td>{item.roomId}</td>
                <td>{item.checkInDate}</td>
                <td>{item.checkOutDate}</td>
                <td>{b.diff(a, "days")}</td>
                <td>
                  <button
                    type="button"
                    class="btn btn-outline-primary"
                    onClick={() => handleShowProfile(index)}
                  >
                    Show Profile
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {showProfile && <CustomerProfile id={showProfile} />}
    </div>
  );
};

export default SearchResults;
