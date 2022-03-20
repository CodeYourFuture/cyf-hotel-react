import React, { useState } from "react";

import Bookings from "./Bookings";
import "./App.css";
import Header from "./Header";
import TouristInfoCards from "./TouristInfoCards";
import Footer from "./Footer";
import Restaurant from "./Restaurant";

const App = () => {
  const contactInfo = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];
  const places = [
    {
      name: "London",
      url: "http://visitlondon.com",
      img:
        "https://images.unsplash.com/photo-1520986606214-8b456906c813?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
      description: "London is a great place to visit."
    },
    {
      name: "Rome",
      url: "http://visitrome.com",
      img:
        "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
      description: "London is a great place to visit."
    },
    {
      name: "Glasgow",
      url: "http://visitglasgow.com",
      img:
        "https://images.unsplash.com/photo-1611842525094-cd40da298560?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
      description: "London is a great place to visit."
    }
  ];
  const appModes = {
    normal: "https://cyf-react.glitch.me/",
    loading: "https://cyf-react.glitch.me/delayed",
    error: "https://cyf-react.glitch.me/error"
  };
  const [appMode, setAppMode] = useState("normal");
  console.log(appMode);
  const setAppModehandler = e => setAppMode(e.target.value);
  return (
    <div className="App">
      <Header appModes={appModes} setAppModehandler={setAppModehandler} />
      <TouristInfoCards places={places} />
      <Bookings appMode={appModes[appMode]} />
      <Restaurant />
      <Footer contactInfo={contactInfo} />
    </div>
  );
};

export default App;
