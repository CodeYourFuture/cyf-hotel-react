import React from "react";
import moment from "moment";
const SearchResults2 = props => {
  console.log(props.results[1].firstName);
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">TITLE</th>
          <th scope="col">FIRST NAME</th>
          <th scope="col">SURNAME</th>
          <th scope="col">EMAIL</th>
          <th scope="col">ROOM ID</th>
          <th scope="col">CHECK IN DATE</th>
          <th scope="col">CHECK OUT DATE</th>
          <th scope="col">NUMBER OF NIGHTS</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map((item, i) => (
          <tr key={i}>
            <th scope="row">{item.id}</th>
            <td>{item.title}</td>
            <td>{item.firstName}</td>
            <td>{item.surname}</td>
            <td>{item.email}</td>
            <td>{item.roomId}</td>
            <td>{item.checkInDate}</td>
            <td>{item.checkOutDate}</td>
            <td>
              {moment(item.checkOutDate).diff(moment(item.checkInDate), "day")}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default SearchResults2;
