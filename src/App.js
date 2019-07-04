import React from "react";
import Bookings from "./components/Bookings";
import { Restaurant } from "./components/Restaurant";
import "./App.css";
import Header from "./components/Header";
import TouristInfoCards from "./components/TouristInfoCards";
import { footerContentArray, Footer } from "./components/Footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header /> <Nav />
          <Switch>
            <Route path="/" exact component={TouristInfoCards} />
            <Route path="/bookings" component={Bookings} />
            <Route path="/restaurant" component={Restaurant} />
          </Switch>
          <Footer footerContent={footerContentArray} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
