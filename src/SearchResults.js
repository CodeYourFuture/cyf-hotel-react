import React from "react";
import moment from "moment";

const SearchResults = props => {
  console.log(props);
  return (
    <table className="table">
      <tbody>
        {props.results.map((data, index) => {
          return (
            <tr key={index}>
              <td>{data.id}</td>
              <td>{data.title}</td>
              <td>{data.firstName}</td>
              <td>{data.surname}</td>
              <td>{data.email}</td>
              <td>{data.roomId}</td>

              <td>{data.checkInDate}</td>
              <td>{data.checkOutDate}</td>
              <td>{moment(data.checkOutDate).diff(data.checkInDate, "day")}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default SearchResults;
