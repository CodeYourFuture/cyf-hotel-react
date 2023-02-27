import React from "react";

const SearchResults = item => (
  <tbody>
    <tr>
      <td>{item.id}</td>
      <td>{item.title}</td>
      <td>{item.firstName}</td>
      <td>{item.surname}</td>
      <td>{item.email}</td>
      <td>{item.roomId}</td>
      <td>{item.checkInDate}</td>
      <td>{item.checkOutDat}</td>
      <td>{item.nights}</td>
    </tr>
  </tbody>
);

export default SearchResults;
