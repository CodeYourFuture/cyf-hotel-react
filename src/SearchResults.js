import React from "react";

const tableHead = [
  "id",
  "title",
  "first name",
  "surname",
  "email",
  "room id",
  "check in date",
  "check out date"
];

const SearchResults = props => {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            {tableHead.map(head => (
              <th>{head}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {props.results.map(data => (
            <tr>
              <td>{data.id}</td>
              <td>{data.title}</td>
              <td>{data.firstName}</td>
              <td>{data.surname}</td>
              <td>{data.email}</td>
              <td>{data.roomId}</td>
              <td>{data.checkInDate}</td>
              <td>{data.checkOutDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
