import React from "react";

import Bookings from "./Bookings";
import "./App.css";
import Restaurant from "./Restaurant";

import TouristInfoCards from "./TouristInforCards";

const cityInfo = [
  {
    city: "London",
    name: "London",
    link: "https://www.visitlondon.com/",
    description:
      "Attracting 27 million visitors every year, London is the most visited city in Europe. It’s no surprise that London is top of so many people’s travel plans: the city was founded by the Romans and has thrived over the centuries.",
    image:
      "https://images.pexels.com/photos/1796715/pexels-photo-1796715.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    city: "Manchester",
    name: "Manchester",
    link: "https://www.visitmanchester.com",
    description:
      "Featuring a distinct feel when compared to the capital city of London, Manchester is most well-known for its resilient and hard-working residents, raucous sports fans, and industrial economy. It’s also a hotspot for arts, cuisine, live entertainment, and features lots of easily accessible historical and natural attractions.",
    image:
      "https://images.pexels.com/photos/11014204/pexels-photo-11014204.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    city: "Glasgow",
    name: "Glasgow",
    link: "https://www.peoplemakeglasgow.com",
    description:
      "Vibrant, edgy and brimming with personality, Scotland’s largest city is a must-see spot for art, culture and cuisine, while its proximity to Loch Lomond & The Trossachs National Park make it perfect for nature lovers too.",
    image:
      "https://images.pexels.com/photos/3061345/pexels-photo-3061345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

const App = () => {
  return (
    <div className="App">
      {/* task 02 */}
      <Heading />
      {/* task 3, */}
      <TouristInfoCards cityInfo={cityInfo} />
      <Bookings />
      {/* task -08 */}
      <Restaurant />
      {/* task 4 */}
      <Footer address={address} />
    </div>
  );
};

function Heading() {
  return (
    <header className="App-header">
      <img
        className=".App-logo "
        src="https://image.flaticon.com/icons/svg/139/139899.svg"
        alt="hotel's logo"
      />
      CYF Hotel
    </header>
  );
}

const address = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789"
];

const Footer = props => (
  <ul className="footer footer-list">
    <li> Address</li>
    {props.address.map((info, index) => (
      <li key={index}> {info} </li>
    ))}
  </ul>
);

export default App;
