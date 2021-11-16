import React from "react";
import TouristInfoCards from "./TouristInfoCards";
import Bookings from "./Bookings";
import Footer from "./Footer";
import "./App.css";

const placeHolderPeopleData = [
  {
    id: 1,
    title: "Ms",
    firstName: "firstPerson1",
    surname: "surPerson1",
    email: "person1@gmail.com",
    roomID: 126,
    checkInDate: "01/01/21",
    checkOutDate: "02/01/21"
  },
  {
    id: 2,
    title: "Mr",
    firstName: "firstPerson2",
    surname: "surPerson2",
    email: "person2@gmail.com",
    roomID: 637,
    checkInDate: "03/01/21",
    checkOutDate: "01/02/21"
  },
  {
    id: 3,
    title: "Mrs",
    firstName: "firstPerson3",
    surname: "surPerson3",
    email: "person3@gmail.com",
    roomID: 111,
    checkInDate: "03/03/21",
    checkOutDate: "05/03/21"
  },
  {
    id: 4,
    title: "Mr",
    firstName: "firstPerson4",
    surname: "surPerson4",
    email: "person4@gmail.com",
    roomID: 111,
    checkInDate: "03/03/21",
    checkOutDate: "05/03/21"
  }
];

const App = () => {
  return (
    <div className="content">
      <div className="App">
        <header className="App-header">CYF Hotel</header>
        <TouristInfoCards />
        <Bookings />
      </div>
      <Footer
        arrayProp={[
          "123 Fake Street, London, E1 4UD",
          "hello@fakehotel.com",
          "0123 456789"
        ]}
      />
    </div>
  );
};

export default App;
