import React, { useState, useEffect } from "react";
import CreateNewBooking from "./components/CreateNewBooking";
import Search from "./components/Search";
import SearchResults from "./components/SearchResults";
const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const search = searchVal => {
    //TO DO: update the function or DATA, currently after search my data is gone, need new fetch
    const searchedNames = bookings.filter(
      person =>
        person.firstName.toLowerCase().includes(searchVal) ||
        person.surname.toLowerCase().includes(searchVal)
    );
    setBookings(searchedNames);
  };
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(true);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://cyf-react.glitch.me/delayed");
        if (!response.ok) {
          setIsLoading(false); //delete loading message from screen
          throw new Error("SERVER RESPONSE ERROR !!!");
        }
        const data = await response.json();
        setBookings(data);
        setIsLoading(false);
        setIsError(true);
      } catch (error) {
        console.log(error);
        setIsError(false);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <section className="searchSection">
        <Search search={search} />
        <div
          style={{ display: `${!isLoading ? "none" : ""}` }}
          className="loading-message"
        >
          <div className="spinner-border text-info" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          Loading data...
        </div>
        {isError ? (
          <SearchResults results={bookings} />
        ) : (
          <div className="loading-message error-message">
            There is a proplem in the server, please try again later....
          </div>
        )}
      </section>
      <CreateNewBooking setBookings={setBookings} />
    </>
  );
};

export default Bookings;
