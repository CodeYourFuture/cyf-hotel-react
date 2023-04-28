import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import Heading from "../components/Heading";
import Book from "../data/booking.json";
import BookingNight from "../components/BookingNight";
import Slides from "../components/Slides";
import Footer from "../components/Footer";

const Booking = () => {
  const [changeButton, setChangeButton] = useState(false);

  return (
    <div>
      <Heading />
      <div className="booking">
        <Slides />
        <div className="book-choice">
          {Book.map(opt => {
            return (
              <div className="book-form">
                <div className="form-select">
                  <h4>Choice From Menu</h4>
                  <Button onClick={() => setChangeButton(!changeButton)}>
                    {opt.days}
                  </Button>
                  <Button onClick={() => setChangeButton(!changeButton)}>
                    {opt.Week}
                  </Button>
                  <Button onClick={() => setChangeButton(!changeButton)}>
                    {opt.Month}
                  </Button>
                </div>
                <div className="booking-submit">
                  {changeButton && <BookingNight />}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Booking;
