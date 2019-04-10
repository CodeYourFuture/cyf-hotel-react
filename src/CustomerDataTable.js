//Not sure if the most elegant solution. Lots of non-DRY stuff to get around prop key errors.

import React from "react";
import moment from "moment";

function calculateStayDuration(checkIn, checkOut) {
  return moment(checkOut).diff(moment(checkIn), "days");
}

const CustomerDataTable = customerObj => {
  return (
    <tbody>
      {customerObj.results.map((res, index) => {
        return (
          <tr key={`tr${index}`}>
            <th scope="row" key={res.id}>
              {res.id}
            </th>
            <td key={res.title}>{res.title}</td>
            <td key={res.firstName}>{res.firstName}</td>
            <td key={res.surname}>{res.surname}</td>
            <td key={res.email}>{res.email}</td>
            <td key={"roomId"}>{`00${index + 1}`}</td>
            <td key={res.checkInDate}>{res.checkInDate}</td>
            <td key={res.checkOutDate}>{res.checkOutDate}</td>
            <td key={"nights"}>
              {calculateStayDuration(res.checkInDate, res.checkOutDate)}
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default CustomerDataTable;
