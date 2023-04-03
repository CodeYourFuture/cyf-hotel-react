import React, { useState } from "react";
import moment from "moment";
import CustomerProfile from "./CustomerProfile";

const SingleBooking = ({ booking }) => {
  const [bg, setBg] = useState("white");

  const [showProfile, setShowProfile] = useState(false);
  const [profileText, setProfileText] = useState("show");

  const handleClick = () => {
    bg === "white" ? setBg("grey") : setBg("white");
  };

  const toggleProfile = () => {
    setShowProfile((showProfile) => !showProfile);
    setProfileText((profileText) => (profileText === "show" ? "hide" : "show"));
  };
  let backgroundColor = bg;

  const styles = {
    backgroundColor: backgroundColor,
  };
  console.log(booking);
  return (
    <>
      <tr className={bg} style={styles} onClick={handleClick}>
        <td>{booking.id}</td>
        <td>{booking.title}</td>
        <td>{booking.firstName}</td>
        <td>{booking.surname}</td>
        <td>{booking.email}</td>
        <td>{booking.roomId}</td>
        <td>{booking.checkInDate}</td>
        <td>{booking.checkOutDate}</td>
        <td>
          {moment(booking.checkOutDate).diff(booking.checkInDate, "days")}
        </td>
        <td>
          <button onClick={toggleProfile}>{profileText} profile</button>
        </td>
      </tr>
      <tr>
        <td>{showProfile && <CustomerProfile booking={booking} />}</td>
      </tr>
    </>
  );
};

export default SingleBooking;
