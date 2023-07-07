import React, { useCallback, useEffect, useState } from "react";
import Axios from "axios";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
// import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [searchVal, setSearchVal] = useState("");
  const [loading, setLoading] = useState(false);

  const search = (searchVal) => {
    console.info("TO DO!", searchVal);
    setSearchVal(searchVal);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await Axios.get("https://cyf-react.glitch.me/delayed");
        setBookings(res.data);
      } catch (error) {
          console.log(error);
      }
      setLoading(true);
    }
    fetchData();  

  }, []);

  const searchOutCome = bookings.filter(
    (el) => el.firstName.includes(searchVal) || el.surname.includes(searchVal)
  );

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} /> 
        {!loading ? (<h1>Loading...</h1>) : (
        <SearchResults results={searchOutCome} /> )
        }
      </div>
    </div>
  );
};

export default Bookings;