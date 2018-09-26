import React from "react";
//import moment from 'moment'
// const dateDifference = (start, end) => {
//     const startMoment = moment(start)
//     const endMoment = moment(end)
//     return endMoment.diff(startMoment, "days");
// }

const TableHeader = () => (
  <thead>
    <tr>
      <th>ID</th>
      <th>Title</th>
      <th>First name</th>
      <th>Surname</th>
      <th>Email</th>
    
    </tr>
  </thead>
);
const TableRow = ({
  id,
  title,
  first_name,
  surname,
  email,
  toggleClass,
  className
}) => (
  <tbody>
    <tr onClick = {toggleClass} className={className}>
      <td>{id}</td>
      <td>{title}</td>
      <td>{first_name}</td>
      <td>{surname}</td>
      <td>{email}</td>
    
      {/* <td>{dateDifference(checkInDate, checkOutDate)}</td> */}
    </tr>
  </tbody>
);
export { TableHeader, TableRow };