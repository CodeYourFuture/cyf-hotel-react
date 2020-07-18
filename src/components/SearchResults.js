// import React from "react";
// //import TableHead from "./TableHead";
// //import TableBody from "./TableBody";

// const SearchResults = ( props ) => {
// const results = props.results;
// return (
//   <table className="table">
//     <thead>
//       <tr>
//         <th scope="col">ID</th>
//         <th scope="col">Title</th>
//         <th scope="col">First Name</th>
//         <th scope="col">Surname</th>
//         <th scope="col">Email</th>
//         <th scope="col">Room ID</th>
//         <th scope="col">Check-In-Date</th>
//         <th scope="col">Check-Out-Date</th>
//         <th scope="col">Number-Of-Nights</th>
//       </tr>
//     </thead>
//     <tbody>
//       {results.map(result => {
//         return (
//           <tr>
//             <td>{result.id}</td>
//             <td>{result.title}</td>
//             <td>{result.firstName}</td>
//             <td>{result.surname}</td>
//             <td>{result.email}</td>
//             <td>{result.roomId}</td>
//             <td>{result.checkInDate}</td>
//             <td>{result.checkOutDate}</td>
//             <td>{moment(result.checkOutDate).diff(result.checkInDate, "days")}</td>
//           </tr>
//         );
//       })}
//     </tbody>
//   </table>
//  );
//  }

// export default SearchResults;
