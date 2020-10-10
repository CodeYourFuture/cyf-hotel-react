import React, { useState } from "react";
import TableRow from "./TableRow";
import TableHead from "./TableHead";
import CustomerProfile from "./CustomerProfile";

function SearchResults(props) {
  const [number, setNumber] = useState(null);
  const [email, setEmail] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);

  function showProfile(index, email, phoneNumber) {
    // console.log("Hayye rabba chak ley")
    // console.log(phoneNumber+"  -   index from searchResuls")
    setNumber(index);
    setEmail(email);
    setPhoneNumber(phoneNumber);
  }

  let list = props.BookingData;
  console.log("Hey I am list from searchResultds" + list);

  return (
    <div>
      <table className="table table-dark">
        <TableHead />
        <tbody>
          {list.map((element, index) => (
            <TableRow key={index} booking={element} handler={showProfile} />
          ))}
        </tbody>
      </table>
      {number ? (
        <CustomerProfile
          id={number}
          email={email}
          phoneNumber={phoneNumber}
          data={list}
        />
      ) : null}
    </div>
  );
}

export default SearchResults;
