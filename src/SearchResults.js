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
  const [selected, setSelected] = useState({});
  const [id, setId] = useState("");
  console.log(props);
  return props.results.length > 0 ? (
    <div>
      <table className="table">
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
            //setting all values to no color
            if (!selected[index])
              setSelected({ ...selected, [index]: "noColor" });

            return (
              <tr
                key={index}
                className={selected[index]}
                onClick={() =>
                  selected[index] === "noColor"
                    ? setSelected({ ...selected, [index]: "highlight" })
                    : setSelected({ ...selected, [index]: "noColor" })
                }
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
  ) : (
    "loading"
  );
};
export default SearchResults;
