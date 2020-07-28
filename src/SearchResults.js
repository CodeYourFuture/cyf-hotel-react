import React, { useState } from "react";
import HeadingRow from "./HeadingRow";
import BodyRow from "./BodyRow";
import CustomerProfile from "./CustomerProfile";

const SearchResults = props => {
  const [customerId, setCustomerId] = useState(null);

  return (
    <div>
      <table className="table">
        <thead>
          <HeadingRow />
        </thead>
        <tbody>
          {props.results.map((result, index) => (
            <BodyRow
              key={index}
              content={result}
              setCustomerId={setCustomerId}
            />
          ))}
        </tbody>
      </table>

      {customerId ? <CustomerProfile customerId={customerId} /> : null}
    </div>
  );
};

export default SearchResults;
