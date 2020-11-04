import React from "react";
import moment from "moment";

const SearchResults = props => {
  return (
    <>
      <table className="table table-dark">
        <thead>
          <tr onClick>
            <th scope="col">id</th>
            <th scope="col">First</th>
            <th scope="col">surname</th>
            <th scope="col">email</th>
            <th scope="col">room id</th>
            <th scope="col">Check in date</th>
            <th scope="col">Check out date</th>
            <th scope="col">The number of nights</th>
          </tr>
        </thead>

        <tbody>
          {props.result.map(lista => {
            var a = moment(lista.checkOutDate);
            var b = moment(lista.checkInDate);

            return (
              <tr>
                <th>{lista.id}</th>
                <th>{lista.firstName}</th>
                <th>{lista.surname}</th>
                <th>{lista.email}</th>
                <th>{lista.roomId}</th>
                <th>{lista.checkInDate};</th>
                <th>{lista.checkOutDate}</th>
                <th>{a.diff(b, "days")}</th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
export default SearchResults;
