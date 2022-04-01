import React from "react";

const fakeData = [
  {
    id: 1,
    title: "Mr",
    firstName: "John",
    surname: "Doe",
    email: "johndoe@doe.com",
    roomId: 2,
    checkInDate: "2017-11-21",
    checkOutDate: "2017-11-23"
  }
];
const headings = [
  `id`,
  `title`,
  `firstName`,
  `surname`,
  `email`,
  `roomId`,
  `checkInDate`,
  `checkOutDate`
];
function SearchResults(probs) {
  return (
    <table>
      <thead>
        <tr>
          {headings.map(heading => {
            return <th scope="col">{heading}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {fakeData.map(booking => {
          return (
            <tr>
              <th scope="row">{booking.id}</th>
              {headings.map(heading => {
                if (heading === "id") {
                  return null;
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
}

export default SearchResults;
