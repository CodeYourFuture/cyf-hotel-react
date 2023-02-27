import React from "react";
import moment from "moment"
const SearchResults = (results) =>{
return(
  <table className="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Title</th>
      <th scope="col">First name</th>
      <th scope="col">Surname</th>
      <th scope="col">Email</th>
      <th scope="col">Room id</th>
      <th scope="col">Check in date</th>
      <th scope="col">Check out date</th>
      <th scope="col">Total Night(s)</th>
    </tr>
  </thead>
  <tbody>
   {results.results.map(el=>{
    //let a = moment(booking.checkInDate, "YYYY-MM-DD");
    return(
    <tr key={el.id}>
      <td>{el.id}</td>
      <td>{el.title}</td>
      <td>{el.firstName}</td>
      <td>{el.surName}</td>
      <td>{el.email}</td>
      <td>{el.roomId}</td>
      <td>{el.checkInDate}</td>
      <td>{el.checkOutDate}</td>
    </tr>
    )
})}
  </tbody>
</table>
);
};

export default SearchResults;