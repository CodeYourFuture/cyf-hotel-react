import React, { useState } from "react";
import moment from "moment";

// Style
import { Wrapper, Content } from "./SearchResults.styles";

const SearchResults = ({ results }) => {
  const [rowHighlight, setRowHighlight] = useState({ selected: null });
  console.log(results);

  const toggleActive = index => {
    rowHighlight.selected
      ? setRowHighlight({ selected: null })
      : setRowHighlight({ selected: results[index] });
  };

  return (
    <Wrapper>
      <Content>
        <table>
          <tbody>
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
              <th>Profile</th>
            </tr>
            {results.map((booking, index) => {
              let a = moment(new Date(booking.checkOutDate));
              let b = moment(new Date(booking.checkInDate));

              return (
                <tr
                  key={index}
                  className={`tr ${
                    rowHighlight.selected === results[index] ? "active" : ""
                  }`}
                  onClick={event => toggleActive(index)}
                >
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
          </tbody>
        </table>
      </Content>
    </Wrapper>
  );
};

export default SearchResults;
