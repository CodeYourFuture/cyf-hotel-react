import React, { useState } from "react";
import moment from "moment";

// Style
import { Wrapper, Content } from "./SearchResults.styles";

// component
// import FakeBookings from "../../data/fakeBookings.json";

const SearchResults = ({ results }) => {
  const [rowHighlight, setRowHighlight] = useState({
    activeObject: null,
    objects: results
  });

  const toggleActive = index => {
    if (rowHighlight.activeObject !== null) {
      setRowHighlight({
        ...rowHighlight,
        activeObject: null
      });
    } else {
      setRowHighlight({
        ...rowHighlight,
        activeObject: rowHighlight.objects[index]
      });
    }
  };

  const toggleActiveStyles = index => {
    if (rowHighlight.objects[index] === rowHighlight.activeObject) {
      return "tra";
    } else {
      return "tr";
    }
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
            </tr>
            {results.map((booking, index) => {
              let a = moment(new Date(booking.checkOutDate));
              let b = moment(new Date(booking.checkInDate));

              return (
                <tr
                  key={index}
                  className={`${toggleActiveStyles(index)}`}
                  onClick={() => {
                    toggleActive(index);
                  }}
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
