import React from "react";
import Heading from "./Heading";
import Footer from "./Footer";
import NavBar from "./NavBar";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      {/* <Heading /> */}
      <NavBar />
      <Footer
        address={[
          "123 Fake Street, London, E1 4UD",
          "hello@fakehotel.com",
          "0123 456789"
        ]}
      />
    </div>
  );
};

export default App;
