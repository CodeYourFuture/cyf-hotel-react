import React from "react";
// import fakeBookings from "../data/fakeBookings.json";  PROPS LARLA RESULT A CEVIRDIK

const AddCustomer = props => {
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
        {/* <td>{CalculateDaysTotal (checkInDate, checkOutDate)}</td> */}
      </tr>
    );
  });
  return <tbody>{customerEntry}</tbody>;
};

// function CalculateDaysTotal (checkInDate, checkOutDate){
//     return sayi
// }
export default AddCustomer;
