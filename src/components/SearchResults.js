import React, { useState } from "react";
import { CustomerProfile } from "./CustomerProfile";
import "./RowBackground.css";
import "../App.css";
import { TableRow } from "./TableRow";

export const SearchResults = props => {
  const [customerId, setCustomerId] = useState("");
  const [email, setEmail] = useState("");
  const [vip, setVip] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const profileHandler = event => {
    fetch(`https://cyf-react.glitch.me/customers/${event.target.id}`)
      .then(res => res.json())
      .then(data => {
        setCustomerId(data.id);
        setEmail(data.email);
        if (data.vip === true) {
          setVip("YES");
        } else setVip("NO");
        setPhoneNumber(data.phoneNumber);
      });
  };

  return (
    <div style={{ display: "flex" }}>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Surname</th>
            <th scope="col">E-mail</th>
            <th scope="col">Room ID</th>
            <th scope="col">Check-in Date</th>
            <th scope="col">Check-out Date</th>
            <th scope="col">Num. of Night(s)</th>
            <th scope="col">Profiles</th>
          </tr>
        </thead>
        <tbody>
          {props.results.map(val => {
            return (
              <TableRow
                onProfileHandler={profileHandler}
                index={val.id}
                eachRow={val}
              />
            );
          })}
        </tbody>
      </table>
      <CustomerProfile
        targetId={customerId}
        targetVip={vip}
        targetEmail={email}
        targetPhoneNumber={phoneNumber}
      />
    </div>
  );
};
