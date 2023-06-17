import React from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
// import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };
      const hotelBookings=[
      {
          id: 1,
          title: 'Mr',
          firstName: 'Marc',
          surname: 'Jackobs',
          email: 'marcjackobs@gmail.com',
          roomId: '56',
          checkInDate: '2023-06-13',
          checkOutDate: '2023-06-20',  
      },
      {
          id: 2,
          title: 'Ms',
          firstName: 'Emily',
          surname: 'Richards',
          email: 'emilyrichards@outlook.com',
          roomId: '104',
          checkInDate: '2023-06-17',
          checkOutDate: '2023-06-23',  
      },
      {
          id: 3,
          title: 'Mrs',
          firstName: 'Rose',
          surname: 'Maison',
          email: 'rosemaison@gmail.com',
          roomId: 'B202',
          checkInDate: '2023-06-17',
          checkOutDate: '2023-06-26', 
      },
    ];

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {/* <SearchResults results={FakeBookings} /> */}
        <SearchResults hotelBookings={hotelBookings}/>
      </div>
    </div>
  );
};

export default Bookings;
