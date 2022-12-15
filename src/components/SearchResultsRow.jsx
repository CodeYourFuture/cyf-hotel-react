// import React from "react";
// import moment from "moment/moment";

// const SearchResults = props => (
//   <div>
//     <table className="table">
//       <thead>
//         <tr>
//           <th>ID</th>
//           <th>Title</th>
//           <th>First Name</th>
//           <th>Surname</th>
//           <th>Email</th>
//           <th>Room ID</th>
//           <th>Check In Date</th>
//           <th>Check Out Date</th>
//           <th>Number of Nights</th>
//           <th />
//         </tr>
//       </thead>
//       <tbody>
//         {props.results.map((info, i) => (
//           <tr key={i}>
//             <td>{info.id}</td>
//             <td>{info.title}</td>
//             <td>{info.firstName}</td>
//             <td>{info.surname}</td>
//             <td>{info.email}</td>
//             <td>{info.roomId}</td>
//             <td>{info.checkInDate}</td>
//             <td>{info.checkOutDate}</td>
//             <td>
//               {moment(info.checkOutDate).diff(moment(info.checkInDate), "days")}
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   </div>
// );

// export default SearchResults;
