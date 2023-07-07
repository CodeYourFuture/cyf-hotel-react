import React,{useState} from "react";
import moment from "moment";

function SearchResults(props) {
   const [rowSelected, rowSetSelected] = useState([]);

   function handleClick(index) {
     if (rowSelected.includes(index)) {
       rowSetSelected((selected) => {
         return selected.filter((item) => item !== index);
       });
     } else {
       rowSetSelected([...rowSelected, index]);
     }
   }
  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Title</th>
          <th scope="col">First Name</th>
          <th scope="col">Surname</th>
          <th scope="col">Email</th>
          <th scope="col">Room id</th>
          <th scope="col">Check in date</th>
          <th scope="col">Check out date</th>
          <th scope="col">Stay nights</th>
          <th scope="col">Customer's Profile</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map((result, index) => {
          return (
            <tr
              key={index}
              className={rowSelected.includes(index) ? "selected" : ""}
              onClick={() => handleClick(index)}
            >
              <th scope="row">{result.id}</th>
              <td>{result.title}</td>
              <td>{result.firstName}</td>
              <td>{result.surname}</td>
              <td>{result.email}</td>
              <td>{result.roomId}</td>
              <td>{result.checkInDate}</td>
              <td>{result.checkOutDate}</td>
              <td>
                {moment(result.checkOutDate).diff(
                  moment(result.checkInDate),
                  "days"
                )}
              </td>
              <td><button className="profile">Show Profile</button></td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default SearchResults;
