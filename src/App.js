import React from "react";
import Heading from "./Heading";
import Footer from "./Footer";
import Bookings from "./Bookings";
import "./App.css";
import TouristInfoCards from "./TouristInfoCards";
import Restaurant from "./Restaurant";

const cardData = [
  {
    title: "London",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vulputate arcu sem, et sagittis diam condimentum vel. Proin mattis egestas dolor, eu tincidunt turpis vestibulum lacinia. Cras vestibulum convallis tortor, pharetra gravida nisl. Curabitur id dolor tincidunt, efficitur orci in, dignissim nulla.",
    imgUrl:
      "https://a.cdn-hotels.com/gdcs/production27/d274/43014cca-c88c-4061-ace8-58edc24531ee.jpg",
    webLink: "https://www.visitlondon.com/"
  },
  {
    title: "Manchester",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vulputate arcu sem, et sagittis diam condimentum vel. Proin mattis egestas dolor, eu tincidunt turpis vestibulum lacinia. Cras vestibulum convallis tortor, pharetra gravida nisl. Curabitur id dolor tincidunt, efficitur orci in, dignissim nulla.",
    imgUrl:
      "https://blog.radissonblu.com/wp-content/uploads/2016/03/Manchester-city-England.jpg",
    webLink: "https://www.visitmanchester.com/"
  },
  {
    title: "Glasgow",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vulputate arcu sem, et sagittis diam condimentum vel. Proin mattis egestas dolor, eu tincidunt turpis vestibulum lacinia. Cras vestibulum convallis tortor, pharetra gravida nisl. Curabitur id dolor tincidunt, efficitur orci in, dignissim nulla.",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKsTJeZ6ctrZ2kFyUCMeGo1TmtC_t0WADX0A&usqp=CAU",
    webLink: "https://peoplemakeglasgow.com/"
  }
];
const footerData = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789"
];

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards cardData={cardData} />
      <Bookings />
      <Restaurant />
      <Footer footerData={footerData} />
    </div>
  );
};

export default App;
