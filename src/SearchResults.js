import React, { useState, useEffect } from "react";
import TableRow from "./TableRow";
import CustomerProfile from "./CustomerProfile";

const SearchResults = (props) => {
  
  const [id, setId] = useState("")

  // useEffect(()=>{
  // fetch("https://cyf-react.glitch.me/customers/${props.id}")
  // .then(res => res.json())
  // .then(result => setId(result) )
  // }, [props.id])
  
  return (
    <div className="table">
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">First name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room id</th>
            <th scope="col">Check in date</th>
            <th scope="col">Check out date</th>
            <th scope="col">Number of nights</th>
            <th scope="col">Show profile</th>
          </tr>
        </thead>

        {props.results.map((result) => (
          <tbody className="row-elements">
            <TableRow result={result} id={result.id} />
            <th scope="col">
              <button
                onClick={()=>{setId(result.id)}}>
                Show Profile
              </button>
            </th>
          </tbody>
        ))}

      </table>
      <div>
        <CustomerProfile id={id} />
      </div>
    </div>
  );
};

export default SearchResults;