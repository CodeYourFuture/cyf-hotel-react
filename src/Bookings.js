import React, { useEffect, useState } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
//import FakeBookings from "./data/fakeBookings.json";
import DotLoader from "react-spinners/DotLoader";

const Bookings = () => {
  const [customerList, setBookings] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/delayed`)
      .then(res => {
        if (!res.ok) throw Error("An error occurred, couldn't fetch the data.");
        return res.json();
      })
      .then(data => {
        setBookings(data);
        setLoading(true);
      })
      .catch(err => setError(err.message));
  }, []);
  const search = searchVal => {
    let filteredList = customerList.filter(x => {
      return parseInt(searchVal)
        ? x.id === parseInt(searchVal)
        : x.firstName.toLowerCase() === searchVal.toLowerCase() ||
            x.surname.toLowerCase() === searchVal.toLowerCase();
    });
    setBookings(filteredList);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {!loading ? (
          <SearchResults customerObject={customerList} error={error} />
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
