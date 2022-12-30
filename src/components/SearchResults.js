import React, { useState } from "react";
import { CustomerProfile } from "./CustomerProfile";
import "./RowBackground.css";
import "../App.css";
import { TableRows } from "./TableRows";

export const SearchResults = props => {
  const [id, setId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [email, setEmail] = useState("");
  const [night, setNight] = useState("");

  const profileHandler = event => {
    console.log(event.target.id);
    setId(event.target.id);
    setFirstName(
      event.target.parentElement.parentElement.children[1].innerText
    );
    setSecondName(
      event.target.parentElement.parentElement.children[2].innerText
    );
    setEmail(event.target.parentElement.parentElement.children[3].innerText);
    setNight(event.target.parentElement.parentElement.children[7].innerText);
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
          {props.results.map((val, index) => {
            return (
              <TableRows
                onProfileHandler={profileHandler}
                fakeBookings={props.results}
                index={index}
                eachRow={props.results[index]}
              />
            );
          })}
        </tbody>
      </table>
      <CustomerProfile
        targetId={id}
        targetFirstName={firstName}
        targetSecondName={secondName}
        targetEmail={email}
        targetNight={night}
      />
    </div>
  );
};
