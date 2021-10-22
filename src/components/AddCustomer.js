import React from "react";
import TableRow from "./TableRow";

// import fakeBookings from "../data/fakeBookings.json";

const AddCustomer = props => {
  const customerEntry = props.result.map(customer => {
    return (
      <TableRow
        getProfileId={props.getProfileId}
        key={customer.id}
        customer={customer}
      />
    );
  });
  return <tbody>{customerEntry}</tbody>;
};
export default AddCustomer;
