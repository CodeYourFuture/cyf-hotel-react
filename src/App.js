import React from "react";
import Heading from "./Heading";
import Bookings from "./Bookings";
import TouristInfoCards from "./TouristInfoCards";
import Footer from "./Footer";
import Restaurant from "./Restaurant";
import "./App.css";

// const App = () => {
//   return (
//     <div className="App">
//       <header className="App-header">CYF Hotel</header>
//       <Bookings />
//     </div>
//   );
// };

const App = () => {
  const address = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789",
  ];

  return (
    <div className="App">
      <Heading />
      <TouristInfoCard />
      <Bookings />
      <Restaurant />
      <Footer newProp={address} />
    </div>
  );
};

export default App;
