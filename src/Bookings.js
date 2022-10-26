import React from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const search = searchVal => {
    console.info("TO DO!", searchVal);

    FakeBookings.forEach((value) => {
      let emails = value['email'],
        names = value['firstName'],
        ids = value['id'],
        room = value['roomId'],
        surname = value['surname'],
        title = value['title'],
        checkIn = value['checkInDate'],
        checkOut = value['checkOutDate'];
      console.log(`${emails}, ${names}, ${ids}, ${room}, ${surname}, ${title}, ${checkIn}, ${checkOut}`)
    });
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {/*<SearchResults />*/}
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
