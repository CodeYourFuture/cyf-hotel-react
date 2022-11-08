import React from "react";

const BodyData = ({
  id,
  title,
  firstName,
  surname,
  email,
  roomId,
  checkInDate,
  checkOutDate,
  customerId
}) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{firstName}</td>
      <td>{surname}</td>
      <td>{email}</td>
      <td>{roomId}</td>
      <td>{checkInDate}</td>
      <td>{checkOutDate}</td>
      <button className="btn" onClick={customerId}>
        Show Profile
      </button>
    </tr>
  );
};

export default BodyData;
