import moment from "moment";
import React, { useState } from "react";

const SearchResults = props => {
  const [selected, setSelected] = useState([]);

  const handleClick = index => {
    setSelected(index);
  };

  return (
    <table className="table  table-bordered">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Title</th>
          <th scope="col">First Name</th>
          <th scope="col">Surname</th>
          <th scope="col">Email Address</th>
          <th scope="col">Room Id</th>
          <th scope="col">Check In Date</th>
          <th scope="col">Check Out Date</th>
          <th scope="col">Number Of Nights</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map((info, index) => (
          <tr
            key={index}
            onClick={() => handleClick(index)}
            className={index === selected ? "bg-color-marked" : ""}
          >
            <td scope="row">{info.id}</td>
            <td scope="row">{info.title}</td>
            <td scope="row">{info.firstName}</td>
            <td scope="row">{info.surname}</td>
            <td scope="row">{info.email}</td>
            <td scope="row">{info.roomId}</td>
            <td scope="row">{info.checkInDate}</td>
            <td scope="row">{info.checkOutDate}</td>
            <td>
              {moment(info.checkOutDate).diff(moment(info.checkInDate), "days")}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SearchResults;
