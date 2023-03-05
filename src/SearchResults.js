import React, { useState, useEffect } from "react";
import BookingsRow from "./BookingsRow";
import CustomerProfile from "./CustomerProfile";

const SearchResults = (props) => {
  let [guestProfile, setGuestProfile] = useState(null);

  console.log("props");
  console.log(props.results);
  const [data, setData] = useState(props.results);
  const [sortOrder, setSortOrder] = useState("asc");

  //to update the state of data whenever props.results changes.
  useEffect(() => {
    setData(props.results);
  }, [props.results]);

  console.log("data");
  console.log(data);

  const sortBy = (property) => {
    const sortedData = [...data].sort((a, b) => {
      if (sortOrder === "asc") {
        return a[property] > b[property] ? 1 : -1;
      } else {
        return a[property] < b[property] ? 1 : -1;
      }
    });
    console.log("sorted data");
    console.log(sortedData);
    setData(sortedData);

    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  return (
    <div className="table-responsive">
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col" onClick={() => sortBy("id")}>
              Id
            </th>
            <th scope="col" onClick={() => sortBy("title")}>
              Title
            </th>
            <th scope="col" onClick={() => sortBy("firstName")}>
              First name
            </th>
            <th scope="col" onClick={() => sortBy("surname")}>
              Surname
            </th>
            <th scope="col" onClick={() => sortBy("email")}>
              EMAIL
            </th>
            <th scope="col" onClick={() => sortBy("roomId")}>
              Room id
            </th>
            <th scope="col" onClick={() => sortBy("checkInDate")}>
              Check in date
            </th>
            <th scope="col" onClick={() => sortBy("checkOutDate")}>
              Check out date
            </th>
            <th scope="col">Number of nights</th>
            <th scope="col">Profile</th>
          </tr>
        </thead>
        <tbody>
          {data !== "" &&
            data.map((guest) => (
              <BookingsRow
                key={guest.id}
                guest={guest}
                changeGuestProfile={setGuestProfile}
              />
            ))}
        </tbody>
      </table>
      <CustomerProfile guest={guestProfile} />
    </div>
  );
};

export default SearchResults;
