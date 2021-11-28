import "bootstrap/dist/css/bootstrap.min.css";
import { GlobalStyle } from "../GlobalStyle";
import Bookings from "./Bookings";
import TouristsInfoCards from "./Bookings/TouristInfoCards";
import { Footer, Header } from "./common";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <TouristsInfoCards />
      <Bookings />
      <Footer />
    </>
  );
};

export default App;
