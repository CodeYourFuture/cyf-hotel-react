import React, { useState } from "react";
import BookingFormModal from "./BookingFormModal";

const Search = ({ search, bookings, setBookings }) => {
  const [searchInput, setSearchInput] = useState("");
  const [idSearchInput, setIdSearchInput] = useState("");

  const idSearchHandler = e => setIdSearchInput(e.target.value);
  const submitIdSearchInput = e => {
    e.preventDefault();
    search(idSearchInput);
  };

  const handleSearchInput = e => setSearchInput(e.target.value);
  const submitSearchInput = e => {
    e.preventDefault();
    props.search(searchInput);
  };

  return (
    <div className="search">
      <div className="page-header">
        <h4 className="text-center search-bookings">
          Search Bookings or Book Now
        </h4>
      </div>
      <div className="row search-wrapper">
        <div className="col">
          <form onSubmit={submitIdSearchInput}>
            <div className="search-row">
              <div>
                <label className="customer-id" htmlFor="customerId">
                  Customer ID
                </label>
                <input
                  type="text"
                  id="customerID"
                  className="form-control id-input"
                  placeholder="Search by customer's id"
                  value={idSearchInput}
                  onChange={idSearchHandler}
                />
              </div>
              <button className="btn btn-primary search-ids-btn">
                Search IDs
              </button>
            </div>
          </form>
        </div>
        <div className="col">
          <form onSubmit={submitSearchInput}>
            <div className="search-row">
              <div>
                <label className="customer-name" htmlFor="customerName">
                  Customer name
                </label>
                <input
                  type="text"
                  id="customerName"
                  className="form-control name-input"
                  placeholder="Search by customer's name"
                  value={searchInput}
                  onChange={handleSearchInput}
                />
              </div>
              <button className="btn btn-primary search-names-btn">
                Search Names
              </button>
            </div>
          </form>
        </div>
        <div className="booking-modal-button">
          <BookingFormModal bookings={bookings} setBookings={setBookings} />
        </div>
      </div>
    </div>
  );
};

export default Search;
