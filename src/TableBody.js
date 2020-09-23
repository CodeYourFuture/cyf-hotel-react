import React from "react";
import moment from "moment";

const TableBody = ({ bookingsList }) => {
  let titles = Object.keys(bookingsList[0]);
  return (
    <tbody>
      {bookingsList.map(result => {
        let checkInDate = moment(result.checkInDate);
        let checkOutDate = moment(result.checkOutDate);

        return (
          <tr key={result.id}>
            {titles.map(item => (
              <td key={result[item]}>{result[item]}</td>
            ))}
            <td>{checkOutDate.diff(checkInDate, "days")}</td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableBody;
