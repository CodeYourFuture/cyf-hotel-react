import React from "react";
import moment from "moment";

const Results = (props) => {
  const res = props.results;
  return <div>
      <table>
      <tbody> 
        <tr>
          <th>title</th>
          <th>First Name</th>
          <th>Surname </th>
          <th>Email </th>
          <th>Room ID </th>
          <th>Check in Date </th>
          <th>Check out Date </th>
          <th>number of days</th>
        </tr>
        {res.map(function (result){
        return (<tr key={result.id}>
          <td>{result.title}</td>
          <td>{result.firstName}</td>
          <td>{result.surname}</td>
          <td>{result.email}</td>
          <td>{result.roomId}</td>
          <td>{result.checkInDate}</td>
          <td>{result.checkOutDate}</td>
          <td>{moment(result.checkOutDate).diff(moment(result.checkInDate), 'days')}</td>
        </tr>
          );

        })}
        </tbody> 

      </table>
    </div>;
};
export default Results;
