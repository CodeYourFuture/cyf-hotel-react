import React from "react";
import moment from "moment";

const SearchResult = props => {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">id</th>
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
          {props.results.map((booking, index) => {
            let dateIn = moment(booking.checkInDate);
            let dateOut = moment(booking.checkOutDate);
            let numberOfNights = dateOut.diff(dateIn, "days");
            return (
              <tr key={index}>
                <th>{booking.id}</th>
                <td>{booking.title}</td>
                <td>{booking.firstName}</td>
                <td>{booking.surname}</td>
                <td>{booking.email}</td>
                <td>{booking.roomId}</td>
                <td>{booking.checkInDate}</td>
                <td>{booking.checkOutDate}</td>
                <td>{numberOfNights}</td>
              </tr>
            );
          })}

          {/* <tr>
              <th scope="row">1</th>
              <td>Mr</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>221</td>
              <td>17/02/2022</td>
              <td>19/02/2022</td>
              
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Mr</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>215</td>
              <td>18/02/2022</td>
              <td>21/02/2022</td>
              
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Mr</td>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
              <td>111</td>
              <td>15/02/2022</td>
              <td>30/02/2022</td>
              
            </tr> */}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResult;
