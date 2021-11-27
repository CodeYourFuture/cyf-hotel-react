import "bootstrap/dist/css/bootstrap.min.css";
import Bookings from "../Bookings";
import Heading from "../Heading";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <Bookings />
    </div>
  );
};

export default App;
