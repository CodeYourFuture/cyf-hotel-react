
import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults";
import { Hourglass } from 'react-loader-spinner';

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const search = searchVal => {
    if (searchVal) {
      const matchName = bookings.filter(person => {
        const firstName = (person.firstName || "").toLowerCase();
        const lastName = (person.lastName || "").toLowerCase();
        
        return firstName.includes(searchVal.toLowerCase()) || lastName.includes(searchVal.toLowerCase());
      });
  
      setBookings(matchName);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://temporary-cyf-react.onrender.com/");
        if (!response.ok) {
          throw new Error("SERVER RESPONSE ERROR !!!");
        }
        const data = await response.json()
        
        setBookings(data);
        setLoading(false);
        setIsError(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
        setIsError(true);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {loading ? (
          <div>
            <Hourglass color="#someColor" height={80} width={80} />
            <span>Loading...</span>
          </div>
        ) : isError ? (
          <span>Error loading data</span>
        ) : (
          <SearchResults data={bookings} />
        )}
      </div>
    </div>
  );
};

export default Bookings;
