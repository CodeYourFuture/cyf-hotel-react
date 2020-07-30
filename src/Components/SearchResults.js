import React, { useState, useEffect } from "react";
import moment from "moment";
import TableHead from "./TableHead";
import TableRow from "./TableRow";
import CustomerProfile from "./CustomerProfile";

function SearchResults({ results, newCustomerInfo }) {
  const [customerID, setCustomerID] = useState(0);
  const [allCustomers, setAllCustomers] = useState(results);

  useEffect(() => {
    if (newCustomerInfo) {
      newCustomerInfo.id = allCustomers.length + 1;
      let tempvar = allCustomers.concat(newCustomerInfo);
      setAllCustomers(tempvar);
    }
  }, [newCustomerInfo]);
  console.log(newCustomerInfo);

  return (
    <div>
      <table className="table">
        <TableHead />
        <tbody>
          {allCustomers.map((item, index) => {
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
