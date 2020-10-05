import React, { useState } from "react";
import moment from "moment";
import CustomerProfile from "./CustomerProfile";

const SearchResults = ({ results }) => {
  const [click, setClick] = useState(false);
  const [profile, seProfile] = useState(``);

  return (
    <div>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">id</th>
            <th scope="col">title</th>
            <th scope="col">first Name</th>
            <th scope="col">surname</th>
            <th scope="col">email</th>
            <th scope="col">room id</th>
            <th scope="col">check in date</th>
            <th scope="col">check out date</th>
            <th scope="col">Number of booked nights</th>
          </tr>
        </thead>
        <tbody>
          {results.map(el => (
            <tr
              onClick={() => setClick(true)}
              className="null"
              className={click ? "bg-primary" : "null"}
            >
              <th scope="row">{el.id}</th>
              <td>{el.title}</td>
              <td>{el.firstName}</td>
              <td>{el.surname}</td>
              <td>{el.email}</td>
              <td>{el.roomId}</td>
              <td>{el.checkInDate}</td>
              <td>{el.checkOutDate}</td>
              <td>
                {moment(el.checkOutDate).diff(moment(el.checkInDate), "days")}
              </td>
              <td>
                {
                  <button
                    className="btn btn-success"
                    onClick={() => seProfile(`Customer ${el.id} Profile`)}
                  >
                    Show profile
                  </button>
                }
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <CustomerProfile id={profile} />
    </div>
  );
};

export default SearchResults;
