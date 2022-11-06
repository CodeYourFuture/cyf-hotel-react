import React, { Fragment, useState } from "react";
import moment from "moment";
import "./App.css";
import CustomerProfile from "./CustomerProfile";

const SearchResults = ({ results }) => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [idFromProfileBtn, setIdForProfileBtn] = useState([]);
  const [url, setUrl] = useState("");

  const clickHandler = id => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter(e => e !== id));
    } else {
      setSelectedRows(selectedRows.concat(id));
    }
  };
  const profileBtnClickHandler = id => {
    setIdForProfileBtn(id);
    setUrl(`https://cyf-react.glitch.me/customers/${id}/`);
  };
  return (
    <Fragment>
      <table className="table ">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">First name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room id</th>
            <th scope="col">Check in date</th>
            <th scope="col">Check out date</th>
            <th scope="col">Nights staying over</th>
            <th scope="col">Button</th>
          </tr>
        </thead>
        <tbody>
          {results.map(
            (
              {
                id,
                title,
                firstName,
                surname,
                email,
                roomId,
                checkInDate,
                checkOutDate
              },
              i
            ) => {
              return (
                /* onClick={handleToggle}
                  className={
                    isActive ? "backgroundOff" : "backgroundOn"
                  } */
                <tr
                  id={id}
                  key={id}
                  onClick={() => clickHandler(id)}
                  style={
                    selectedRows.includes(id)
                      ? { background: "#007bff", color: "white" }
                      : { background: "white" }
                  }
                >
                  <th>{id}</th>
                  <td>{title}</td>
                  <td>{firstName}</td>
                  <td>{surname}</td>
                  <td>{email}</td>
                  <td>{roomId}</td>
                  <td>{checkInDate}</td>
                  <td>{checkOutDate}</td>
                  <td>{moment(checkOutDate).diff(checkInDate, "days")}</td>
                  <td>
                    <button
                      onClick={() => {
                        profileBtnClickHandler(id);
                      }}
                      className="btn btn-primary searchResultBtn"
                    >
                      Show profile
                    </button>
                  </td>
                </tr>
              );
            }
          )}
        </tbody>
      </table>
      <CustomerProfile url={url} />
    </Fragment>
  );
};

export default SearchResults;
