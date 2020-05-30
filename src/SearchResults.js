import React from "react";
import moment from "moment";

const SearchResults = props => {
  console.log(props);
  return (
    <table className="table">
      <tbody>
        {props.results.map((name, index) => {
          return (
            <tr key={index}>
              <td>{name.id}</td>
              <td>{name.title}</td>
              <td>{name.firstName}</td>
              <td>{name.surname}</td>
              <td>{name.email}</td>
              <td>{name.roomId}</td>

              <td>{name.checkInDate}</td>
              <td>{name.checkOutDate}</td>
              <td>{moment(name.checkOutDate).diff(name.checkInDate, "day")}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default SearchResults;
