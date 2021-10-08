import React from "react";
import moment from "moment";
// import fakeBookings from "../data/fakeBookings.json";

const AddCustomer = props => {
  console.log(props.result);
  const customerEntry = props.result.map(customer => {
    return (
      <tr key={customer.id}>
        <td>{customer.id}</td>
        <td>{customer.title}</td>
        <td>{customer.firstName}</td>
        <td>{customer.surname}</td>
        <td>{customer.email}</td>
        <td>{customer.roomId}</td>
        <td>{customer.checkInDate}</td>
        <td>{customer.checkOutDate}</td>
        <td>
          {calculateDuration(customer.checkInDate, customer.checkOutDate)}{" "}
          days(s)
        </td>
      </tr>
    );
  });
  return <tbody>{customerEntry}</tbody>;
};
function calculateDuration(checkInDate, checkOutDate) {
  let checkInDay = moment(checkInDate);
  let checkOutDay = moment(checkOutDate);
  return checkOutDay.diff(checkInDay, "days");
}
export default AddCustomer;
