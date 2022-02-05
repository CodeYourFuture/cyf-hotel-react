import React from "react";
import moment from "moment";
//import Bookings from './Bookings';

const SearchResults = ({ results }) => {
  return (
    <div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">title</th>
            <th scope="col">first name</th>
            <th scope="col">surname</th>
            <th scope="col">email</th>
            <th scope="col">room id</th>
            <th scope="col">check in date</th>
            <th scope="col">check out date</th>
            <th scope="col">number of nights</th>
          </tr>
        </thead>
        <tbody>
          {results.map(item => {
            return (
              <tr key={item.id}>
                <th>{item.title}</th>
                <th>{item.firstName}</th>
                <th>{item.surname}</th>
                <th>{item.email}</th>
                <th>{item.roomId}</th>
                <th>{item.checkInDate}</th>
                <th>{item.checkOutDate}</th>
                <th>
                  {moment(item.checkOutDate).diff(
                    moment(item.checkInDate),
                    "days"
                  )}
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
