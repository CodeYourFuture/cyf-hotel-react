import React, { useState } from "react";
import SearchDetails from "./SearchDetails";
import CustomerProfile from "./CustomerProfile";

function SearchResults(props) {
  const [profile, setProfile] = useState(null);

  function setCustomerProfile(id) {
    fetch(`https://cyf-react.glitch.me/customers/${id}`)
      .then(response => response.json())
      .then(data => setProfile(data))
      .catch(error => console.log(error));
  }

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Booking ID</th>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room ID</th>
            <th scope="col">Check in date</th>
            <th scope="col">Check out date</th>
            <th scope="col">Number of nights</th>
            <th scope="col">Customer Profile</th>
          </tr>
        </thead>
        <tbody>
          {props.results.map(detail => (
            <SearchDetails
              key={detail.id}
              detail={detail}
              setCustomerProfile={setCustomerProfile}
            />
          ))}
        </tbody>
      </table>
      {profile && <CustomerProfile profile={profile} />}
    </div>
  );
}

//   const [selectRow, setSelectRow] = useState([]);

//   function handleRowClick(bookingDetails) {
//     const SelectedRows = [...selectRow];
//     if (SelectedRows.includes(bookingDetails)) {
//       setSelectRow(
//         SelectedRows.filter((eachRow) => eachRow !== bookingDetails)
//       );
//     } else {
//       SelectedRows.push(bookingDetails);
//       setSelectRow(SelectedRows);
//     }
//   }

export default SearchResults;
