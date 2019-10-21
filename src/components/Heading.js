import React from "react";
import Clock from "../Clock";

export default function Heading() {
   return (
      <div>
         <header className="App-header d-flex justify-content-between flex-wrap">
            <span> CYF Hotel </span>
            <Clock />
            <img
               className="img-fluid"
               src="https://image.flaticon.com/icons/svg/139/139899.svg"
               alt="cyf-hotel"
            />
         </header>
      </div>
   );
}
