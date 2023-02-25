import React from "react";

import Bookings from "./Bookings";
import "./App.css";

const App = () => {
  const address = ["123 Fake Street, London, E1 4UD", "hello@fakehotel.com", "0123 456789"];
  return (
    <div className="App">
      <Heading/>
      <TouristInfoCards/>
      <Bookings/>
      <SearchResults/>
      <Footer address={address}/>
    </div>
  );
};

const Heading = () => {
  return (
    <header className="App-header">
        <h1>CYF Hotel</h1>
        <img src="https://image.flaticon.com/icons/svg/139/139899.svg"/>
    </header>
  )
}

const TouristInfoCards = () => {
  return (
    <div class="card-container">

        <div className="card">
	          <img src="https://www.glasgowlife.org.uk/media/pkdn34gs/glasgow-city-image-credit-glasgow-life.jpg?anchor=center&mode=crop&width=1800&height=700&rnd=132864696763600000" className="card-img-top" />
	          <div className="card-body">
                <h3>Glasgow</h3>
		            <a href="http://peoplemakeglasgow.com/" className="btn btn-primary">Click for more information</a>
	          </div>
        </div>

        <div className="card">
	          <img src="https://eu-assets.simpleview-europe.com/manchester2016/imageresizer/?image=%2Fdbimgs%2FManOne-03%284%29.jpg&action=Background_Overlay" className="card-img-top" />
	          <div className="card-body">
                <h3>Manchester</h3>
		            <a href="https://www.visitmanchester.com/" className="btn btn-primary">Click for more information</a>
	          </div>
        </div>

        <div className="card">
	          <img src="https://cdn.londonandpartners.com/-/media/images/london/visit/things-to-do/sightseeing/london-attractions/tower-bridge/tower-bridge-shutterstock-1920x582.jpg?mw=1920&hash=078DDB24AC457E2D8F231FC3E0F7EC55A00C88E3" className="card-img-top" />
	          <div className="card-body">
                <h3>London</h3>
		            <a href="https://www.visitlondon.com/" className="btn btn-primary">Click for more information</a>
	          </div>
        </div>

    </div>
  );
}

const SearchResults = () => {
  return (
    <table class="booking-table-container">

      <thead>
        <tr>
          <th>#</th>
          <th>ID</th>
          <th>Title</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Room ID</th>
          <th>Check in date</th>
          <th>Check out date</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <th>1</th>
          <td>1234</td>
          <td>london</td>
          <td>zahraa</td>
          <td>tayyar</td>
          <td>zahraatayyar@hotmail.com</td>
          <td>1234</td>
          <td>01/01/2023</td>
          <td>01/01/2023</td>
        </tr>

        <tr>
          <th>2</th>
          <td>1234</td>
          <td>london</td>
          <td>zahraa</td>
          <td>tayyar</td>
          <td>zahraatayyar@hotmail.com</td>
          <td>1234</td>
          <td>01/01/2023</td>
          <td>01/01/2023</td>
        </tr>

        <tr>
          <th>1</th>
          <td>1234</td>
          <td>london</td>
          <td>zahraa</td>
          <td>tayyar</td>
          <td>zahraatayyar@hotmail.com</td>
          <td>1234</td>
          <td>01/01/2023</td>
          <td>01/01/2023</td>
        </tr>

      </tbody>

    </table>
  )
}

const Footer = (prop) => {
  return (
    <ul class="contact-container">
      {prop.address.map((address) => {
        return (<li>{address}</li>)
      })}
    </ul>
  )
}

export default App;
