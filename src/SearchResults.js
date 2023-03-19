import React, { useState } from "react";
import SearchRow from "./SearchRow";
import moment from "moment";
/**
 * "id": 1,
    "title": "Mr",
    "firstName": "John",
    "surname": "Doe",
    "email": "johndoe@doe.com",
    "roomId": 2,
    "checkInDate": "2017-11-21",
    "checkOutDate": "2017-11-23"
 */

//will receive props.results which is an array above
//TODO <<< POPULATE the 

// const SearchResults = (props) => {
//     return (
//       <table>
//             Search Results
//        <thead>
//           <tr>
//               {Object.keys(props.results[0]).map((colHeading) => (
//              <th key={colHeading}>{colHeading}</th>
//           ))}
//           </tr>
//         </thead>
//       </table>
//      );
//     };

const SearchResults=(props)=> {
  return (
    <div className="table-responsive">
      <table class="table table-hover table-bordered">
        <thead class="thead-dark">
          <tr className="text-center">
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Room ID</th>
            <th scope="col">Check in Date</th>
            <th scope="col">Check out Date</th>
            <th scope="col">Total Nights</th>
            <th scope="col">Profiles</th>
          </tr>
        </thead>
        <tbody>
          {props.results.map((user) => {
            let a = moment(user.checkInDate, "YYYY-MM-DD");
            let b = moment(user.checkOutDate, "YYYY-MM-DD");
            return (
              <SearchRow
                key={user.id}
                id={user.id}
                title={user.title}
                firstName={user.firstName}
                surname={user.surname}
                email={user.email}
                roomId={user.roomId}
                checkInDate={user.checkInDate}
                checkOutDate={user.checkOutDate}
                diff={b.diff(a, "days")}
                setCustomerId={props.setCustomerId}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );


//   const tr = props.results.map((element) => (
//     <>
//       <SearchRow key={element.id} guest={element} />
//     </>
//   ));
//   return (
//     <>
//       <table class="table">
//         <thead class="thead-dark">
//           <tr>
//             <th scope="col">Id</th>
//             <th scope="col">Title</th>
//             <th scope="col">First</th>
//             <th scope="col">Last</th>
//             <th scope="col">Email</th>
//             <th scope="col">Room id</th>
//             <th scope="col">Check in</th>
//             <th scope="col">Check out</th>
//             <th scope="col">Nights</th>
//             <th scope="col">Profile</th>
//           </tr>
//         </thead>
//         <tbody>{tr}</tbody>
//       </table>
//     </>
//   );
 }

export default SearchResults;