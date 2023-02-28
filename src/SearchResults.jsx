import React from "react";
import moment from "moment";

export default function SearchResults(props) {
  //   const bookings = [
  //     {
  //       id: "1",
  //       title: "Mrs",
  //       firstName: "John",
  //       surname: "Doe",
  //       email: "johndoe@gmail.com",
  //       roomId: "12A",
  //       checkInDate: "20/02/2023",
  //       checkOutDate: "22/02/2023",
  //     },
  //     {
  //       id: "2",
  //       title: "Mr",
  //       firstName: "Ben",
  //       surname: "Anderson",
  //       email: "benanderson@gmail.com",
  //       roomId: "13B",
  //       checkInDate: "28/02/2023",
  //       checkOutDate: "29/02/2023",
  //     },
  //     {
  //       id: "3",
  //       title: "Miss",
  //       firstName: "Dana",
  //       surname: "Smith",
  //       email: "danasmith@gmail.com",
  //       roomId: "2D",
  //       checkInDate: "8/01/2023",
  //       checkOutDate: "9/01/2023",
  //     },
  //     {
  //       id: "4",
  //       title: "Mr",
  //       firstName: "George",
  //       surname: "Mitea",
  //       email: "georgemitea@gmail.com",
  //       roomId: "1C",
  //       checkInDate: "12/03/2023",
  //       checkOutDate: "14/03/2023",
  //     },
  //   ];

  const bookingList = props.results.map((element) => (
    <tr>
      <td>{element.id}</td>
      <td>{element.title}</td>
      <td>{element.firstName}</td>
      <td>{element.surname}</td>
      <td>{element.email}</td>
      <td>{element.roomId}</td>
      <td>{element.checkInDate}</td>
      <td>{element.checkOutDate}</td>
      <td>
        {moment(element.checkOutDate).diff(moment(element.checkInDate), "days")}
      </td>
    </tr>
  ));
  return (
    <table class="table table-borderless table-hover">
      <thead class="thead-light">
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Title</th>
          <th scope="col">First Name</th>
          <th scope="col">Surname</th>
          <th scope="col">Email</th>
          <th scope="col">Room ID</th>
          <th scope="col">Check-in Date</th>
          <th scope="col">Check-out Date</th>
          <th scope="col">No. of Nights</th>
        </tr>
      </thead>
      <tbody>{bookingList}</tbody>
    </table>
  );
}
