import React from "react";
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
        {/* <td>
          {CalculateDuration(customer.checkInDate, customer.checkOutDate)}
        </td> */}
      </tr>
    );
  });
  return <tbody>{customerEntry}</tbody>;
};
// function CalculateDuration(checkInDate, checkOutDate) {
//   checkInDay = moment(checkInDate);
//   checkOutDay = moment(checkOutDate);
//   return checkOutDate.diff(checkInDate, "days");
// }
export default AddCustomer;
