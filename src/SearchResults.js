import React, { useState } from "react";
import CostomerProfile from "./CustomerProfile";
import moment from "moment";

const SearchResults = props => {
  const [selectedId, setselectedId] = useState(undefined);
  const [customerProfile, setCustomerProfile] = useState("");

  const rowHighlight = bookingId => {
    setselectedId(bookingId);
  };

  const profilehandler = bookingId => {
    setCustomerProfile(bookingId);
  };

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">title</th>
            <th scope="col">first name</th>
            <th scope="col">surname</th>
            <th scope="col">email</th>
            <th scope="col">room id</th>
            <th scope="col">check in date</th>
            <th scope="col">check out date</th>
            <th scope="col">nights stayed</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map(person => {
            let a = person.checkOutDate;
            let b = person.checkInDate;
            return (
              <tr
                key={person.id}
                onClick={() => rowHighlight(person.id)}
                className={selectedId === person.id ? "hiligth-row" : ""}
              >
                <td>{person.id}</td>
                <td>{person.title}</td>
                <td>{person.firstName}</td>
                <td>{person.surname}</td>
                <td>{person.email}</td>
                <td>{person.roomId}</td>
                <td>{person.checkInDate}</td>
                <td>{person.checkOutDate}</td>
                <td>{moment(a).diff(moment(b), "days")}</td>
                <td>
                  <button onClick={() => profilehandler(person.id)}>
                    Show profile
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <CostomerProfile customerProfile={customerProfile} />
    </>
  );
};

export default SearchResults;
