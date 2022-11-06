import React from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";
import { useState, useEffect } from "react";
const Bookings = () => {
  const search = searchVal => {
    console.info("TO DO!", searchVal);

    // FakeBookings.forEach((value) => {
    //   let emails = value['email'],
    //     names = value['firstName'],
    //     ids = value['id'],
    //     room = value['roomId'],
    //     surname = value['surname'],
    //     title = value['title'],
    //     checkIn = value['checkInDate'],
    //     checkOut = value['checkOutDate'];
    //   if (searchVal == value.names) {

    //   } else {
    //     return
    //   }
    //   console.log(`${emails}, ${names}, ${ids}, ${room}, ${surname}, ${title}, ${checkIn}, ${checkOut}`)
    // });

  };
  const [data, setBookings] = useState([])
  const api = () => {
    fetch(
      `https://cyf-react.glitch.me`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "Test Successful ");
        setBookings(data)
      });
  }

  useEffect(() => {
    api();
  }, []); // Always remember to put an empty array here!


  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults Bookings={data} />
      </div>
    </div>
  );
}

// { <SearchResults /> }

// FakeBookings.forEach((value) => {
//   let emails = value['email'],
//     names = value['firstName'],
//     ids = value['id'],
//     room = value['roomId'],
//     surname = value['surname'],
//     title = value['title'],
//     checkIn = value['checkInDate'],
//     checkOut = value['checkOutDate'];


//   console.log(`${emails}, ${names}, ${ids}, ${room}, ${surname}, ${title}, ${checkIn}, ${checkOut}`)

//   tableTemplate = `
//           <tr>
//             <th scope="row">${ids}</th>
//             <td>${title}</td>
//             <td>${names}</td>
//             <td>${surname}</td>
//             <td>${emails}</td>
//             <td>${room}</td>
//             <td>${checkIn}</td>
//             <td>${checkOut}</td>
//           </tr>`;
// });

// // {
  // FakeBookings.forEach((value) => {
  //   let emails = value['email'],
  //     names = value['firstName'],
  //     ids = value['id'],
  //     room = value['roomId'],
  //     surname = value['surname'],
  //     title = value['title'],
  //     checkIn = value['checkInDate'],
  //     checkOut = value['checkOutDate'];
  //   console.log(`${emails}, ${names}, ${ids}, ${room}, ${surname}, ${title}, ${checkIn}, ${checkOut}`)
  // });


// }

export default Bookings;
