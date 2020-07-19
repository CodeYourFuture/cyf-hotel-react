import React, { useState } from "react";
import moment from "moment";

const SearchResults = ({ results }) => {
  const [isActive, setIsActive] = useState([]);
  const changeColor = id => {
    if (!isActive.includes(id)) {
      setIsActive([...isActive, id]);
    }
    if (isActive.includes(id)) {
      setIsActive(isActive.filter(e => e !== id));
    }
  };

  return (
    <table className="table">
      <thead>
        <tr>
          {Object.keys(results[0]).map((p, i) => {
            return (
              <th key={i} scope="col">
                {p}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {results.map((p, i) => {
          console.log(isActive);
          return (
            <tr
              key={i}
              onClick={() => changeColor(i)}
              className={`row${!isActive.includes(i) ? "null" : "Selected"}`}
            >
              {Object.values(p).map((k, i) => {
                return <td key={i}>{k}</td>;
              })}
              <td> {moment(p.checkOutDate).diff(p.checkInDate, "days")}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default SearchResults;
