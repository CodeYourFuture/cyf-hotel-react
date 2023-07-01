import React, { useState } from "react";
import moment from "moment";

const getNumbersOfNights = (checkInDate, checkOutDate) => {
  const date1 = moment(checkInDate);
  const date2 = moment(checkOutDate);
  return date2.diff(date1, "days");
};

const Row = (props) => {
  const {
    id,
    title,
    firstName,
    surname,
    email,
    roomId,
    checkInDate,
    checkOutDate,
  } = props;
  const night = getNumbersOfNights(checkInDate, checkOutDate);

  const [rowSelect, setRowSelect] = useState(false);

  const handleClick = () => setRowSelect(!rowSelect);

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
    </tr>
  );
};

const Table = (props) => {
  const { data } = props;
  return (
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
            />
          );
        })}
      </tbody>
    </table>
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
