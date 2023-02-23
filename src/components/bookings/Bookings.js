import React, { useEffect, useState } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import FakeBookings from "../../data/fakeBookings.json";
import Loading from "./Loading.js";
import AddBookingModal from "./AddBookingModal.js";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [sorter, setSorter] = useState(false);

  const fetchData = async () => {
    try {
      const res = await fetch("https://cyf-react.glitch.me/");
      if (res.status >= 200 && res.status < 300) {
        const data = await res.json();
        setBookings(data);
        setLoading(false);
      } else {
        setLoading(false);
        setError(true);
        throw new Error(res.status);
      }
    } catch (error) {
      setLoading(false);
      setError(true);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const search = searchVal => {
    const newBookings = bookings.filter(booking => {
      return (
        booking.firstName.toLowerCase() === searchVal.toLowerCase() ||
        booking.surname.toLowerCase() === searchVal.toLowerCase()
      );
    });

    setBookings(newBookings);
  };

  const addNewCustomer = customerInfo => {
    setBookings([...bookings, customerInfo]);
  };

  // sort bookings
  const sortBookings = () => {
    let sorterA = 1;
    let sorterB = -1;
    if (sorter) {
      sorterA = 1;
      sorterB = -1;
    } else {
      sorterA = -1;
      sorterB = 1;
    }

    const newList = [...bookings].sort((a, b) =>
      a.firstName[0] > b.firstName[0] ? sorterA : sorterB
    );
    setBookings(newList);
    setSorter(!sorter);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {error && <p>error 500 at fetching data</p>}
        {loading ? (
          <Loading />
        ) : (
          <SearchResults results={bookings} sortBookings={sortBookings} />
        )}
      </div>
      <AddBookingModal addNewCustomer={addNewCustomer} />
    </div>
  );
};

export default Bookings;
