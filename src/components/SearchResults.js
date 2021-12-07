import React, { useState } from "react";

import CustomerProfile from "./CustomerProfile";

import SearchResultHeading from "./SearchResultHeading";
import SearchResultsBody from "./SearchResultsBody";
const headingItems = [
  "Title",
  "First Name",
  "Last Name",
  "Email",
  "Room ID",
  "Check in Date",
  "Check out Date",
  "Number Of Nights"
];

export default function SearchResults({ results }) {
  const [customerProfileId, setCustomerProfileId] = useState("");
  return (
    <section className="searchResultTableContainer">
      <table className="table ">
        <SearchResultHeading headingItems={headingItems} />
        <SearchResultsBody
          bookings={results}
          setCustomerProfileId={setCustomerProfileId}
        />
      </table>
      {customerProfileId !== "" ? (
        <CustomerProfile
          id={customerProfileId}
          setCustomerProfileId={setCustomerProfileId}
        />
      ) : null}
    </section>
  );
}
