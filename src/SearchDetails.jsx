import React, { useState } from "react";
import moment from "moment";

function SearchDetails({ detail, updateProfile, customerProfile }) {
  const [active, setActive] = useState(false);

  function handleRowClick() {
    setActive(!active);
  }

  function fetchProfileData() {
    fetch(`https://cyf-react.glitch.me/customers/${detail.id}`)
      .then(response => response.json())
      .then(data => updateProfile(data))
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <tr
      key={detail.id}
      onClick={handleRowClick}
      className={active ? "pink" : ""}
    >
      <td>{detail.id}</td>
      <td>{detail.title}</td>
      <td>{detail.firstName}</td>
      <td>{detail.surname}</td>
      <td>{detail.email}</td>
      <td>{detail.roomId}</td>
      <td>{detail.checkInDate}</td>
      <td>{detail.checkOutDate}</td>
      <td>{moment(detail.checkOutDate).diff(detail.checkInDate, "days")}</td>
      <td>
        <button
          className="btn btn-primary"
          onClick={() => {
            customerProfile(detail.id);
            fetchProfileData();
          }}
        >
          Show Profile
        </button>
      </td>
    </tr>
  );
}

export default SearchDetails;
