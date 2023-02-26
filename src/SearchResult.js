import React from "react";
import TableRow from "./TableRow";

const SearchResult = ({ result }) => {
  console.log(result);

  return (
    <div>
      <table dir="ltr">
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>firstName</th>
            <th>surname</th>
            <th>email</th>
            <th>roomId</th>
            <th>checkInDate</th>
            <th>checkOutDate</th>
          </tr>
        </thead>
        <tbody>
          {result.map((item, index) => (
            <TableRow
              key={index}
              id={item.id}
              title={item.title}
              firstName={item.firstName}
              Surname={item.surname}
              email={item.email}
              roomId={item.roomId}
              checkInDate={item.checkInDate}
              checkOutDate={item.checkOutDate}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResult;
