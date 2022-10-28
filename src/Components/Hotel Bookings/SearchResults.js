import React from "react";
import Tableprops from "./Tableprops";
import Array from "./Array";

const guestList = Array => {
  const date1 = new Date(Array["check in date"]);
  const date2 = new Date(Array["check out date"]);

  // To calculate the time difference of two dates
  const Difference_In_Time = date2.getTime() - date1.getTime();

  // To calculate the no. of days between two dates
  function updateTime() {
    const Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    return Difference_In_Days;
  }

  return (
    <div>
      <Tableprops
        nights={updateTime}
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
          <th>Number of nights</th>
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
