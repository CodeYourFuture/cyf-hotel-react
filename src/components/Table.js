import React from "react";
import tableCol from "../data/tableCol";

const Table = ({ data }) => {
  let date1 = data.map(getDateIn => getDateIn.checkInDate);
  let date2 = data.map(getDateOut => getDateOut.checkOutDate);

  let totalDays = [];

  for (let i = 0; i < date1.length; i++) {
    let checkIn = new Date(date1[i]);
    let checkOut = new Date(date2[i]);

    let diffInMilliseconds = Math.abs(checkIn.getTime() - checkOut.getTime());
    let diffInDays = diffInMilliseconds / 1000 / 60 / 60 / 24;

    totalDays.push(diffInDays);
  }

  return (
    <div className="table-container">
      <table>
        <tbody>
          <tr>
            {tableCol.map(col => {
              return <th>{col}</th>;
            })}
          </tr>

          {data.map((client, index) => (
            <tr key={client.id}>
              <td>{client.title}</td>
              <td>{client.firstName}</td>
              <td>{client.surname}</td>
              <td>{client.email}</td>
              <td>{client.roomId}</td>
              <td>{client.checkInDate}</td>
              <td>{client.checkOutDate}</td>
              <td>{totalDays[index]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
