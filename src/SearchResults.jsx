import React from "react";
import SearchDetails from "./SearchDetails";

function SearchResults(props) {
  const customerProfile = props.setCustomerProfile;

  const searchResults = props.results.filter(value => {
    return (
      value.firstName.toLowerCase().includes(props.searchInput.toLowerCase()) ||
      value.surname.toLowerCase().includes(props.searchInput.toLowerCase())
    );
  });

  return (
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
        {searchResults.map(detail => (
          <SearchDetails
            key={detail.id}
            updateProfile={props.updateProfile}
            detail={detail}
            customerProfile={customerProfile}
          />
        ))}
      </tbody>
    </table>
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
