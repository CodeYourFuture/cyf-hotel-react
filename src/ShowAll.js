import React from "react";
import Nights from "./Nights";
const ShowAll = props => {
  const select = () => {
    console.log("dfdfd");
    return <tr className={"selectTr"} />;
  };
  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            <th> Title </th>
            <th> First Name </th>
            <th> SureName </th>
            <th> Email </th>
            <th> Room Number </th>
            <th> CheckInDate </th>
            <th> CheckOutDate </th>
            <th> Nights </th>
          </tr>
        </thead>
        {props.data.map((booking, index) => {
          return (
            <tbody key={index} id={booking.id}>
              <tr onSelect={select}>
                <td>{booking.title}</td>
                <td>{booking.firstName}</td>
                <td>{booking.surname}</td>
                <td>{booking.email}</td>
                <td>{booking.roomId}</td>
                <td>{booking.checkInDate}</td>
                <td>{booking.checkOutDate}</td>
                <td>
                  <Nights
                    timeline={booking.checkInDate}
                    timeout={booking.checkOutDate}
                  />
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};

export default ShowAll;
