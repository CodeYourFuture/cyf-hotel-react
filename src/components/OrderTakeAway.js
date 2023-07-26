import React from "react";
import Img from "../images/takAway.jpg";

export default function OrderTakeAway() {
  return (
    <div className="takeAway">
      <img src={Img} alt="london" />
      <div className="describe">
        <section> Order what do you like , its easy to get</section>
        <p>everything you will find in the menu bellow</p>
      </div>
    </div>
  );
}
