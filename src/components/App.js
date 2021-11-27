import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Bookings from "./Bookings";
import { Header } from "./common";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Bookings />
    </div>
  );
};

export default App;
