import Heading from "./Heading";
import TouristInfoCards from "./TouristInfoCards";
import Footer from "./Footer";
import Restaurant from "./Restaurant";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">CYF Hotel</header>
      <Heading />
      <Bookings />
      <Restaurant />
      <TouristInfoCards />
      <Footer
        Contact={[
          "123 Fake Street, London, E1 4UD",
          "hello@fakehotel.com",
          "0123 456789"
        ]}
      />
    </div>
  );
};
export default App;
