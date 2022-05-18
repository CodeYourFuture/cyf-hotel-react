import React from "react";
import Footer from "../general/Footer";
import Homepage from "../pages/HomePage";
import "../../css/footer.css";

const App = () => {
  return (
    <div className="app">
      <Homepage />
      <Footer />
    </div>
  );
};

export default App;
