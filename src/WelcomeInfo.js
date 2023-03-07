import React from "react";
import { Link } from "react-scroll";

const WelcomeInfo = () => {
  return (
    <div className="reservation-text">
      <h1>Make Reservation</h1>
      <p>
        Welcome to our collection of exceptional hotels! Whether you're
        traveling for business or pleasure, we have the perfect accommodations
        to suit your needs and exceed your expectations.
      </p>
      <Link
        to="guest-list"
        spy={true}
        smooth={true}
        offset={0}
        duration={2000}
        className="button"
      >
        Check all guests
      </Link>
    </div>
  );
};

export default WelcomeInfo;
