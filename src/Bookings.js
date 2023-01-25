import React, { useEffect, useState } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
//import FakeBookings from "./data/fakeBookings.json";
import DotLoader from "react-spinners/DotLoader";

const Bookings = () => {
  const [customerList, setBookings] = useState([]);
  const [customerBooking, setCustomerBooking] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [sortElement, setSortElement] = useState("Email");
  const [sort, setSort] = useState(false);

  useEffect(() => {
    fetch(`api/delayed`)
      .then(res => {
        if (!res.ok) throw Error("An error occurred, couldn't fetch the data.");
        return res.json();
      })
      .then(data => {
        let sort = data;
        setLoading(true);
        if (sort)
          sort = data.sort((a, b) =>
            a[sortElement] > b[sortElement] ? 1 : -1
          );
        else
          sort = data.sort((a, b) =>
            a[sortElement] < b[sortElement] ? 1 : -1
          );
        setBookings(sort);
        setCustomerBooking(sort);
      })
      .catch(err => setError(err.message));
  }, [sortElement, sort]);

  const search = searchVal => {
    setBookings(customerBooking);
    let filteredList = customerList.filter(x => {
      if (parseInt(searchVal)) return x.id === parseInt(searchVal);
      else
        return (
          x.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
          x.surname.toLowerCase().includes(searchVal.toLowerCase())
        );
    });
    if (searchVal) setBookings(filteredList);
    else setBookings(customerBooking);
  };

  const handleSortData = e => {
    let keyName = e.target.innerHTML;
    if (keyName === "First Name") keyName = "firstName";
    else if (keyName === "Last Name") keyName = "surname";
    else if (keyName === "Check In") keyName = "checkInDate";
    else if (keyName === "Check Out") keyName = "checkOutDate";
    else if (keyName === "Room ID") keyName = "roomId";
    else if (keyName === "Title" || keyName === "Email")
      keyName = keyName.toLowerCase();
    setSort(!sort);
    setSortElement(keyName);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {loading ? (
          <SearchResults
            handleSort={handleSortData}
            customerObject={customerList}
            error={error}
          />
        ) : (
          <div className="loader">
            <DotLoader color="#36d7b7" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Bookings;
