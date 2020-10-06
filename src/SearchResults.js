import React, { useState } from "react";
import CustomerProfile from "./CustomerProfile ";
import TableBody from "./TableBody";
import TableHead from "./TableHead";

const SearchResults = ({ bookingsList }) => {
  const [id, setId] = useState("");

  const getTheId = id => {
    setId(id);
  };

  return (
    <div>
      <table className="table table-hover">
        <TableHead bookingsList={bookingsList} />
        <TableBody bookingsList={bookingsList} getTheId={getTheId} />
      </table>
      {id ? <CustomerProfile id={id} /> : ""}
    </div>
  );
};

export default SearchResults;
