import React, { useState, useEffect } from "react";
import Search from "./Search";
import SearchResults from "./SearchResults";

const Bookings = () => {
  const [filteredBookings, setFilteredBookings] = useState([]);
  const [allBookings, setAllBookings] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [sortTableByName, setSortTableByName] = useState("A-Z");
  useEffect(() => {
    fetch("https://cyf-react.illicitonion.com/")
      .then(respose => respose.json())
      .then(data => {
        setAllBookings(data);
        setFilteredBookings(
          data.sort((a, b) => a.firstName.localeCompare(b.firstName))
        );
        setSortTableByName("A-Z");
      })
      .catch(err => setErrorMessage(err));
  }, []);
  const sortTable = sortParm => {
    let sortedBookings;
    if (sortParm === "A-Z") {
      sortedBookings = filteredBookings.sort((a, b) =>
        a.firstName.localeCompare(b.firstName)
      );
    } else {
      sortedBookings = filteredBookings.sort((a, b) =>
        b.firstName.localeCompare(a.firstName)
      );
    }
    setSortTableByName(sortParm);
    setFilteredBookings(sortedBookings);
  };

  const search = searchVal => {
    let result =
      searchVal !== ""
        ? allBookings
            .filter(
              element =>
                element.firstName
                  .toLowerCase()
                  .indexOf(searchVal.toLowerCase()) > -1 ||
                element.surname.toLowerCase().indexOf(searchVal.toLowerCase()) >
                  -1
            )
            .sort((a, b) =>
              sortTableByName === "A-Z"
                ? a.firstName.localeCompare(b.firstName)
                : b.firstName.localeCompare(a.firstName)
            )
        : allBookings;
    setFilteredBookings(result);
  };
  const addCustomer = newCustomer => {
    let newData = JSON.parse(JSON.stringify(allBookings));
    newData.push(newCustomer);
    let sortedBookings;
    if (sortTableByName === "A-Z") {
      sortedBookings = newData.sort((a, b) =>
        a.firstName.localeCompare(b.firstName)
      );
    } else {
      sortedBookings = newData.sort((a, b) =>
        b.firstName.localeCompare(a.firstName)
      );
    }
    setFilteredBookings(sortedBookings);
    setAllBookings(sortedBookings);
  };
  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {filteredBookings.length > 0 ? (
          <SearchResults
            results={filteredBookings}
            addCustomer_F={addCustomer}
            sortTable_F={sortTable}
            sortTableByName_P={sortTableByName}
          />
        ) : errorMessage === "" ? (
          <p className="P_Loading_CSS"> Loading . . . </p>
        ) : (
          <p className="P_Loading_CSS"> {errorMessage} </p>
        )}
      </div>
    </div>
  );
};

export default Bookings;
