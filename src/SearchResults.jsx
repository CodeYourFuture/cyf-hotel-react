import React, { useEffect, useState } from "react";
import SearchDetails from "./SearchDetails";
import CustomerProfile from "./CustomerProfile";

function SearchResults(props) {
  const [profile, setProfile] = useState(null);
  const [sort, setSort] = useState("DEFAULT");
  const [sortedResults, setSortedResults] = useState(props.results);

  useEffect(() => {
    console.log(sort);
    let updatedResults = [...props.results].sort((a, b) => {
      if (sort === "ASC") {
        if (a.firstName > b.firstName) {
          return -1;
        } else if (a.firstName < b.firstName) {
          return 1;
        }
      } else if (sort === "DESC") {
        if (a.firstName > b.firstName) {
          return 1;
        } else if (a.firstName < b.firstName) {
          return -1;
        }
      } else {
        return 0;
      }
    });
    console.log(updatedResults);
    setSortedResults(updatedResults);
  }, [props.results, sort]);

  function setCustomerProfile(id) {
    fetch(`https://cyf-react.glitch.me/customers/${id}`)
      .then(response => response.json())
      .then(data => setProfile(data))
      .catch(error => console.log(error));
  }

  function handleSortChange() {
    if (sort === "ASC") {
      setSort("DESC");
    } else {
      setSort("ASC");
    }
  }

  // function handleAscendingSort() {
  //   let names = props.results.map((detail) => detail);
  //   console.log(names);
  //   let sortedNames = names.sort((a, b) =>
  //     a.firstName.localeCompare(b.firstName)
  //   );
  //   // console.log(sortedNames.reverse());
  //   setSortName(sortedNames);
  // }

  // function handleDescendingSort() {
  //   let names = props.results.map((detail) => detail);
  //   console.log(names);
  //   let sortedNames = names.sort((a, b) =>
  //     b.firstName.localeCompare(a.firstName)
  //   );
  //   console.log(sortedNames);
  // }

  return (
    <div>
      <table className="table" onClick={handleSortChange}>
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
          {sortedResults.map(detail => (
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
