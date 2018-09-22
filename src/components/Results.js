import React, { Component } from "react";
import moment from "moment";

const diffDays = (checkInDate, checkOutDate) => {
  return moment(checkOutDate).diff(moment(checkInDate), "days");
};

// const diffDays = (checkInDate, checkOutDate) => {
//   var numberOfMsInADay = 1000 * 60 * 60 * 24;
//   return (
//     (Date.parse(checkOutDate) - Date.parse(checkInDate)) / numberOfMsInADay
//   );
// };

export default class Results extends Component {
  constructor(props) {
    console.log("receiving props");
    console.log(props);
    super(props);
    this.state = { reservations: props.reservations };
  }

  render() {
    return (
      <div>
        <p>Results ({this.state.reservations.length} found)</p>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>First name</th>
              <th> Surname</th>
              <th>Email</th>
              <th>CheckInDate</th>
              <th>CheckOutDate</th>
              <th>roomId</th>
              <th>NumOfDays</th>
            </tr>
          </thead>
          <tbody>
            {this.props.reservations.map(reservation => (
              <tr>
                <td>{reservation.id}</td>
                <td>{reservation.title}</td>
                <td>{reservation.firstName}</td>
                <td>{reservation.surname}</td>
                <td>{reservation.email}</td>
                <td>{reservation.checkInDate}</td>
                <td>{reservation.checkOutDate}</td>
                <td>{reservation.roomId}</td>
                <td>
                  {diffDays(reservation.checkInDate, reservation.checkOutDate)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

// const Results = props => {
//   return (
//     <div>
//       <p>Results ({props.reservations.length} found)</p>
//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Title</th>
//             <th>First name</th>
//             <th> Surname</th>
//             <th>Email</th>
//             <th>CheckInDate</th>
//             <th>CheckOutDate</th>
//             <th>roomId</th>
//             <th>NumOfDays</th>
//           </tr>
//         </thead>
//         {props.reservations.map(reservation => (
//           <tbody>
//             <tr>
//               <td>{reservation.id}</td>
//               <td>{reservation.title}</td>
//               <td>{reservation.firstName}</td>
//               <td>{reservation.surname}</td>
//               <td>{reservation.email}</td>
//               <td>{reservation.checkInDate}</td>
//               <td>{reservation.checkOutDate}</td>
//               <td>{reservation.roomId}</td>
//               <td>
//                 {diffDays(reservation.checkInDate, reservation.checkOutDate)}
//               </td>
//             </tr>
//           </tbody>
//         ))}
//       </table>
//     </div>
//   );
// };

// export default Results;
