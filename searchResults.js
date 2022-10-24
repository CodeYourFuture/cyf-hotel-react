import { check } from "prettier";
import react from "react";
import FakeBookings from "./data/fakeBookings.json";


// // Title
// FakeBookings.forEach((title) => {
//   <td>{names['title']}</td>
// })

// // Names
// FakeBookings.forEach((names) => {
//   <td>{names['firstName']}</td>
// })

// // surnames
// FakeBookings.forEach((surNames) => {
//   <td>{surNames['surname']}</td>
// })

// // email
// FakeBookings.forEach((email) => {
//   <td>{email['email']}</td>
// })

// // roomId
// FakeBookings.forEach((roomId) => {
//   <td>{roomId['roomId']}</td>
// })

// // check In Date
// FakeBookings.forEach((checkIn) => {
//   <td>{checkIn['checkInDate']}</td>
// })
// // check out Date
// FakeBookings.forEach((checkOut) => {
//   <td>{checkOut['checkOutDate']}</td>
// })




// 
function table() {
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">id</th>
            <th scope="col">title</th>
            <th scope="col">first name</th>
            <th scope="col">surname</th>
            <th scope="col">email</th>
            <th scope="col">room id</th>
            <th scope="col">check in date</th>
            <th scope="col">check out date</th>
          </tr>
        </thead>
        <tbody>
          {FakeBookings.forEach((value) => {
            let emails = value['email'],
              names = value['firstName'],
              ids = value['id'],
              room = value['roomId'],
              surname = value['surname'],
              title = value['title'],
              checkIn = value['checkInDate'],
              checkOut = value['checkOutDate'];


            console.log(`${emails}, ${names}, ${ids}, ${room}, ${surname}, ${title}, ${checkIn}, ${checkOut}`)

            const tableTemplate = `
          <tr>
            <th scope="row">${ids}</th>
            <td>${title}</td>
            <td>${names}</td>
            <td>${surname}</td>
            <td>${emails}</td>
            <td>${room}</td>
            <td>${checkIn}</td>
            <td>${checkOut}</td>
          </tr>`;
            return tableTemplate
          })}
        </tbody>
      </table>
    </div>
  )
}