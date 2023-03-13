import React from "react";
import Heading from "./Heading";
import Bookings from "./Bookings";
import "./App.css";
import TouristInfoCards from "./TouristInfoCards";
import Footer from "./Footer";
import Restaurant from "./Restaurant";

const info = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789"
];

const TouristInfoDetails = [
  {
    name: "Glasgow",
    url: "https://peoplemakeglasgow.com",
    pic:
      "https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/05/04/16/glasgow-main.jpg?quality=75&width=1368&auto=webp",
    description:
      "Glasgow is one of Europe's most vibrant and cosmopolitan cities. It boasts world famous art collections, the best shopping in the UK outside of London, first-class sports and leisure facilities, a vast array of restaurants and bars, and the most vibrant and exciting nightlife in Scotland."
  },
  {
    name: "London",
    url: "https://visitlondon.com",
    pic:
      "https://www.fodors.com/assets/destinations/2869/tower-bridge-london-england_980x650.jpg",
    description:
      "London, city, capital of the United Kingdom. It is among the oldest of the world's great cities—its history spanning nearly two millennia—and one of the most cosmopolitan. By far Britain's largest metropolis, it is also the country's economic, transportation, and cultural centre"
  },
  {
    name: "Manchester",
    url: "https://www.visitmanchester.com",
    pic:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/a1/ee/e8/the-famous-manchester.jpg?w=900&h=-1&s=1",
    description:
      "Manchester was right at the heart of the Revolution, becoming the UK's leading producer of cotton and textiles. Manchester is also famous for being the first industrialised city in the world. Manchester was responsible for the country's first ever working canal in 1761 and the world's first ever railway line in 1830."
  }
];

const App = () => {
  return (
    <div className="App">
      <Heading />
      <div className="card-content">
        {TouristInfoDetails.map((detail, index) => {
          return (
            <TouristInfoCards
              key={index}
              name={detail.name}
              url={detail.url}
              pic={detail.pic}
              description={detail.description}
            />
          );
        })}
      </div>
      <Bookings />
      <Restaurant />
      <Footer info={info} />
    </div>
  );
};

export default App;
