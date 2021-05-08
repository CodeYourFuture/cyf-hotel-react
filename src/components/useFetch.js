import { useState, useEffect } from "react";

const useFetch = url => {
  let filteredBookings;
  function search(searchVal) {
    if (searchVal) {
      filteredBookings = currentData.filter(
        booking =>
          booking.firstName === searchVal || booking.surname === searchVal
      );
      setData(filteredBookings);
    } else {
      setData(allBookings);
    }
  }

  const [currentData, setData] = useState([]);
  const [allBookings, setAllBookings] = useState([]);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(true);

  function setNewBooking(newBooking) {
    newBooking.id = currentData.length + 1;
    newBooking.roomId = parseInt(newBooking.roomId);
    setData(currentData.concat(newBooking));
  }

  useEffect(() => {
    fetch(url)
      .then(res => {
        if (!res.ok) {
          throw Error("Failed to fetch");
        }
        return res.json();
      })
      .then(data => {
        setData(data);
        setAllBookings(data);
        setIsPending(false);
        setError(null);
      })
      .catch(err => {
        setError(err.message);
        setIsPending(false);
      });
  }, [url]);
  return { currentData, setNewBooking, isPending, error, search };
};

export default useFetch;
