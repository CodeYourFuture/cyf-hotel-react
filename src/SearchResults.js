import React, { useState } from "react";
import moment from "moment";
import CustomerProfile from "./CustomerProfile";

const headings = [
  "id",
  "Title",
  "First Name",
  "Surname",
  "Email",
  "Room id",
  "Check in date",
  "Check out date",
  "Number of nights",
  "Button"
];

const SearchResults = props => {
  const [selected, setSelected] = useState(false);
  const [id, setId] = useState("");
  const rowClick = () => setSelected(!selected);
  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            {headings.map((heading, index) => {
              return (
                <th key={index} scope="col">
                  {heading}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {props.results.map((person, index) => {
            var CheckIn = moment(person.checkInDate);
            var CheckOut = moment(person.checkOutDate);
            return (
              <tr
                key={index}
                className={selected ? "highlight" : ""}
                onClick={rowClick}
              >
                <th scope="col">{person.id}</th>
                <td>{person.title}</td>
                <td>{person.firstName}</td>
                <td>{person.surname}</td>
                <td>{person.email}</td>
                <td>{person.roomId}</td>
                <td>{person.checkInDate}</td>
                <td>{person.checkOutDate}</td>
                <td>{CheckOut.diff(CheckIn, "days")}</td>
                <td>
                  <button onClick={() => setId(person.id)}>Show profile</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <CustomerProfile id={id} />
    </div>
  );
};
export default SearchResults;
