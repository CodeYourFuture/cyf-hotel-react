import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import Form from "./Form.js";

const Bookings = () => {
  const [data, setData] = useState([]);
  const [searchVal, setSearchVal] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://hotel-server-boshram.glitch.me/bookings"
        );
        const data = await response.json();
        setData(data.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError(true);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const search = searchVal => {
    setSearchVal(searchVal.toLowerCase());
  };

  /////////POST REQUEST/////
  const addCustomer = async input => {
    try {
      const response = await fetch(
        "https://hotel-server-boshram.glitch.me/bookings",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(input)
        }
      );

      const data = await response.json();
      if (data.success) {
        setData(data.data);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    }
  };

  ///////DELETE REQUEST/////
  const deleteHandler = bookingId => {
    console.log(bookingId);
    fetch(`https://hotel-server-boshram.glitch.me/bookings/${bookingId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => setData(data.data));
  };

  const filterData = data.filter(booking =>
    `${booking.firstName} ${booking.surname}`.toLowerCase().includes(searchVal)
  );

  return (
    <div className="App-content">
      <div className="container">
        {error && <span>Something Went WRONG</span>}
        {loading && <span>loading...</span>}
        <Search search={search} />
        <SearchResults deleteHandler={deleteHandler} data={filterData} />
        <Form addCustomer={addCustomer} data={data} />
      </div>
    </div>
  );
};

export default Bookings;
