import React, { useState, useEffect } from "react";
import moment from "moment";
import CustomerProfile from "./CustomerProfile";

function SearchResults(props) {
  const [rowSelected, rowSetSelected] = useState([]);
  const [selectProfile, setSelectProfile] = useState("");
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${selectProfile}`)
      .then((res) => res.json())
      .then((data) => setProfile(data));
  }, [selectProfile]);

  function showProfile(selectProfile) {
    setSelectProfile(selectProfile);
  }

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
    <div>
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

                <td>
                  <button onClick={() => showProfile(result.id)}>
                    Show profile
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <CustomerProfile
        id={selectProfile}
        firstName={profile.firstName}
        surname={profile.surname}
        email={profile.email}
        phoneNumber={profile.phoneNumber}
        vip={profile.vip}
      />
    </div>
  );
}

export default SearchResults;
