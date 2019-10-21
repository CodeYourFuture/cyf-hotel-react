import React from "react";

export default function Footer() {
   const data = [
      "123 Fake Street, London, E1 4UD",
      "hello@fakehotel.com",
      "0123 456789"
   ];
   return (
      <div className="bg-secondary footer">
         <ul className="list-group d-flex flex-row  justify-content-around">
            {data.map((item, index) => {
               return (
                  <li className="list-group" key={index}>
                     {item}
                  </li>
               );
            })}
         </ul>
      </div>
   );
}
