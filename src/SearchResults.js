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

const SearchResults = () => {
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
          <tr>
            <td>1</td>
            <td>Mr</td>
            <td>Anthony</td>
            <td>Mog</td>
            <td>123@lalo.com</td>
            <td>523</td>
            <td>13/10/2022</td>
            <td>15/10/2022</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
