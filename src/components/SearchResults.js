import React, { useState } from "react";
import BodyData from "./BodyData";
import CustomerProfile from "./CustomerProfile";

const SearchResult = ({ results }) => {
  const [id, setId] = useState(results);
  const customerId = () => {
    setId(id => {
      const custId = id;
      return custId;
    });
  };
  return (
    <div className="container">
      <table className="table table-striped table-lg">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">title</th>
            <th scope="col">firstName</th>
            <th scope="col">surname</th>
            <th scope="col">email</th>
            <th scope="col">roomId</th>
            <th scope="col">checkInDate</th>
            <th scope="col">checkOutDate</th>
            <th scope="col">customerProfile</th>
          </tr>
        </thead>
        <tbody>
          {results.map(item => {
            return <BodyData {...item} id={customerId} />;
          })}
        </tbody>
      </table>
      <CustomerProfile id={id} />
    </div>
  );
};

export default SearchResult;
