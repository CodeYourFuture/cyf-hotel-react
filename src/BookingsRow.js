import React, { useState, useCallback, useEffect } from "react";
import moment from "moment/moment";

const BookingsRow = ({ guest, changeGuestProfile }) => {
  const [isSelected, setIsSelected] = useState(false);
  const [finalData, setFinalData] = useState(null);

  useEffect(() => {
    const fetchGuest = async () => {
      const response = await fetch(
        `https://cyf-react.glitch.me/customers/${guest.id}`
      );
      const data = await response.json();
      setFinalData(data);
    };
    fetchGuest();
  }, [guest.id]);

  const handleTableRowClick = () => setIsSelected(!isSelected);

  const showProfile = useCallback(() => {
    changeGuestProfile(finalData);
  }, [changeGuestProfile, finalData]);

  const hideProfile = () => {
    changeGuestProfile(null);
  };

  return (
    <tr
      className={isSelected ? "selected-row" : ""}
      onClick={handleTableRowClick}
    >
      <th scope="row">{guest.id}</th>
      <td>{guest.title}</td>
      <td>{guest.firstName}</td>
      <td>{guest.surname}</td>
      <td>{guest.email}</td>
      <td>{guest.roomId}</td>
      <td>{guest.checkInDate}</td>
      <td>{guest.checkOutDate}</td>
      <td>{guest.duration}</td>
      <td>
        <button onClick={showProfile}>Show profile</button>
        <button onClick={hideProfile}>Hide profile</button>
      </td>
    </tr>
  );
};

export default BookingsRow;
