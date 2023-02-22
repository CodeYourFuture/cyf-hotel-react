import moment from "moment";
import React, { useState } from "react";

function SearchResult(props) {
  const [selectedIndex, setSelectedIndex] = useState();

  const handleClick = checkIndex => {
    return selectedIndex === checkIndex
      ? setSelectedIndex(null)
      : setSelectedIndex(checkIndex);
  };
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">First name</th>
            <th scope="col">Surname</th>
            <th scope="col">email</th>
            <th scope="col">Room id</th>
            <th scope="col">Check in date</th>
            <th scope="col">Check out</th>
            <th scope="col">Number of nights</th>
          </tr>
        </thead>
        <tbody>
          {props.results.map(item => {
            var a = moment(item.checkOutDate);
            var b = moment(item.checkInDate);
            a.diff(b, "days");
            return (
              <tr
                key={item}
                onClick={() => handleClick(item)}
                className={selectedIndex === item ? "clicked" : "unclicked"}
              >
                <th scope="row">{item.id}</th>
                <td>{item.title}</td>
                <td>{item.firstName}</td>
                <td>{item.surname}</td>
                <td>{item.email}</td>
                <td>{item.roomId}</td>
                <td>{item.checkInDate}</td>
                <td>{item.checkOutDate}</td>
                <td>{a.diff(b, "days")}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default SearchResult;
