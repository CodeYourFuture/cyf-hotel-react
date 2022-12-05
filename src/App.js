import React from "react";

import Heading from "./Heading";
import TouristInfoCards from "./TouristInfoCards";
import Bookings from "./Bookings";
import Footer from "./Footer";
import "./App.css";

const footerInformation = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789"
];

const bookingInformation = [
  {
    id: "001",
    title: "Miss",
    firstName: "Kimberley",
    surname: "Kangur",
    email: "kim.kangur@hotmail.co.uk",
    roomId: "34",
    checkInDate: "22/12/2022",
    checkOutDate: "27/12/2022"
  },
  {
    id: "002",
    title: "Mr",
    firstName: "Maziar",
    surname: "Mansouri",
    email: "m.mansouri@googlemail.com",
    roomId: "25",
    checkInDate: "28/12/2022",
    checkOutDate: "01/01/2023"
  },
  {
    id: "003",
    title: "Mrs",
    firstName: "Emily",
    surname: "Barton",
    email: "emkangur@hotmail.co.uk",
    roomId: "19",
    checkInDate: "22/12/2022",
    checkOutDate: "28/12/2022"
  },
  {
    id: "004",
    title: "Mr",
    firstName: "Zaw",
    surname: "Manx",
    email: "z.manx@hotmail.co.uk",
    roomId: "15",
    checkInDate: "22/12/2022",
    checkOutDate: "23/12/2022"
  },
  {
    id: "004",
    title: "Miss",
    firstName: "Amalia",
    surname: "Bronker",
    email: "Ams234Bron@hotmail.co.uk",
    roomId: "10",
    checkInDate: "12/12/2022",
    checkOutDate: "15/12/2022"
  },
  {
    id: "005",
    title: "Mr",
    firstName: "Sam",
    surname: "Meadows",
    email: "sammeadows25@gmail.com",
    roomId: "12",
    checkInDate: "04/12/2022",
    checkOutDate: "05/12/2022"
  }
];

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards />
      <Bookings />
      <SearchResults />
      <Footer footerInformation={footerInformation} />
    </div>
  );
};

export default App;
