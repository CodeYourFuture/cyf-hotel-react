// /* eslint-disable indent*/
// import React from "react";
// function LengthOfStay(endDate, startDate) {
//   const diff = new Date(endDate) - new Date(startDate);
//   return Math.floor(diff / 86400000);
// }

// function TableBody(props) {
//   return (
//     <tbody>
//       {props.data.map(elem => (
//         <tr key={elem.id}>
//           <th scope="row">{elem.id}</th>
//           <td>{elem.title}</td>
//           <td>{elem.firstName}</td>
//           <td>{elem.surname}</td>
//           <td>{elem.email}</td>
//           <td>{elem.roomId}</td>
//           <td>{elem.checkInDate}</td>
//           <td>{elem.checkOutDate}</td>
//           <td>{LengthOfStay(elem.checkOutDate, elem.checkInDate)}</td>
//         </tr>
//       ))}
//     </tbody>
//   );
// }

// export default TableBody;
