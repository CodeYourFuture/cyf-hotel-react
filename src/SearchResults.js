import React, { useState } from "react";
import HeadingRow from "./HeadingRow";
import BodyRow from "./BodyRow";
import CustomerProfile from "./CustomerProfile";
//import CustomerProfileFetcher from "./11";

const SearchResults = props => {
  const [customerProf, setCustomerProf] = useState({});

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
              setCustomerProf={setCustomerProf}
            />
          ))}
        </tbody>
      </table>
      {/* <CustomerProfileFetcher props ={customerProf} setCustomerProf={setCustomerProf} />  */}
      <CustomerProfile props={customerProf} />
    </div>
  );
};

export default SearchResults;
