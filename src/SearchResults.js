import React, { useState } from "react";
import classNames from "classnames";
import BookingGaust from "./BookingGaust";
import CustomerProfile from "./CoustomerProfile";
//import Search from "./Search";

function SearchResults(props) {
  const [highlight, setHighlight] = useState("");
  const [light, setLight] = useState("");

  return (
    <div className="inputResult">
      {" "}
      <div className="first1Button">
        <input
          type="text"
          id="customerName"
          value={light}
          placeholder="Customer search..."
          onChange={e => setLight(e.target.value)}
        />
        <button name="firstButton" className="btn btn-primary">
          search ...
        </button>
      </div>
      <table className="table">
        <thead className="thead-dark">
          <tr className="tableR">
            <th scope="col">id</th>
            <th scope="col">title</th>
            <th scope="col">FirstName</th>
            <th scope="col">surname</th>
            <th scope="col">email</th>
            <th scope="col">roomId</th>
            <th scope="col">checkInData</th>
            <th scope="col">checkOutData</th>
            <th scope="col">nights</th>
            <th scope="col">show id</th>
          </tr>
        </thead>
        <tbody>
          {props.results
            .filter(val => {
              if (light === "") {
                return val;
              } else if (
                val.firstName.toLowerCase().includes(light.toLowerCase())
              ) {
                return val;
              } else {
                return null;
              }
            })
            .map((result, index) => (
              <tr
                key={index}
                onClick={() => setHighlight(highlight === index ? null : index)}
                className={classNames("salem", {
                  hidde: highlight === index,
                  show: highlight !== index
                })}
              >
                <td>{result.id}</td>
                <td>{result.title}</td>
                <td>{result.firstName}</td>
                <td>{result.surname}</td>
                <td>{result.email}</td>
                <td>{result.roomId}</td>
                <td>{result.checkInDate}</td>
                <td>{result.checkOutDate}</td>
                <td>{<BookingGaust guest={result} />} Days</td>
                <td>
                  <div>
                    {" "}
                    <button onCLICK={CustomerProfile} name="firstButton">
                      show profile
                    </button>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <CustomerProfile id={props.id} />
    </div>
  );
}
export default SearchResults;
