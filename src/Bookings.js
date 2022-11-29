import { React, useState, useEffect } from "react";
import NewBooking from "./NewBooking.js";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
// import SearchResults from "./SearchResults.js";
// import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const search = searchVal => {
    console.info("TO DO!", searchVal);
    const booingFilter = bookings.filter(
      dataCustomer =>
        dataCustomer["firstName"].toLowerCase() == searchVal.toLowerCase() ||
        dataCustomer["surname"].toLowerCase() == searchVal.toLowerCase()
    );
    setBookings([...booingFilter]);
  };

  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [newRow, setNewRow] = useState(false);

  useEffect(() => {
    // fetch(`https://cyf-react.glitch.me/delayed/`) for delyaed data
    // fetch(`https://cyf-react.glitch.me/errors/`) wrong HTTP

    fetch(`https://cyf-react.glitch.me/`)
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Something went wrong");
          setLoading(true);
        }
      })
      .then(data => {
        // console.log(data);
        setBookings(data);
        setLoading(false);
      })
      .catch(error => {
        //  console.log(error);
        setLoading(true);
        setError(`${error}`);
      });
  }, []);
  //  bookings.length === [] ? setLoading(true) : setLoading(false);

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <button className="btn btn-primary" onClick={() => setNewRow(true)}>
          New Booking
        </button>
        {newRow ? <NewBooking /> : null}
        {loading ? (
          error != "" ? (
            <div>
              <p> {error} </p>
            </div>
          ) : (
            <div className="d-flex align-items-center">
              <strong>Loading...</strong>
              <div
                className="spinner-border ml-auto"
                role="status"
                aria-hidden="true"
              ></div>
            </div>
          )
        ) : (
          // <SearchResults bookingData={bookings} />
          <SearchResults bookingData={bookings} />
        )}
      </div>
    </div>
  );
};

export default Bookings;
