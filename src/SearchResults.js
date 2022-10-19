import React from "react";
import moment from "moment";

const SearchResults = ({ results }) => {
  return (
    <div>
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">First name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room id</th>
            <th scope="col">Check in date</th>
            <th scope="col">Check out date</th>
            <th scope="col">No. of Nights</th>
          </tr>
        </thead>
        <tbody>
          {results.map(el => (
            <tr key={el.id}>
              {Object.values(el).map((item, inx) => (
                <td key={inx}> {item}</td>
              ))}
              <td key={Object.keys(el).length - 1}>
                {moment(el.checkOutDate).diff(moment(el.checkInDate), "days")}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
