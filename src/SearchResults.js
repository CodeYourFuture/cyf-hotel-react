import React, { useState } from "react";
import CreateTableRow from "./CreateTableRow";
import CustomerProfile from "./CustomerProfile";

const SearchResults = props => {
  const customerData = props.results;

  const [customerId, setCustomerId] = useState("");

  const selectCustomer = id => {
    setCustomerId(id);
  };

  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">title</th>
            <th scope="col">first Name</th>
            <th scope="col">surname</th>
            <th scope="col">email</th>
            <th scope="col">room id</th>
            <th scope="col">check-in date</th>
            <th scope="col">check-out date</th>
            <th scope="col">nights booked in</th>
            <th scope="col">cumtomer profile</th>
          </tr>
        </thead>
        {/* {props.results} */}

        <tbody>
          {customerData.map((result, index) => {
            return (
              <CreateTableRow
                key={index}
                data={result}
                selectCustomer={selectCustomer}
              />
            );
          })}
        </tbody>
      </table>
      <CustomerProfile customerId={customerId} />
    </div>
  );
};
export default SearchResults;
