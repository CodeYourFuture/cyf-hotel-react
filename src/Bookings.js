import React, { useEffect, useState } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import CustomerProfile from "./CustomerProfile.js";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [customerId, setCustomerId] = useState(null);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [errorOccurred, setErrorOccurred] = useState({
    ok: true,
    status: "",
    statusText: "",
  });

  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
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

  const search = (searchVal) => {
    if (searchVal.trim() === "") {
      setBookings(data);
    } else {
      const filterBookings = bookings.filter((element) => {
        return (
          element.firstName.toLowerCase().startsWith(searchVal.toLowerCase()) ||
          element.surname.toLowerCase().startsWith(searchVal.toLowerCase())
        );
      });
      setBookings(filterBookings);
    }
  };

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
            <span>The Bookings data is loading, please wait...</span>
          </div>
        ) : (
          <SearchResults results={bookings} setCustomerId={setCustomerId} />
        )}
        {customerId && <CustomerProfile id={customerId} />}
      </div>
    </div>
  );
};

export default Bookings;
