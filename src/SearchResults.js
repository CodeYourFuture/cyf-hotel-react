import React, { useState } from "react";
import moment from "moment";
import { CustomerProfile } from "./CustomerProfile";

const getNumbersOfNights = (checkInDate, checkOutDate) => {
  const date1 = moment(checkInDate);
  const date2 = moment(checkOutDate);
  return date2.diff(date1, "days");
};

const Row = (props) => {
  const {
    id, title, firstName, surname, email, roomId, checkInDate, checkOutDate, setProfile,} = props;

  const night = getNumbersOfNights(checkInDate, checkOutDate);

  const [rowSelect, setRowSelect] = useState(false);

  const handleClick = () => setRowSelect(!rowSelect);

  const handleProfile = () => {
      setProfile(id)
  }

  return (
    <tr
      onClick={handleClick}
      className={rowSelect ? "row-highlight" : "row-nonHighlight"}
    >
      <th>{id}</th>
      <th>{title}</th>
      <th>{firstName}</th>
      <th>{surname}</th>
      <th>{email}</th>
      <th>{roomId}</th>
      <th>{checkInDate}</th>
      <th>{checkOutDate}</th>
      <th>{night}</th>
      <th>
        <button onClick={handleProfile} className="rwo-btn">Show profile</button>
      </th>
    </tr>
  );
};
const Table = (props) => {
  const { data } = props;
  const [profile ,setProfile ] = useState("")
  return (
    <div>
      <CustomerProfile profile={profile} />
      <table className="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Title</th>
            <th scope="col">First name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room id</th>
            <th scope="col">Check in date</th>
            <th scope="col">Check out date</th>
            <th scope="col">Night</th>
            <th scope="col">Show profile</th>
          </tr>
        </thead>
        <tbody>
          {data.map((column, index) => {
            return (
              <Row
                key={index}
                id={column.id}
                title={column.title}
                firstName={column.firstName}
                surname={column.surname}
                email={column.email}
                roomId={column.roomId}
                checkInDate={column.checkInDate}
                checkOutDate={column.checkOutDate}
                setProfile={setProfile}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const SearchResults = (props) => {
  // const [myData, setMyData] = useState(props.results);
  // console.log(myData, "here");
  return (
    <div>
      <Table data={props.results} />
    </div>
  );
};

export default SearchResults;
