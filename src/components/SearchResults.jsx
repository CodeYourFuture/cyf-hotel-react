import React, { useState } from "react";
import moment from "moment";
import CustomerProfile from "./CustomerProfile";

const Row = (props) => {
  const [highlight, setHighlight] = useState(false);
  const toggleHighlight = () => {
    setHighlight(!highlight);
  };
  
  const a = moment(props.result.checkOutDate);
  const b = moment(props.result.checkInDate);
  const days = a.diff(b, "days"); // 1
  
  
  return (
    <tr
    onClick={() => toggleHighlight()}
    style={{
      backgroundColor: highlight ? "yellow" : "",
    }}
    key={props.index}
    >
      <td>{props.result.id}</td>
      <td>{props.result.title}</td>
      <td>{props.result.firstName}</td>
      <td>{props.result.surname}</td>
      <td>{props.result.email}</td>
      <td>{props.result.roomId}</td>
      <td>{props.result.checkInDate}</td>
      <td>{props.result.checkOutDate}</td>
      <td>{days}</td>
      <td>
        <button onClick={() => props.getCustomerId(props.result)}>Show profile</button>
      </td>
    </tr>
  );
};
const SearchResults= (props) => {
  
  const [customerId, setCustomerId] = useState();
  
  const getCustomerId = (result) => {
    setCustomerId(result.id);
  }
  
  return (
    <div>
      <table className="table table-bordered">
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
            <th scope="col">Number of nights</th>
            <th scope="col">Show profile</th>
          </tr>
        </thead>
        <tbody>
          {props.results.map((result) => {
            return (
                <Row key={result.id} getCustomerId={getCustomerId} result={result} />
            ) 
          })}
        </tbody>
      </table>
      {customerId ? <CustomerProfile id={customerId}/>  : null}
        
    </div>
  );
};

export default SearchResults;
