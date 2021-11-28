import "bootstrap/dist/css/bootstrap.min.css";
import { GlobalStyle } from "../GlobalStyle";
import "./App.css";
import Bookings from "./Bookings";
import TouristsInfoCards from "./Bookings/TouristInfoCards";
import { Header } from "./common";

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <TouristsInfoCards />
      <Bookings />
    </div>
  );
};

export default App;
