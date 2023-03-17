import React, { useState } from "react";
import moment from "moment";

function SearchDetails({ detail, setCustomerProfile }) {
  const [active, setActive] = useState(false);

  function handleRowClick() {
    setActive(!active);
  }

  return (
    <tr
      key={detail.id}
      onClick={handleRowClick}
      className={active ? "highlighted" : ""}
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
            setCustomerProfile(detail.id);
          }}
        >
          Show Profile
        </button>
      </td>
    </tr>
  );
}

export default SearchDetails;
