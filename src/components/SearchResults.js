import React, { useState } from "react";
import SearchResultsRow from "./SearchResultsRow";
import CustomerProfile from "./CustomerProfile";

const SearchResults = ({ results }) => {
  const [customerId, setCustomerId] = useState("");
  const [numbersOrder, setNumbersOrder] = useState(true);
  const [namesOrder, setNamesOrder] = useState(true);

  function handleClick(e) {
    setCustomerId(e.target.value);
  }

  function orderNumbers(e) {
    e.stopPropagation();
    let att = e.target.abbr;

    if (numbersOrder) {
      results.sort((a, b) => b[att] - a[att]);
      setNumbersOrder(false);
    } else {
      results.reverse();
      setNumbersOrder(true);
    }
  }

  function orderNames(e) {
    e.stopPropagation();
    let att = e.target.abbr;

    if (namesOrder) {
      results.sort((a, b) => {
        let nA = a[att].toLowerCase();
        let nB = b[att].toLowerCase();
        return nA < nB ? -1 : nA > nB ? 1 : 0;
      });
      setNamesOrder(false);
    } else {
      results.reverse();
      setNamesOrder(true);
    }
  }
  return (
    <div className="row d-flex justify-content-between">
      <div className="col-sm">
        <table className="table table-sm table-bordered border-primary">
          <thead>
            <tr className="table-primary">
              <th scope="col" abbr="id" onClick={orderNumbers}>
                Id
                {numbersOrder ? <span>&#8593;</span> : <span>&#8595;</span>}
              </th>
              <th scope="col">Title</th>
              <th scope="col" abbr="firstName" onClick={orderNames}>
                First name
                {namesOrder ? <span>&#8593;</span> : <span>&#8595;</span>}
              </th>
              <th scope="col" abbr="surname" onClick={orderNames}>
                Surname
                {namesOrder ? <span>&#8593;</span> : <span>&#8595;</span>}
              </th>
              <th scope="col">Email Address</th>
              <th scope="col" abbr="roomId" onClick={orderNumbers}>
                Room id
                {numbersOrder ? <span>&#8593;</span> : <span>&#8595;</span>}
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
