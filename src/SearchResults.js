import moment from "moment";
import React, { useState } from "react";
import CustomerProfile from "./CustomerProfile";
import SearchResultRow from "./SearchResaultRow";

const SearchResults = props => {
  const [customerId, setCustomerId] = useState("");

  const selectCustomer = id => {
    setCustomerId(id);
  };

  return (
    <div>
      <div>
        <table className="table">
          <thead className="thead-dark text-center">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Title</th>
              <th scope="col">First Name</th>
              <th scope="col">Surname</th>
              <th scope="col">Email</th>
              <th scope="col">Room</th>
              <th scope="col">Check in</th>
              <th scope="col">Check out</th>
              <th scope="col">Nights</th>
              <th scope="col">Show Profiles</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {props.results.map((person, index) => (
              <searchResultRow
                key={index}
                person={person}
                selectCustomer={selectCustomer}
              />
            ))}
          </tbody>
        </table>
        <CustomerProfile customerId={customerId} />
      </div>
    </div>
  );
};

export default SearchResults;
