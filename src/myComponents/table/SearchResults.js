import React, { useState, useEffect } from "react";

import "../../App.css";
import Moment from "moment";

export default function SearchResults({ results }) {
  const [result, setResults] = useState([]);
  const [color, setColor] = useState(""); // changeColor(); // commit  Lesson 2
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(prev => !prev);
  };
  function get_random_color() {
    var letters = "0123456789ABCDEF".split("");
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.round(Math.random() * 15)];
    }
    return color;
  }

  function changeColor() {
    setColor(get_random_color());
  }

  useEffect(() => {
    setResults(results);
  }, []);

  let checckDiff = (InDate, OutDate) => {
    const checkInDate = Moment(InDate, "YYYY-MM-DD");
    const checkOutDate = Moment(OutDate, "YYYY-MM-DD");
    const diff = checkOutDate.diff(checkInDate, "days");
    return diff;
  };

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">title</th>
            <th scope="col">firstName</th>
            <th scope="col">surname</th>
            <th scope="col">email</th>
            <th scope="col">roomId</th>
            <th scope="col">checkInDate</th>
            <th scope="col">checkOutDate</th>
            <th scope="col">numberOfNight</th>
          </tr>
        </thead>
        <tbody>
          {result.map((item, index) => {
            return (
              <tr
                key={index}
                onClick={e => {
                  if (!show) {
                    // changeColor();
                    // e.target.style.backgroundColor = color;
                    e.target.parentNode.className = "selected";
                    if (e.target.parentNode.className === "selected") {
                      changeColor();
                      e.target.parentNode.style.backgroundColor = color;
                    }

                    handleClick();
                    console.log(e.target.parentNode);
                  } else {
                    e.target.parentNode.className = "";
                    handleClick();
                    setColor("");
                    e.target.parentNode.style.backgroundColor = color;
                    // e.target.style.backgroundColor = color;
                  }
                }}
                style={{ cursor: "pointer" }}
              >
                <th scope="row">{item.id}</th>
                <td>{item.title}</td>
                <td>{item.firstName}</td>
                <td>{item.surname}</td>
                <td>{item.email}</td>
                <td>{item.roomId}</td>
                <td>{item.checkInDate}</td>
                <td>{item.checkOutDate}</td>
                <td>{checckDiff(item.checkInDate, item.checkOutDate)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
