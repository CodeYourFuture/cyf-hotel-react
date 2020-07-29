import React, { useState } from "react";
import moment from "moment";
import TableHead from "./TableHead";
import TableRow from "./TableRow";
import CustomerProfile from "./CustomerProfile";

function SearchResults(props) {
  const [customerID, setCustomerID] = useState(0);
  return (
    <div>
      <table className="table">
        <TableHead />
        <tbody>
          {props.results.map((item, index) => {
            const nightsSpent = moment(item.checkOutDate).diff(
              item.checkInDate,
              "days"
            );
            return (
              <TableRow
                item={item}
                key={index}
                nightsSpent={nightsSpent}
                setCustomerID={setCustomerID}
              />
            );
          })}
        </tbody>
      </table>
      <CustomerProfile id={customerID} />
    </div>
  );
}

export default SearchResults;
