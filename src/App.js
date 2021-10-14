import React from "react";
import SearchResults from "./SearchResults";
import Bookings from "./Bookings";
import Restaurant from "./Restaurant";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards />
      <Bookings />
      <Restaurant />
      {/* <SearchResults /> */}
      <Footer
        info={[
          "123 Fake Street, London, E1 4UD",
          "hello@fakehotel.com",
          "0123 456789"
        ]}
      />
    </div>
  );
};

function Heading() {
  return (
    <header>
      <img
        className="App-logo"
        src="https://image.flaticon.com/icons/svg/139/139899.svg"
        alt="Cartoon drawing of the front of a hotel"
      />
      <h1 className="App-header">CYF Hotel</h1>
    </header>
  );
}

function TouristInfoCards() {
  const cities = [
    {
      city: `Glasgow`,
      src: `https://upload.wikimedia.org/wikipedia/commons/2/25/Dawn_over_Glasgow_%2848659596342%29.jpg`,
      link: `https://www.peoplemakeglasgow.com`
    },
    {
      city: `Manchester`,
      src: `https://images.unsplash.com/photo-1515586838455-8f8f940d6853?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFuY2hlc3RlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80`,
      link: `https://www.visitmanchester.com`
    },
    {
      city: `London`,
      src: `https://london.ac.uk/sites/default/files/styles/max_1300x1300/public/2018-10/london-aerial-cityscape-river-thames_1.jpg?itok=6LenFxuz`,
      link: `https://www.visitlondon.com`
    }
  ];

  return (
    <div className="cityCardContainer">
      {cities.map(function(element, index) {
        const src = element.src;
        const city = element.city;
        const website = element.link;

        return (
          <div className="card">
            <img src={src} className="card-img-top" alt="Photo of city" />
            <div className="card-body">
              <a href={website} target="_blank" className="btn btn-primary">
                {city}
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function Footer(prop) {
  return (
    <footer className="footer">
      <ul className="footerInfo">
        {prop.info.map(function(element, index) {
          return <li key={index}>{element}</li>;
        })}
      </ul>
    </footer>
  );
}

export default App;
