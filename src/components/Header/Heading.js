import React from "react";
import hotelImg from "../../assets/hotel.png";
import classes from "./Heading.module.css";

const Heading = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <span className={classes.title}>CYF Hotel</span>
        <img src={hotelImg} className={`${classes.logo} ms-auto`} />
      </header>
    </React.Fragment>
  );
};

export default Heading;
