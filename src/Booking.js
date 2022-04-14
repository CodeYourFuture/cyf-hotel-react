import React, { useState } from "react";
import moment from "moment";

const Booking = ({ booking, setProfile, setProfileLoaded, profileLoaded }) => {
  const [selected, setSelected] = useState(false);
  const handleClick = event => {
    // SET STATE TO RERENDER
    setSelected(!selected);
  };
  const showProfile = event => {
    event.preventDefault(); //it's not stopping the row from being selected...
    event.stopPropagation(); //stop propagation worked
    setProfileLoaded(false);

    // FETCH ERROR MESSAGE TEST URL (https://cyf-react.glitch.me/error)

    // DELAYED FETCH LOADING TEST URL (https://cyf-react.glitch.me/delayed)

    // PROPER FETCH URL (https://cyf-react.glitch.me/customers/${booking.id})

    fetch(`https://cyf-react.glitch.me/customers/${booking.id}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Fetching data was unsuccessful!");
        }
      })
      .then(profileData => {
        console.log(profileData);
        setProfile(profileData);
        setProfileLoaded(true);
      })
      .catch(error => {
        alert(`${error}`);
      });
  };
  const START_DATE = moment(booking.checkInDate);
  const END_DATE = moment(booking.checkOutDate);
  const nights = END_DATE.diff(START_DATE, "days");
  return (
    <tr
      onClick={handleClick}
      className={selected ? "bg-primary text-light" : ""}
    >
      <th scope="row">{booking.id}</th>
      <td>{booking.title}</td>
      <td>{booking.firstName}</td>
      <td>{booking.surname}</td>
      <td>{booking.email}</td>
      <td>{booking.roomId}</td>
      <td>{booking.checkInDate}</td>
      <td>{booking.checkOutDate}</td>
      <td>{nights}</td>
      <td>
        <button onClick={showProfile} className="btn btn-dark">
          Show Profile
        </button>
      </td>
    </tr>
  );
};

export default Booking;
