import React, { useState } from "react";

import Restaurant from "./Restaurant";
import Bookings from "./Bookings";
import Heading from "./myComponents/Heading";
import TouristInfoCards from "./myComponents/TouristInfoCards";
import Footer from "./myComponents/Footer";
import ThemeContext, { themes } from "./myComponents/ThemeContext";

import "./App.css";

const footer = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789"
];

const App = () => {
  const [theme, setTheme] = useState(themes.light);
  return (
    <div className="App">
      {/* <header className="App-header">CYF Hotel</header> */}

      <ThemeContext.Provider value={theme}>
        <Heading />
        {theme === themes.light ? (
          <button onClick={() => setTheme(themes.dark)}>Dark</button>
        ) : (
          <button onClick={() => setTheme(themes.light)}>Light</button>
        )}
        <TouristInfoCards />
        <Bookings />
        <Restaurant />
        <Footer footer={footer} />
      </ThemeContext.Provider>
    </div>
  );
};

export default App;
