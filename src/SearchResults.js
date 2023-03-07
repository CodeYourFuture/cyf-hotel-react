import React, { useState }from "react";


const SearchResults = (props) => {
const [selectedRow, setSelectedRow]= useState(null);

function handleClick(rowId) {
  setSelectedRow(rowId === selectedRow ? null:rowId);
}
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">Title</th>
          <th scope="col">First Name</th>
          <th scope="col">Sure Name</th>
          <th scope="col">Email</th>
          <th scope="col">Room id</th>
          <th scope="col">Check in</th>
          <th scope="col">Check out</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map((value, index) => {
          return (
            <tr key={index} onClick={() =>handleClick(value.id)}
            style={{
backgroundColor: value.id === selectedRow ? "gray":"white",
            }} >
              <td>{value.id}</td>
              <td>{value.title}</td>
              <td>{value.firstName}</td>
              <td>{value.surname}</td>
              <td>{value.email}</td>
              <td>{value.roomId}</td>
              <td>{value.checkInDate}</td>
              <td>{value.checkOutDate}</td>
              
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default SearchResults;
