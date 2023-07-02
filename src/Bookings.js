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
    const fetchData = async () => {
      try {
        const response = await fetch("https://cyf-react.glitch.me");
        if (!response.ok) {
          setErrorOccurred({
            ok: response.ok,
            status: response.status,
            statusText: response.statusText,
          });
          throw new Error(response);
        }
        const data = await response.json();
        setBookings(data);
        setData(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
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
