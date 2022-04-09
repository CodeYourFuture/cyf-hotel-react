import React, { useState } from "react";
import TableHeading from "./TableHeading";
import TableBody from "./TableBody";
import CustomerProfile from "./CustomerProfile";

const SearchResults = ({ results }) => {
  const [id, setId] = useState(null);
  const [customer, setCustomer] = useState(null);
  function handleButtonClicked(clickedId) {
    setId(clickedId);
  }
  return (
    <div>
      <div className="table-responsive">
        <table className="table">
          <TableHeading />
          <tbody>
            {results.map((person, index) => {
              return (
                <TableBody
                  key={index}
                  person={person}
                  handleClicked={handleButtonClicked}
                />
              );
            })}
          </tbody>
        </table>
      </div>
      {id && (
        <CustomerProfile
          id={id}
          customer={customer}
          setCustomer={setCustomer}
        />
      )}
    </div>
  );
};

export default SearchResults;
