import React, { useState, useEffect } from "react";
import Search from "./Search";
import SearchResults from "./SearchResults";

const Bookings = () => {
  const [filteredBookings, setFilteredBookings] = useState([]);
  const [allBookings, setAllBookings] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    fetch("https://cyf-react.illicitonion.com/")
      .then(respose => respose.json())
      .then(data => {
        setAllBookings(data);
        setFilteredBookings(data);
      })
      .catch(err => setErrorMessage(err));
  }, []);

  const search = searchVal => {
    let result =
      searchVal !== ""
        ? allBookings.filter(
            element =>
              element.firstName.toLowerCase().indexOf(searchVal.toLowerCase()) >
                -1 ||
              element.surname.toLowerCase().indexOf(searchVal.toLowerCase()) >
                -1
          )
        : allBookings;
    setFilteredBookings(result);
  };
  const addCustomer = newCustomer => {
    let newData = JSON.parse(JSON.stringify(allBookings));
    newData.push(newCustomer);
    setFilteredBookings(newData);
    setAllBookings(newData);
  };
  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {filteredBookings.length > 0 ? (
          <SearchResults
            results={filteredBookings}
            addCustomer_F={addCustomer}
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
