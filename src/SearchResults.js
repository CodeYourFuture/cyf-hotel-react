import React from "react";

const SearchResults = props => {
  <table class="table">
    {props.results.map(name => {
      return (
        <tr>
          <td>{name.id}</td>
          <td>{name.title}</td>
          <td>{name.firstName}</td>
          <td>{name.surname}</td>
          <td>{name.email}</td>
          <td>{name.roomId}</td>
          <td>{name.checkInDate}</td>
          <td>{name.checkOutDate}</td>
        </tr>
      );
    })}
  </table>;
};

export default SearchResults;
