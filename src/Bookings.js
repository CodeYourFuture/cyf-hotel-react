import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import Form from "./Form.js";

const Bookings = () => {
  const [data, setData] = useState([]);
  const [searchVal, setSearchVal] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // let booking = () =>{
  //   setBookings(bookings.concat(FakeBookings));
  // }
  useEffect(() => {
    fetch(`https://hotel-server-boshram.glitch.me/bookings`).then(res => {
      if (res.ok) {
        return res.json().then(data => {
          setData(data.data);
          setLoading(false);
        });
      } else {
        setError(true);
        setLoading(false);
      }
    });
  }, []);

  const search = searchVal => {
    setSearchVal(searchVal.toLowerCase());
  };

  const addCustomer = input => {
    console.log(input);
    fetch("https://hotel-server-boshram.glitch.me/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(input)
    });
  };

  const filterData = data.filter(booking =>
    `${booking.firstName} ${booking.surname}`.toLowerCase().includes(searchVal)
  );

  return (
    <div className="App-content">
      <div className="container">
        {error && <span>error</span>}
        {loading && <span>loading...</span>}
        <Search search={search} />
        <SearchResults data={filterData} />
        <Form addCustomer={addCustomer} data={data} />
      </div>
    </div>
  );
};

export default Bookings;
