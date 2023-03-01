import React, {useState} from "react";
import moment from 'moment';


function SearchResults(props) {
  
  const [selected, SetColour] = useState()
  
  function SetColour () {
    return className = 'newTrColor'
  }

  let tr = props.results.map((element) => (
    <tr className="tableRow" onClick = {SetColour}>
      <td>{element.id}</td>
      <td>{element.title}</td>
      <td>{element.firstName}</td>
      <td>{element.surname}</td>
      <td>{element.email}</td>
      <td>{element.roomId}</td>
      <td>{element.checkInDate}</td>
      <td>{element.checkOutDate}</td>
      <td>{moment(element.checkOutDate).diff(moment(element.checkInDate), 'days')}</td>
    </tr>
  ));

  return (
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Title</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Email</th>
          <th scope="col">Room id</th>
          <th scope="col">Ckeck in</th>
          <th scope="col">Ckeck out</th>
          <th scope="col">Nigths</th>
        </tr>
      </thead>
      <tbody>{tr}</tbody>
    </table>
  );
}

export default SearchResults;
