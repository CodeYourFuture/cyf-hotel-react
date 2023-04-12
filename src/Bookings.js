import React, { useState,useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults";
import CustomerProfile from "./CustomerProfile.js";
// import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings,setBookings] = useState ([]);
  const [customerId, setCustomerId] = useState(null);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [errorOccurred, setErrorOccurred] = useState({
    ok: true,
    status: "",
    statusText: "",
  });

  const search = (searchVal) =>{
  if (searchVal.trim() === "") {
      setBookings(data);
    } else {
      const filterBookings = bookings.filter(element => {
        return (
          element.firstName.toLowerCase().startsWith(searchVal.toLowerCase()) ||
          element.surname.toLowerCase().startsWith(searchVal.toLowerCase())
        );
      });
      setBookings(filterBookings);
    }
  };

useEffect(() => {
  fetch(`https://temporary-cyf-react.onrender.com/delayed`)
    .then((res) => {
      if (!res.ok) {
        setErrorOccurred({
          ok: res.ok,
          status: res.status,
          statusText: res.statusText,
        });
        throw new Error(res);
      } else {
        return res.json();
      }
    })
    .then((data) => {
      setBookings(data);
      setData(data);
      setIsLoading(false);
    })
    .catch((error) => {
      console.log(error);
    });
}, []);

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {errorOccurred.ok === false ? (
          <div>
            <span>
              An Error occurred when fetching the Bookings Data :{" "}
              {errorOccurred.status} {errorOccurred.statusText}
            </span>
          </div>
        ) : isLoading === true ? (
          <div>
            <span>The Bookings details is loading, please be patient to wait...</span>
          </div>
        ) : (
        <SearchResults results={bookings} setCustomerId={setCustomerId} />
        )}
      </div>
    </div>
  );
};

export default Bookings;
