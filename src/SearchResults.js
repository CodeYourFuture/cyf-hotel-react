import React from "react";
import moment from "moment";
import { useState } from "react";
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
                <td>{item.title}</td>
                <td>{item.firstName}</td>
                <td>{item.surname}</td>
                <td>{item.email}</td>
                <td>{item.roomId}</td>
                <td>{item.checkInDate}</td>
                <td>{item.checkOutDate}</td>
                <td>
                  {moment(item.checkOutDate).diff(
                    moment(item.checkInDate),
                    "days"
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
