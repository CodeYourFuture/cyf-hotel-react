// import React from "react";

// const Restaurant = () => {
//   const pizzas = 0;
//   return (
//     <div>
//       <h3>Restaurant Orders</h3>
//       <ul>
//         <li>
//           Pizzas: {pizzas} <button className="btn btn-primary">Add</button>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Restaurant;

import React from "react";
import Order from "./Order.jsx";
//import RestaurantButton from "./RestaurantButton.jsx";

const Restaurant = () => {
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <Order orderType="Pizzas" />
        <Order orderType="Chocolate cake" />
        <Order orderType="Salads" />
      </ul>
    </div>
  );
};

export default Restaurant;