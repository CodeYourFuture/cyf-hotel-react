import React, { Component } from "react";
import Moment from "moment";
function SearchResult({results}) {
    return <div>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">title</th>
      <th scope="col">firstName</th>
      <th scope="col">surName</th>
      <th scope="col">email</th>
      <th scope="col">roomId</th>
      <th scope="col">checkInDate</th>
      <th scope="col">checkOutDate</th>
      <th scope="col">numberOfNight</th>
    </tr>
  </thead>
  <tbody>
    {
        results.map((item)=>{
            return(
                <tr>
      <th scope="row">{item.id}</th>
      <td>{item.title}</td>
      <td>{item.firstName}</td>
      <td>{item.sureName}</td>
      <td>{item.email}</td>
      <td>{item.roomId}</td>
      <td>{item.checkInDate}</td>
      <td>{item.checkOutDate}</td>
      <td>{checkDiff(item.checkInDate,item.checkOutDate)}</td>
    </tr>
            )
        }
        )
    }
  </tbody>
</table>
    </div>
}
let checkDiff = (InDate, OutDate) => {
    const checkInDate = Moment(InDate, "YYYY-MM-DD");
    const checkOutDate = Moment(OutDate, "YYYY-MM-DD");
    const diff = checkOutDate.diff(checkInDate, "days");
    return diff;
  };
export default SearchResult;