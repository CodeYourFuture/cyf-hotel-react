import "bootstrap/dist/css/bootstrap.min.css";
import { GlobalStyle } from "../GlobalStyle";
import "./App.css";
import Bookings from "./Bookings";
import { Header } from "./common";

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Bookings />
    </div>
  );
};

export default App;
