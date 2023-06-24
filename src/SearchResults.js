import React, {useState} from "react";
import "./SearchResults.css";
import data from "./data/fakeBookings.json";
// import moment from "moment";
// const numberOfNights()

const SearchResults = (props) => {
  
  const[highlight, sethighlight] = useState(null);

  const toggleHighlight = (index) =>{
    if (index == highlight) {
      sethighlight(null)

    } else {
    sethighlight(index)
  }
}

  return (
    <table className="table">
      <thead >
      </thead>
      <tbody>
      <tr>
        <td>ID</td>
        <td>Tittle</td>
        <td>First Name</td>
        <td>Surname</td>
        <td>Email</td>
        <td>Room ID</td>
        <td>check in Date</td>
        <td>check out Date</td>
        <td>No of Night stay</td>
      </tr>

      {data.map((item, index) => {
        return (
          <tr onClick={() => toggleHighlight(index)} style={{backgroundColor: index == highlight ? "yellow" : "" }} key={index}>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.firstName}</td>
            <td>{item.surname}</td>
            <td>{item.email}</td>
            <td>{item.roomId}</td>
            <td>{item.checkInDate}</td>
            <td>{item.checkOutDate}</td>
            <td>
              {(new Date(`${item.checkOutDate}T00:00:01Z`) -
                new Date(`${item.checkInDate}T00:00:01Z`)) /
                86400000}
            </td>
          </tr>
        );
      })}
      </tbody>
    </table>
  );
};
export default SearchResults;
