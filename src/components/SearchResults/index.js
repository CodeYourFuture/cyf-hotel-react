import React, { useState } from "react";
import moment from "moment";

// Style
import { Wrapper, Content } from "./SearchResults.styles";

// Components
import SearchButton from "../SearchButton/index";
import CustomerProfile from "../CustomerProfile/CustomerProfile";

const SearchResults = ({ results }) => {
  const [selectedCustomer, setSelectedCustomer] = useState({
    selectedId: null
  });

  const toggleActiveId = index => {
    selectedCustomer.selectedId
      ? setSelectedCustomer({ selectedId: null })
      : setSelectedCustomer({ selectedId: results[index].id });
  };

  const [rowHighlight, setRowHighlight] = useState({ selected: null });

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
                  onClick={() => toggleActive(index)}
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
                  <th>
                    <SearchButton
                      text="Show Profile"
                      functionality={event => toggleActiveId(index)}
                    />
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
        <CustomerProfile id={selectedCustomer.selectedId} />
      </Content>
    </Wrapper>
  );
};

export default SearchResults;
