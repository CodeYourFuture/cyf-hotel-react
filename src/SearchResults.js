import Table from "./Table";
import FakeBookings from "./data/fakeBookings.json";
import Bookings from "./Bookings";
import CustomerProfile from "./CustomerProfile";
import React, { useState } from "react";

const SearchResults = (props) => {
  const [selectProfile, setSelectProfile] = useState();
  const showProfile = (id) => {
    setSelectProfile(id);
    console.log(id);
  };
  return (
    <div className="table-content">
      <Table results={props.results} showProfile={showProfile} />
      <CustomerProfile id={selectProfile} />
    </div>
  );
};
export default SearchResults;
