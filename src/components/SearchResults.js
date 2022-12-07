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

  function orderNumber(e) {
    let att = e.target.abbr;

    if (order) {
      results.sort((a, b) => {
        return b[att] - a[att];
      });
      setResults(results);
      setOrder(false);
    } else {
      results.sort((a, b) => {
        return a[att] - b[att];
      });
      setResults(results);
      setOrder(true);
    }
  }

  function orderName(e) {
    e.stopPropagation();
    let att = e.target.abbr;

    if (order) {
      results.sort((a, b) => {
        let nA = a[att].toLowerCase();
        let nB = b[att].toLowerCase();
        return nA < nB ? -1 : nA > nB ? 1 : 0;
      });
      setResults(results);
      setOrder(false);
    } else {
      results.reverse();
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
              <th scope="col" abbr="id" onClick={orderNumber}>
                Id
              </th>
              <th scope="col">Title</th>
              <th scope="col" abbr="firstName" onClick={orderName}>
                First name
              </th>
              <th scope="col" abbr="surname" onClick={orderName}>
                Surname
              </th>
              <th scope="col">Email Address</th>
              <th scope="col" abbr="roomId" onClick={orderNumber}>
                Room id
              </th>
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
