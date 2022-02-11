import React from "react";
import CustomerProfile from "./CustomerProfile";
import { useState } from "react";
//import moment from "moment";
import Row from "./Row";

const SearchResults = ({ results }) => {
  const [cusid, setCusid] = useState(null);

  const clickEvent = value => setCusid(value);

  return (
    <div className="d-flex">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">title</th>
            <th scope="col">first name</th>
            <th scope="col">surname</th>
            <th scope="col">email</th>
            <th scope="col">room id</th>
            <th scope="col">check in date</th>
            <th scope="col">check out date</th>
            <th scope="col">number of nights</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {results.map(item => {
            return <Row key={item.id} results={item} clickEvent={clickEvent} />;
          })}
        </tbody>
      </table>
      {!cusid ? "" : <CustomerProfile customerId={cusid} />}
    </div>
  );
};
export default SearchResults;
