import React from "react";

import FakeBookings from "./data/fakeBookings.json";
import Row from "./Row";

const results = FakeBookings;
console.log(results);

const SearchResults = props => {
  return (
    <table className="table thead-dark table-bordered">
      <thead className=" thead-dark ">
        <tr>
          {props.table.map((element, index) => (
            <th key={index} scope="col">
              {element}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.results.map((element, index) => {
          return (
            <Row
              key={index}
              Id={element.id}
              Title={element.title}
              FirstName={element.FirstName}
              SureName={element.sureName}
              Email={element.email}
              CheckOutDate={element.checkOutDate}
              RoomId={element.roomId}
              CheckInDate={element.checkInDate}
            />
          );
        })}
        ;
      </tbody>
    </table>
  );
};
export default SearchResults;
