import React, { useState } from "react";
import CustomerProfile from "./CustomerProfile";

const SearchResults = (props) => {
  const [active, setActive] = useState(false);

  function tableRowClick() {
    setActive(!active);
  }

  const [showProfile, setShowProfile] = useState();

  function clientProfile(id) {
    setShowProfile(id);
    console.log(id);
  }

  return (
    <tbody>
      <tr
        onClick={tableRowClick}
        style={{ backgroundColor: active ? "#CBC3E3" : "white" }}
      >
        <th scope="row">{props.id}</th>
        <td>{props.title}</td>
        <td>{props.firstName}</td>
        <td>{props.surname}</td>
        <td>{props.email}</td>
        <td>{props.roomId}</td>
        <td>{props.checkInDate}</td>
        <td>{props.checkOutDate}</td>
        <td>{props.numberOfNights}</td>
        <td>
          <button
            onClick={() => clientProfile(props.id)}
            className="btn btn-primary">
            Show profile
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default SearchResults;
