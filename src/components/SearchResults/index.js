import React from "react";
import moment from "moment";

// Style
import { Wrapper, Content } from "./SearchResults.styles";

// component
import FakeBookings from "../../data/fakeBookings.json";

const SearchResults = () => (
  <Wrapper>
    <Content>
      <table>
        <tr>
          <th>id</th>
          <th>Title</th>
          <th>First Name</th>
          <th>Surname</th>
          <th>Email</th>
          <th>Room id</th>
          <th>Check in date</th>
          <th>Check out date</th>
          <th>Duration of Stay</th>
        </tr>
        {FakeBookings.map(booking => {
          let a = moment(new Date(booking.checkOutDate));
          let b = moment(new Date(booking.checkInDate));

          return (
            <tr>
              <th>{booking.id}</th>
              <th>{booking.title}</th>
              <th>{booking.firstName}</th>
              <th>{booking.surname}</th>
              <th>{booking.email}</th>
              <th>{booking.roomId}</th>
              <th>{booking.checkInDate}</th>
              <th>{booking.checkOutDate}</th>
              <th>{a.diff(b, "days")}</th>
            </tr>
          );
        })}
      </table>
    </Content>
  </Wrapper>
);

export default SearchResults;
