// const SearchResults = (props) => {
//   return (
//     <table className="table table-hover">
//       <thead>
//         <tr>
//           <th scope="col">id</th>
//           <th scope="col">Title</th>
//           <th scope="col">First Name</th>
//           <th scope="col">Surname</th>
//           <th scope="col">Email</th>
//           <th scope="col">Room Id</th>
//           <th scope="col">Check in date</th>
//           <th scope="col">Check out date</th>
//           <th scope="col">Number Of Night</th>
//         </tr>
//       </thead>
//       {props.results.map((element) => {
//         return (
//           <tbody>
//             <tr>
//               <th scope="row">{element.id}</th>
//               <td>{element.title}</td>
//               <td>{element.firstName}</td>
//               <td>{element.surname}</td>
//               <td>{element.email}</td>
//               <td>{element.roomId}</td>
//               <td>
//                 <Moment format="DD-MM-YYYY">{element.checkInDate}</Moment>
//               </td>
//               <td>
//                 <Moment format="DD-MM-YYYY">{element.checkOutDate}</Moment>
//               </td>
//               <td>
//                 <Moment diff={element.checkInDate} unit="days">
//                   {element.checkOutDate}
//                 </Moment>
//               </td>
//             </tr>
//           </tbody>
//         );
//       })}
//     </table>
//   );
// };
