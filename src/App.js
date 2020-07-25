import React from "react";

import Bookings from "./components/Bookings";
import "./App.css";
import Heading from "./components/Heading";
import TouristInfoCards from "./components/TouristInfoCards";
import Restaurant from "./components/Restaurant";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards />
      <Bookings />
      <Restaurant />
      <Footer
        hotelInfo={[
          "123 Fake Street, London, E1 4UD",
          "hello@fakehotel.com",
          "0123 456789"
        ]}
      />
    </div>
  );
};

export default App;

// import React from "react";
// import Bookings from "./components/Bookings";
// import Heading from "./components/Heading";
// import TouristInfoCards from "./components/TouristInfoCards.js";

// import Footer from "./components/Footer";
// import "./App.css";

// const App = () => {
//   return (
//     <div className="App">
//       <Heading />
//       <TouristInfoCards />
//       <Bookings />
//       <Footer
//         details={[
//           "123 Fake Street, London, E1 4UD",
//           "hello@fakehotel.com",
//           "0123 456789"
//         ]}
//       />
//     </div>
//   );
// };

// export default App;
