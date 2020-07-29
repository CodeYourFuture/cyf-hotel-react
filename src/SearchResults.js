import React, { useState } from "react";
import HeadingRow from "./HeadingRow";
import BodyRow from "./BodyRow";
import CustomerProfile from "./CustomerProfile";

const SearchResults = ({ results }) => {
  const [customerSelected, setCustomerSelected] = useState(null);
  console.log(customerSelected);

  // const handleClick = (e) => {
  //   setCustomerSelected(e.target.id);
  //   console.log(e.target.id);
  // };

  return (
    <div>
      <table className="table">
        <thead>
          <HeadingRow />
        </thead>
        <tbody>
          {results.map(field => {
            return (
              <BodyRow
                key={field.id}
                field={field}
                setClickedBtn={setCustomerSelected}
              />
            );
          })}
        </tbody>
      </table>
      {customerSelected && <CustomerProfile id={customerSelected} />}
    </div>
  );
};
export default SearchResults;
