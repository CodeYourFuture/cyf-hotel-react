import react from "react";
import fakeBookings from "../data/fakeBookings.json";

const SearchResults = () => {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Title</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">E-mail</th>
          <th scope="col">Room Id</th>
          <th scope="col">Check-in Date</th>
          <th scope="col">Check-out Date</th>
        </tr>
      </thead>

      <tbody>
        {fakeBookings.map((item, index) => (
          <tr key={index}>
            <th scope="row">{index + 1}</th>
            <td>{item.title}</td>
            <td>{item.firstName}</td>
            <td>{item.surname}</td>
            <td>{item.email}</td>
            <td>{item.roomId}</td>
            <td>{item.checkInDate}</td>
            <td>{item.checkOutDate}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SearchResults;

/* id, title, first name, surname, email, room id, check in date and check out date */
