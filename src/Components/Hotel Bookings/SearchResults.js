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
        email={Array.email}
        room={Array["room id"]}
        checkIn={Array["check in date"]}
        checkOut={Array["check out date"]}
      />
    </div>
  );
};

const SearchResults = () => {
  return <div>{Array.map(guestList)};</div>;
};

export default SearchResults;
