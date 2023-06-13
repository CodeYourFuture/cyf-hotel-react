import React from "react";
import Search from "./Search.js";

import Bookings from "./Bookings";
import "./App.css";

const Heading = () => {
  return (
    <div>
      <header className="App-header">CYF Hotel</header>
    </div>
  )
}

const Footer = (props) => {
  let data = props.address
  return (
    <div className="footer">
      <ul>
        {
          data.map(line => {
            return <li>{line}</li>
          })
        }
      </ul>
    </div>
  )


}

const TouristInfoCards = (props) => {
  return (
    <div className="card">
      <img src={props.src} className="card-img-top" />
      <div className="card-body">
        <h2>{props.name}</h2>
        <p>{props.description}</p>
        <a href={props.link} className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  )
}

const App = () => {
  return (
    <div className="App">
      <Heading />
      <div className="AllCards">

        <TouristInfoCards name="Manchester" src="https://cdn.britannica.com/42/116342-050-5AC41785/Manchester-Eng.jpg"
          link="https://www.visitmanchester.com/" description="Manchester is the only UK city to feature in Lonely Planet's Best in Travel 2023 list and the only 
        UK city in National Geographic's influential ‘Best of the World’ list which annually sets out 25 of the must-see places to visit around the globe." />

        <TouristInfoCards name="London" src="https://images.musement.com/cover/0002/49/london-jpeg_header-148518.jpeg"
          link="https://www.visitlondon.com/" description="Welcome to London! Discover the best of London with Visit London, the official guide to England’s 
          exciting capital. Find things to do in London, from iconic sightseeing spots and fun-filled days out to top restaurants, theatre and unmissable London events. If you’re not able to visit just yet, plan ahead to make the most of your next visit." />

        <TouristInfoCards name={"Glasgow"} src="https://www.visitscotland.com/blog/wp-content/uploads/2021/10/Park_Circus_and_Kelvingrove_Park.jpg.jpg"
          link="https://peoplemakeglasgow.com/" description="You’re guaranteed to find accommodation in Glasgow which suits your taste and budget. Whether you’re looking for something uniquely Glaswegian, a trendy hotel, a vibrant hostel or 
          a comfortable city centre apartment, you can be assured of a warm welcome." />

      </div>
      <Bookings />
      <Footer address={["123 Fake Street, London, E1 4UD", "hello@fakehotel.com", "0123 456789"]} />
    </div>
  );
};

export default App;