import React from "react";

import Bookings from "./Bookings";
import "./App.css";
import SearchButton from "./SearchButton";
import Header from "./Header";
import TouristInfoCards from "./TouristInfoCards";
import Footer from "./Footer";
import SearchResults from "./SearchResults";
//id, title, first name, surname, email, room id, check in date and check out date.
// const data = {
//   id: "123",
//   title: "london",
//   firstname: "Alex",
//   surname: "Dod",
//   email: "customer@hotmail.uk",
//   roomId: "passport",
//   checkInDate: "10-10-2021",
//   checkOutDate: "21-10-2021",
// };
const App = () => {
  return (
    <div className="App">
      <Header />
      <Bookings />

      <SearchButton />
      <TouristInfoCards />

      <Footer />
    </div>
  );
};

export default App;
