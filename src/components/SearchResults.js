import React, { useState } from "react";
import SearchResultsRow from "./SearchResultsRow";
import CustomerProfile from "./CustomerProfile";

const SearchResults = props => {
  const [customerId, setCustomerId] = useState("");
  const [results, setResults] = useState(props.results);
  const [order, setOrder] = useState(true);

  function handleClick(e) {
    e.preventDefault();
    setCustomerId(e.target.value);
  }

  function orderColumn() {
    if (order) {
      results.sort((a, b) => {
        return b.id - a.id;
      });
      setResults(results);
      setOrder(false);
    } else {
      results.sort((a, b) => {
        return a.id - b.id;
      });
      setResults(results);
      setOrder(true);
    }
  }

  return (
    <div className="row d-flex justify-content-between">
      <div className="col-sm">
        <table className="table table-sm table-bordered border-primary">
          <thead>
            <tr className="table-primary">
              <th scope="col" onClick={orderColumn}>
                Id
              </th>
              <th scope="col">Title</th>
              <th scope="col">First name</th>
              <th scope="col">Surname</th>
              <th scope="col">Email Address</th>
              <th scope="col">Room id</th>
              <th scope="col">Check in date</th>
              <th scope="col">Check out date</th>
              <th scope="col">Number of nights</th>
              <th scope="col">Profile</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {results.map((booking, index) => {
              return (
                <SearchResultsRow
                  booking={booking}
                  key={index}
                  handleClick={handleClick}
                />
              );
            })}
          </tbody>
        </table>
      </div>
      <CustomerProfile id={customerId} />
    </div>
  );
};

export default SearchResults;
