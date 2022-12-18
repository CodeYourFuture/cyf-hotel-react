import React, { useState } from "react";

import Moment from "moment";

export default function SearchResultBody({ results, showProfile }) {
  let checckDiff = (InDate, OutDate) => {
    const checkInDate = Moment(InDate, "YYYY-MM-DD");
    const checkOutDate = Moment(OutDate, "YYYY-MM-DD");
    const diff = checkOutDate.diff(checkInDate, "days");
    return diff;
  };

  return (
    <>
      {results.map((item, index) => {
        const [color, setColor] = useState("#f8d7da");
        const [show, setShow] = useState(false);
        return (
          <tr
            key={index}
            onClick={e => {
              if (!show) {
                e.target.parentNode.style.backgroundColor = color;
                setColor(show ? "#f8d7da" : "");
                setShow(prev => !prev);
              } else {
                setColor(show ? "#f8d7da" : "");
                e.target.parentNode.style.backgroundColor = color;

                setShow(prev => !prev);
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
            <td>
              <button
                className="btn btn-info"
                onClick={() => showProfile(item.id)}
              >
                Show Profile
              </button>
            </td>
          </tr>
        );
      })}
    </>
  );
}
