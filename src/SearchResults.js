import React, { useState } from "react";
import moment from "moment";
moment().format();
import CustomerProfile from "./CustomerProfile";


function Filter (what) {
  
}
const SearchResults = (props) => {
  const [customerId, setCustomerId] = useState(null);
  function highlighted(event) {
      event.target.parentElement.className === "Highlighted"
      ? event.target.parentElement.className = ""
      : event.target.parentElement.className = "Highlighted"; 
    
  }
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">
              id <span>Button</span>
            </th>

            <th scope="col">title</th>
            <th scope="col">first name</th>
            <th scope="col">surname</th>
            <th scope="col">email</th>
            <th scope="col">room id</th>
            <th scope="col">check in date</th>
            <th scope="col">check out date</th>
            <th scope="col">nights total</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {props.results.map((result) => {
            function nightsTotal() {
              let dateOut = moment(result.checkOutDate);
              let dateIn = moment(result.checkInDate);
              return dateOut.diff(dateIn, "days");
            }

            let nights = nightsTotal();
            return (
              <tr key={result.id} onClick={highlighted}>
                <th scope="row">{result.id}</th>
                <td>{result.title}</td>
                <td>{result.firstName}</td>
                <td>{result.surname}</td>
                <td>{result.email}</td>
                <td>{result.roomId}</td>
                <td>{result.checkInDate}</td>
                <td>{result.checkOutDate}</td>
                <td>{nights}</td>
                <td>
                  <div>
                    <button onClick={() => setCustomerId(result.id)}>
                      Show profile
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <CustomerProfile id={customerId} />
    </>
  );
}

export default SearchResults;
