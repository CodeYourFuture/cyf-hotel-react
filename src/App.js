import React from "react";
import Table from "./components/Table";
import Heading from "./components/Heading";
import Footer from "./components/Footer";
import SearchContainer from "./components/SearchContainer";

const App = () => {
  return (
    <div className="container">
      <Heading />
      <SearchContainer />
      <Table />
      <Footer />
    </div>
  );
};

export default App;
