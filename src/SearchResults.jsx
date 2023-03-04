import moment from "moment";
import { useState } from "react";

const SearchResults = props => (
  // <table className="table table-striped">
  <table>
    <TableHeader />
    <TableRow data={props.results} />
  </table>
);

const TableHeader = () => (
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Title</th>
      <th scope="col">First Name</th>
      <th scope="col">Surname</th>
      <th scope="col">Email</th>
      <th scope="col">Room ID</th>
      <th scope="col">Check In Date</th>
      <th scope="col">Check Out Date</th>
      <th scope="col">Number Of Nights</th>
    </tr>
  </thead>
);

const TableRow = props => {
  const [highlight, setHighlight] = useState("white");

  const selected = () => {
    setHighlight(highlight =>
      highlight === "white" ? (highlight = "gray") : (highlight = "white")
    );
  };

  return (
    <tbody>
      {props.data.map(eachPerson => (
        <tr key={eachPerson.id} onClick={selected} className={highlight}>
          <td scope="row">{eachPerson.id}</td>
          <td>{eachPerson.title}</td>
          <td>{eachPerson.firstName}</td>
          <td>{eachPerson.surname}</td>
          <td>{eachPerson.email}</td>
          <td>{eachPerson.roomId}</td>
          <td>{eachPerson.checkInDate}</td>
          <td>{eachPerson.checkOutDate}</td>
          <td>
            {moment(eachPerson.checkOutDate).diff(
              moment(eachPerson.checkInDate),
              "days"
            )}
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default SearchResults;
