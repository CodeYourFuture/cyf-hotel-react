import React from "react";
import moment from "moment";

function name(fullInfo) {
  return (
    <tr>
      <th scope="row">{fullInfo.id}</th>
      <td>{fullInfo.title}</td>
      <td>{fullInfo.firstName}</td>
      <td>{fullInfo.surname}</td>
      <td>{fullInfo.email}</td>
      <td>{fullInfo.roomId}</td>
      <td>{fullInfo.checkInDate}</td>{" "}
      {/*moment().diff(Moment|String|Number|Date|Array); */}
      <td>{fullInfo.checkOutDate}</td>
      <td>
        {moment(fullInfo.numOfDays).diff(
          moment(fullInfo.checkInDate),
          fullInfo.checkOutDate
        )}
      </td>
    </tr>
  );
}

const SearchResults = props => {
  return (
    <div className="table">
      <table>
        <tr>
          <th scope="col">id</th>
          <th scope="col">title</th>
          <th scope="col">firstName</th>
          <th scope="col">surname</th>
          <th scope="col">email</th>
          <th scope="col">roomId</th>
          <th scope="col">checkInDate</th>
          <th scope="col">checkOutDate</th>
          <th scope="col">numOfDays</th>
        </tr>
        <tbody>{props.results.map(name)}</tbody>
      </table>
    </div>
  );
};

export default SearchResults;
