import React from "react";
import "./App.css";

import Bookings from "./Bookings";
import Footer from "./Footer";
import Heading from "./Heading";
import TouristInfoCards from "./TouristInfoCards";

const data = ["123 Fake Street, London, E1 4UD", "hello@fakehotel.com", "0123 456789"]

const App = () => {
    return (
        <div className="App">
            <Heading/>
            <TouristInfoCards/>
            <Bookings/>
            <Footer data={data}/>
        </div>
    );
};

export default App;
