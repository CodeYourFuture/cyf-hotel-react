import React from "react";
import moment from "moment";

const handleClick = () => {
  console.log("Row Clicked!");
};

const SearchResults = props => {
  const tableData = props.results;
  const newTableData = tableData.map(resultData => (
    <tr onClick={handleClick}>
      <th scope="row">{resultData.id}</th>
      <td>{resultData.title}</td>
      <td>{resultData.firstName}</td>
      <td>{resultData.surname}</td>
      <td>{resultData.email}</td>
      <td>{resultData.roomId}</td>
      <td>{resultData.checkInDate}</td>
      <td>{resultData.checkOutDate}</td>
      <td>
        {moment(resultData.checkOutDate).diff(resultData.checkInDate, "days")}
      </td>
    </tr>
  ));

  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">title</th>
          <th scope="col">first name</th>
          <th scope="col">surname</th>
          <th scope="col">email</th>
          <th scope="col">room id</th>
          <th scope="col">check in date</th>
          <th scope="col">check out date</th>
          <th scopr="col">nights</th>
        </tr>
      </thead>

      <tbody>{newTableData}</tbody>
    </table>
  );
};

export default SearchResults;
