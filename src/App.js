import React, { useState } from "react";
import Table from "./components/Table";
import Heading from "./components/Heading";
import Footer from "./components/Footer";
import SearchContainer from "./components/SearchContainer";
import clientData from "./data/fakeBookings.json";

const App = () => {
  const [searchByName, setSearchByName] = useState("");

  const [searchById, setSearchById] = useState("");

  const handlechange = e => {
    setSearchByName(e.target.value);
  };

  const handleId = e => {
    setSearchById(e.target.value);
  };

  const searchByNameResults = data => {
    return data.filter(client =>
      client.firstName.toLowerCase().includes(searchByName)
    );
  };

  return (
    <div className="container">
      <Heading />
      <SearchContainer inputChange={handlechange} idChange={handleId} />
      <Table data={searchByNameResults(clientData)} />
      <Footer />
    </div>
  );
};

export default App;
