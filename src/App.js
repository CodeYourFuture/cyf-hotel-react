import React from "react";
import SearchButton from "./SearchButton";
import SearchResults from "./SearchResults";
import Bookings from "./Bookings";
import "./App.css";

const Heading = () => {
  return (
    <div>
      <img src="https://image.flaticon.com/icons/svg/139/139899.svg" alt="" />
      <header className="App-header">CYF Hotel</header>
    </div>
  );
};

const TouristInfoCards = () => {
  return (
    <div className="row">
      <div className="col-sm-3">
        <div className="card">
          <div className="card-body">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRQMREqMDAhYoborz4_AhaMqb_SBLZ4LDvC4g&usqp=CAU"
              className="card-img-top"
              alt=""
            />
            <h5 className="card-title">Glasgow City</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href="peoplemakeglasgow.com" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
      <div className="col-sm-3">
        <div className="card">
          <div className="card-body">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ9JfrHRg_PN7xzOl6hAEWA-10M0zoXBbhoZg&usqp=CAU"
              className="card-img-top"
              alt=""
            />
            <h5 className="card-title">Manchester City</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href="visitmanchester.com" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
      <div className="col-sm-3">
        <div className="card">
          <div className="card-body">
            <img
              alt=""
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQoTPjr-RRCTiCRvOz5dtUm1gUWy4Btb9abOg&usqp=CAU"
              className="card-img-top"
            />
            <h5 className="card-title">London City</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href="visitlondon.com" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Footer = props => {
  console.log(props);
  return (
    <div>
      <ul>
        {props.address.map(item => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards />
      <Bookings />
      <SearchButton />
      <SearchResults FakeBookings={"src/data/fakeBookings.json"} />
      <Footer
        address={[
          "123 Fake Street, London, E1 4UD",
          "hello@fakehotel.com",
          "0123 456789"
        ]}
      />
    </div>
  );
};

export default App;
