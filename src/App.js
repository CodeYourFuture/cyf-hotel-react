import React from "react";
import "./App.css";

import Bookings from "./Bookings";
import Heading from "./Heading";

const App = () => {
    return (
        <div className="App">
            <Heading/>
            <Bookings/>
        </div>
    );
};

export default App;
