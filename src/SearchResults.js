import React from "react";
import moment from "moment";

const headings = [
  `id`,
  `title`,
  `First Name`,
  `Surname`,
  `Email`,
  `Room Id`,
  `check-In`,
  `check Out`,
  `Number Of Nights`
];

const SearchResults = props => {
  return (
    <table className="table">
      <thead className="thead-dark">
        <tr>
          {headings.map(heading => {
            return <th scope="col">{heading}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {props.bookings.map(booking => {
          return (
            <tr>
              <th scope="row">{booking.id}</th>
              {headings.map(heading => {
                if (heading === "id") {
                  return null;
                } else if (heading === "numberOfNights") {
                  const checkIn = moment(booking.checkInDate);
                  const checkOut = moment(booking.checkOutDate);
                  const difference = checkOut.diff(checkIn, "days");
                  return <td>{difference}</td>;
                } else {
                  return <td>{booking[heading]}</td>;
                }
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default SearchResults;

// const SearchResults = (props) => {
//   return (
//           <table class="table">
//           <thead class="thead-dark">
//               <tr>
//                   <th scope="col">ID</th>
//                   <th scope="col">Title</th>
//                   <th scope="col">First Name</th>
//                   <th scope="col">Surname</th>
//                   <th scope="col">Email</th>
//                   <th scope="col">Room id</th>
//                   <th scope="col">Check In Date</th>
//                   <th scope="col">Check Out Date</th>
//               </tr>
//           </thead>
//           <tbody>
//               <tr>
//                   <th scope="row">1</th>
//                   <td>Mark</td>
//                   <td>Otto</td>
//                   {/* <td>@mdo</td>
//                   <td>@mdo</td>
//                   <td>@mdo</td>
//                   <td>@mdo</td>
//                   <td>@mdo</td> */}
//               </tr>
//               <tr>
//                   <th scope="row">2</th>
//                   <td>Jacob</td>
//                   <td>Thornton</td>
//                   {/* <td>@fat</td>
//                   <td>@mdo</td>
//                   <td>@mdo</td>
//                   <td>@mdo</td>
//                   <td>@mdo</td> */}
//               </tr>
//               <tr>
//                   <th scope="row">3</th>
//                   <td>Larry</td>
//                   <td>the Bird</td>
//                   {/* <td>@twitter</td>
//                   <td>@mdo</td>
//                   <td>@mdo</td>
//                   <td>@mdo</td>
//                   <td>@mdo</td> */}
//               </tr>
//               <tr>
//                   <th scope="row">4</th>
//                   <td>Larry</td>
//                   <td>the Bird</td>
//                   {/* <td>@twitter</td>
//                   <td>@mdo</td>
//                   <td>@mdo</td>
//                   <td>@mdo</td>
//                   <td>@mdo</td> */}
//               </tr>
//               <tr>
//                   <th scope="row">5</th>
//                   <td>Larry</td>
//                   <td>the Bird</td>
//                   {/* <td>@twitter</td>
//                   <td>@mdo</td>
//                   <td>@mdo</td>
//                   <td>@mdo</td>
//                   <td>@mdo</td> */}
//               </tr>
//           </tbody>
//         </table>
//   )
// }

// export default SearchResults;
