import React, { useState } from "react";
import moment from "moment";
const SearchResults = props => {
  const [colour, setColour] = useState(false);
  const clickHandle = () => {
    setColour(oldColour => !oldColour);
  };
  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">title</th>
          <th scope="col">first name</th>
          <th scope="col">surname</th>
          <th scope="col">email</th>
          <th scope="col">room id</th>
          <th scope="col">check in date</th>
          <th scope="col">check out date</th>
          <th scope="col">Nights</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map((profile, index) => {
          const checkingDate = moment(profile.checkInDate);
          const checkOutDate = moment(profile.checkOutDate);
          console.log(checkingDate, checkOutDate);
          return (
            <tr
              key={index}
              onClick={clickHandle}
              style={{
                background: colour ? "skyblue" : "none"
              }}
            >
              <th scope="row">{profile.id}</th>
              <td>{profile.title}</td>
              <td>{profile.firstName}</td>
              <td>{profile.surname}</td>
              <td>{profile.email}</td>
              <td>{profile.roomId}</td>
              <td>{profile.checkInDate}</td>
              <td>{profile.checkOutDate}</td>

              <td>{checkOutDate.diff(checkingDate, `days`)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default SearchResults;
