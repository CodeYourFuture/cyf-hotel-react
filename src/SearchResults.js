// import { check } from "prettier";
import react, { useState } from "react";
import FakeBookings from "./data/fakeBookings.json";


function SearchResults() {
  const [data, setData] = useState(null)
  useEffect(() => {
    fetch(
      `${FakeBookings}`
    )
      .then(res => res.json())
      .then(data => {
        setData(data);
      });
  }, []);

  if (!data) {
    return null;
  } else {
    return (
      <div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }


}





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

// {
//   FakeBookings.map(value => {
//     <tr>
//       <th scope="row">${value["id"]}</th>
//       <td key={value}>${value["title"]}</td>
//       <td>${value["firstName"]}</td>
//       <td>${value["surname"]}</td>
//       <td>${value["email"]}</td>
//       <td>${value["roomId"]}</td>
//       <td>${value["checkInDate"]}</td>
//       <td>${value["checkOutDate"]}</td>
//     </tr>
//   }
//   )
// }

//


// let emails = value["email"],
//   names = value["firstName"],
//   ids = value["id"],
//   room = value["roomId"],
//   surname = value["surname"],
//   title = value["title"],
//   checkIn = value["checkInDate"],
//   checkOut = value["checkOutDate"];


// {
//   FakeBookings.forEach(value => {
// let emails = value["email"],
//   names = value["firstName"],
//   ids = value["id"],
//   room = value["roomId"],
//   surname = value["surname"],
//   title = value["title"],
//   checkIn = value["checkInDate"],
//   checkOut = value["checkOutDate"];

//     console.log(
//       `${emails}, ${names}, ${ids}, ${room}, ${surname}, ${title}, ${checkIn}, ${checkOut}`
//     );

//     const tableTemplate = `
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
//     return tableTemplate;
//   })
// }


export default SearchResults;