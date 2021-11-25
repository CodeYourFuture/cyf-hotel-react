import React, { useState } from "react";
import moment from "moment";

const SearchResults = props => {
  const [highlight, sethighlight] = useState([]);

  function handleclick(id) {
    if (highlight.includes(id)) {
      const filterhighlight = highlight.filter(rowid => {
        return rowid !== id;
      });
      sethighlight(filterhighlight);
    } else {
      const newarray = highlight.concat(id);
      sethighlight(newarray);
    }
  }

  function getclassName(id) {
    if (highlight.includes(id)) {
      return "highlight";
    } else {
      return "";
    }
  }
  return (
    <div className="tablesearch">
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th>id</th>
            <th>title</th>
            <th>LastName</th>
            <th>email</th>
            <th>room id</th>
            <th />
            <th>check in date</th>
            <th>check out date</th>
            <th>number of days</th>
          </tr>
        </thead>
        <tbody>
          {props.FakeBookings.map((result, i) => (
            <tr
              key={i}
              onClick={() => {
                handleclick(result.id);
              }}
              className={getclassName(result.id)}
            >
              <td>{result.id}</td>
              <td>{result.title}</td>
              <td>{result.surname}</td>
              <td>{result.roomId}</td>
              <td>{result.email}</td>
              <td>{result.roomid}</td>
              <td>{result.checkInDate}</td>
              <td>{result.checkOutDate}</td>
              <td>
                {moment(result.checkOutDate).diff(
                  moment(result.checkInDate),
                  "days"
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
