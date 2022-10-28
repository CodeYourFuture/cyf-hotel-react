import React from "react";
import Tableprops from "./Tableprops";
import Array from "./Array";

const guestList = Array => {
  return (
    <div>
      <Tableprops
        school={Array["school name"]}
        id={Array.id}
        title={Array.title}
        name={Array["first name"]}
        surname={Array.surname}
        email={Array.email}
        room={Array["room id"]}
        checkIn={Array["check in date"]}
        checkOut={Array["check out date"]}
      />
    </div>
  );
};

const SearchResults = () => {
  return (
    <div id="customers">
      <table>
        <tr>
          <th>School name</th>
          <th>ID</th>
          <th>Title</th>
          <th>First Name</th>
          <th>Surname</th>
          <th>Email</th>
          <th>Room ID</th>
          <th>Check in date</th>
          <th>Check out date</th>
        </tr>
      </table>
      {Array.map(guestList)};
    </div>
  );
};

export default SearchResults;
