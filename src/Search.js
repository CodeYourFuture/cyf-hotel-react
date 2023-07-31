import React, { useState } from "react";

const Search = ({ setBookings }) => {
  const [searchInput, setSearchInput] = useState("")

  function handleSearchInput(event) {
    setSearchInput(event.target.value)

  }

  function handleSabmit(e) {
    e.preventDefault()
    if (searchInput !== "") {
      fetch(`https://olha-danylevska-hotel-booking-server.onrender.com/bookings/search?term=${searchInput}`)
        .then(response => {
          if (!response.ok) {
            console.log(response.status)
            setBookings(response.status)
            throw new Error(response.status)
          } else {
            return response.json()
          }
        })
        .then(data => {
          console.log({ data })
          setBookings(data)
        })
    } else if (searchInput === "") {
      fetch(`https://olha-danylevska-hotel-booking-server.onrender.com/bookings`)
        .then(response => {
          if (!response.ok) {
            console.log(response.status)
            setBookings(response.status)
            throw new Error(response.status)
          } else {
            return response.json()
          }
        })
        .then(data => {
          setBookings(data)
        })
    }
  }



  return (
    <div className="search">
      <div className="page-header">
        <h4 className="text-left">Search Bookings</h4>
      </div>
      <div className="row search-wrapper">
        <div className="col">
          <form className="form-group search-box" onSubmit={handleSabmit}>
            <label htmlFor="customerName">Customer name</label>
            <div className="search-row">

              <input
                type="text"
                id="customerName"
                className="form-control"
                placeholder="Customer name"
                value={searchInput}
                onChange={handleSearchInput}
              />
              <button className="btn btn-primary">Search</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
