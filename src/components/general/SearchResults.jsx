import moment from "moment";
import React, { useState } from "react";
import "../../css/searchresults.css";
const SearchResults = ({ result }) => {
  const [selected, setSelected] = useState({});
  const highlight = objId => {
    if (selected[objId]) {
      setSelected(prev => ({ ...prev, [objId]: false }));
    } else {
      setSelected(prev => ({ ...prev, [objId]: true }));
    }
  };
  return (
    <article className="results_table">
      <table className="booking_table">
        <thead className="table_header">
          <tr>
            <td>id</td>
            <td>title</td>
            <td>first name</td>
            <td>surname</td>
            <td>email</td>
            <td>room id</td>
            <td>check in date</td>
            <td>check out date</td>
            <td>number of nights</td>
          </tr>
        </thead>
        <tbody className="table_body">
          {result.map((obj, index) => {
            return (
              <tr
                key={index}
                onClick={() => highlight(obj.id)}
                className={selected[obj.id] ? "is_selected" : "table_header"}
              >
                <td>{obj.id}</td>
                <td>{obj.title}</td>
                <td>{obj.firstName}</td>
                <td>{obj.surname}</td>
                <td>{obj.email}</td>
                <td>{obj.roomId}</td>
                <td>{obj.checkInDate}</td>
                <td>{obj.checkOutDate}</td>
                <td>
                  {moment(obj.checkOutDate).diff(
                    moment(obj.checkInDate),
                    "day"
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </article>
  );
};

export default SearchResults;
