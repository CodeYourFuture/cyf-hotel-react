import React, { useState, useEffect } from "react";
import moment from "moment";
import CustomerProfile from "./CustomerProfile";

const TableHead = () => {
  return (
    <thead className="thead-dark">
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Title</th>
        <th scope="col">First Name</th>
        <th scope="col">Surname</th>
        <th scope="col">Email</th>
        <th scope="col">Room ID</th>
        <th scope="col">Check-In Date</th>
        <th scope="col">Check-Out Date</th>
        <th scope="col">No. of Nights</th>
        <th scope="col">Profile</th>
      </tr>
    </thead>
  );
};

const TableRow = props => {
  const [selected, setSelected] = useState("notHighlighted");
  const highlight = () => {
    setSelected(selected => {
      if (selected === "notHighlighted") {
        return "highlight";
      } else {
        return "notHighlighted";
      }
    });
  };

  return (
    <tr className={selected} onClick={highlight}>
      <th scope="row">{props.booking.id}</th>
      <td>{props.booking.title}</td>
      <td>{props.booking.firstName}</td>
      <td>{props.booking.surname}</td>
      <td>{props.booking.email}</td>
      <td>{props.booking.roomId}</td>
      <td>{props.booking.checkInDate}</td>
      <td>{props.booking.checkOutDate}</td>
      <td>
        {moment(props.booking.checkOutDate).diff(
          moment(props.booking.checkInDate),
          "days"
        )}
      </td>
      <td>
        <button className="btn btn-success" onClick={props.profileClick}>
          Show Profile
        </button>
      </td>
    </tr>
  );
};

const TableBody = props => {
  return (
    <tbody>
      {props.result.map((booking, index) => (
        <TableRow
          booking={booking}
          key={index}
          profileClick={props.profileClick}
        />
      ))}
    </tbody>
  );
};

const SearchResults = props => {
  const [userId, setUserId] = useState("null");
  const profileClick = elem => {
    // elem.preventDefault();
    // console.log(elem.target.parentElement.parentElement.firstElementChild.innerText);
    setUserId(
      elem.target.parentElement.parentElement.firstElementChild.innerText
    );
  };

  const [userProfile, setUserProfile] = useState({});
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${userId}`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        setUserProfile(data);
        console.log(data);
      })
      .catch(error => {
        // setError(true);
        console.log(error);
      });
  }, [userId]);

  return (
    <div>
      <table className="table">
        <TableHead />
        <TableBody result={props.results} profileClick={profileClick} />
      </table>
      {userProfile.id && <CustomerProfile userProfile={userProfile} />}
    </div>
  );
};

export default SearchResults;
