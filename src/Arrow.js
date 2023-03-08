import React from "react";
import arrow from "./media/arrow_up.svg";
import { Link } from "react-scroll";

const Arrow = () => {
  return (
    <Link to="main-home" spy={true} smooth={true} offset={0} duration={2000}>
      <img className="arrow" src={arrow} alt="arrow - Go up" />
    </Link>
  );

  //   <img className="arrow" src={arrow} alt="arrow - Go up" />;
};

export default Arrow;
