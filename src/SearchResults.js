import React from "react";
import Row from "./Row";

const SearchResults = ({ results, table }) => {
  return (
    <>
      <table className="table thead-dark table-bordered">
        <thead className=" thead-dark ">
          <tr>
            {table.map((element, index) => (
              <th key={index} scope="col">
                {element}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {results.map((element, index) => {
            return (
              <Row
                key={index}
                Id={element.id}
                Title={element.title}
                FirstName={element.firstName}
                SureName={element.surname}
                Email={element.email}
                CheckOutDate={element.checkOutDate}
                RoomId={element.roomId}
                CheckInDate={element.checkInDate}
              />
            );
          })}
        </tbody>
      </table>
    </>
  );
};
export default SearchResults;
