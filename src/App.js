import React from "react";
import { useState } from "react";
import { Header } from "./Header";
import Bookings from "./Bookings";
import Form from "./Form";
import "./App.css";
import TouristInfoCards from "./TouristInfoCards";
import { Footer } from "./Footer";
import { Restaurant } from "./Restaurant";

const App = () => {
  const [refreshMessages, setRefreshMessages] = useState(false);

  return (
    <div className="App">
      <Header />
      <TouristInfoCards />
      <Bookings
        setRefreshMessages={setRefreshMessages}
        refreshMessages={refreshMessages}
      />
      <Form setRefreshMessages={setRefreshMessages} />
      <Restaurant />
      <Footer />
    </div>
  );
};

export default App;
