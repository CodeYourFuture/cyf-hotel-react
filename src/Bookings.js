import React from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import data from "./data/fakeBookings.json";

const Bookings = () => {
  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };
  console.log(data);

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <div className="tbl-container">
          <table className="tbl">
            <thead>
              <tr>
                <th> id</th>
                <th>title</th>
                <th> first name</th>
                <th> last name</th>
                <th> email </th>
                <th> room id</th>
                <th> check in date</th>
                <th>check out date </th>
              </tr>
            </thead>

            {data.map(item => (
              <SearchResults
                key={item.id}
                id={item.id}
                title={item.title}
                firstName={item.firstName}
                surname={item.surname}
                email={item.email}
                roomId={item.roomId}
                checkInDate={item.checkInDate}
                checkOutDat={item.checkOutDate}
              />
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Bookings;
