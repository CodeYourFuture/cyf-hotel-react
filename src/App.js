import React from "react";
import Bookings from "./Bookings";
import "./App.css";
import fakeBookings from "./data/fakeBookings.json";
import moment from "moment";
import Restaurant from "./Restaurant";

const Heading = () => {
  return (
    <div>
      <img
        className="App-logo"
        src="https://image.flaticon.com/icons/svg/139/139899.svg"
      />
      <header className="App-header">CYF Hotel</header>
    </div>
  );
};
const TouristInfoCards = props => {
  return (
    <div className="card">
      <img id="pic" src={props.link} class="card-img-top" />
      <div class="card-body">
        <h5 class="card-title">{props.title} </h5>
        <p class="card-text">{props.text}</p>
        <a href={props.linkSite} class="btn btn-primary">
          Check this out
        </a>
      </div>
    </div>
  );
};
const Footer = props => {
  return (
    <ul className="footer">
      {props.details.map(item => (
        <li>{item}</li>
      ))}
    </ul>
  );
};
const SearchResults = props => {
  return (
    <table className="table">
      {props.elements.map(item => (
        <th>{item}</th>
      ))}
      {props.bookings.map(booking => (
        <tr>
          <td>{booking.id}</td>
          <td>{booking.title}</td>
          <td>{booking.firstName}</td>
          <td>{booking.surname}</td>
          <td>{booking.email}</td>
          <td>{booking.roomId}</td>
          <td>{booking.checkInDate}</td>
          <td>{booking.checkOutDate}</td>
          <td>{numberOfDays(booking.checkInDate, booking.checkOutDate)}</td>
        </tr>
      ))}
    </table>
  );
};
function numberOfDays(checkIn, checkOut) {
  var checkInMoment = moment(checkIn);
  var checkOutMoment = moment(checkOut);
  var duration = moment.duration(checkOutMoment.diff(checkInMoment));

  return Math.floor(duration.asDays());
}
const App = () => {
  return (
    <div className="App container">
      <Heading />
      <div className="cardsContainer">
        <TouristInfoCards
          link="http://www.funkimunkileisure.com/wp-content/themes/funkiminki/img/destinations/glasgow.jpg"
          title="Glasgow"
          text="People make Glasgow"
          linkSite="https://peoplemakeglasgow.com/"
        />
        <TouristInfoCards
          link="http://www.manchesterliteraturefestival.co.uk/images/112238-5a4x9t8z5.jpg?size=195x195"
          title="Manchester"
          text="Manchester city centre is jam-packed with unique and eclectic places"
          linkSite="https://www.visitmanchester.com/"
        />
        <TouristInfoCards
          link="http://cdn77.orangesmile.com/common/img_cities_tooltips_140/london--2601889-8.jpg"
          title="London"
          text="London is the capital and most populous city of England and the United Kingdom."
          linkSite="http://visitlondon.com"
        />
      </div>
      <Bookings />
      <Restaurant />

      <SearchResults
        elements={[
          "ID",
          "Title",
          "Name",
          "Surname",
          "Email",
          "Room-ID",
          "Check-in-Date",
          "Check-out-Date",
          "Length of stay"
        ]}
        bookings={fakeBookings}
      />
      <Footer
        details={[
          "123 Fake Street, London, E1 4UD",
          "hello@fakehotel.com",
          "0123 456789"
        ]}
      />
    </div>
  );
};

export default App;
