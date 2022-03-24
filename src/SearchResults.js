import React from "react";
//import Bookings from "./Bookings";
const SearchResult = props => {
  console.log(props.results, "props");
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">Title</th>
          <th scope="col">First Name</th>
          <th scope="col">Surname</th>
          <th scope="col">Email</th>
          <th scope="col">Room id</th>
          <th scope="col">Check in date</th>
          <th scope="col">Check out date</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map(
          (booking, i) =>
            i
            //          <tr>
            //           <th scope="row">{ i + 1}</th>
            //     <td>{booking.title} </td>
            //     <td>{booking.firstName} </td>
            //           <td>{booking.surname}</td>
            //           <td>{booking.email}</td>
            //           <td>{booking.roomId}</td>
            //     <td>{booking.checkInDate}</td>
            //           <td> {booking.checkOutDate}</td>
            //  </tr>
        )}
      </tbody>
    </table>
  );
  // {
  //   "id": 1,
  //   "title": "Mr",
  //   "firstName": "John",
  //   "surname": "Doe",
  //   "email": "johndoe@doe.com",
  //   "roomId": 2,
  //   "checkInDate": "2017-11-21",
  //   "checkOutDate": "2017-11-23"
  // },

  //  <tr>
  //     <th scope="row">1</th>
  //     <td>Mr</td>
  //    // <td>Mark</td>
  //    // <td>Otto</td>
  //    // <td>Mark@yahoo.com</td>
  //    // <td>201</td>
  //    // <td>2022-3-21</td>
  //    // <td>2022-4-10</td>
  // //    //{" "}
  // //  </tr>;
  //   return (
  // <table class="table">
  //         <thead>
  //           <tr>
  //             <th scope="col">id</th>
  //             <th scope="col">Title</th>
  //             <th scope="col">First Name</th>
  //             <th scope="col">Surname</th>
  //             <th scope="col">Email</th>
  //             <th scope="col">Room id</th>
  //             <th scope="col">Check in date</th>
  //             <th scope="col">Check out date</th>
  //           </tr>
  //         </thead>
  //         <tbody>
  //           <tr>
  //             <th scope="row">1</th>
  //             <td>Mr</td>
  //             <td>Mark</td>
  //             <td>Otto</td>
  //             <td>Mark@yahoo.com</td>
  //             <td>201</td>
  //             <td>2022-3-21</td>
  //             <td>2022-4-10</td>
  //           </tr>
  //           <tr>
  //             <th scope="row">2</th>
  //             <td>Mr</td>
  //             <td>Jacob</td>
  //             <td>Thornton</td>
  //             <td>Jacob@gmail.com</td>
  //             <td>202</td>
  //             <td>2022-3-27</td>
  //             <td>2022-4-18</td>
  //           </tr>
  //           <tr>
  //             <th scope="row">3</th>
  //             <td>Mr</td>
  //             <td>Larry</td>
  //             <td>Bird</td>
  //             <td>Larry.bird@yahoo.com</td>
  //             <td>203</td>
  //             <td>2022-4-12</td>
  //             <td>2022-4-20</td>
  //           </tr>
  //           <tr>
  //             <th scope="row">3</th>
  //             <td>Mrs</td>
  //             <td>Bahamas</td>
  //             <td>Brooke</td>
  //             <td>B.brooke@yahoo.com</td>
  //             <td>204</td>
  //             <td>2022-4-24</td>
  //             <td>2022-4-30</td>
  //           </tr>
  //         </tbody>
  //       </table>

  //     );
};
export default SearchResult;
