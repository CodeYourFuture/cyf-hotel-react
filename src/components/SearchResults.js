import React from "react";
import moment from "moment";

const SearchResults = ({ results }) => {
  return (
    <table class="table">
      <thead>
        <tr>
          {Object.keys(results.default[0]).map(p => {
            return <th scope="col">{p}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {results.default.map(p => {
          return (
            <tr>
              {Object.values(p).map(k => {
                return <td>{k}</td>;
              })}
              <td>{moment(p.checkOutDate).diff(p.checkInDate, "days")}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default SearchResults;
