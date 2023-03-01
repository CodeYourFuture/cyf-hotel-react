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


import React, {useState} from 'react';

const Restaurant = () => {

  const [number, setNumber] = useState(0);
  
  const clickHandler = () => {
    setNumber(number + 1)
  }

  return (
    <div>
      <h3>Restaurant Orders:</h3>
      
      <h1>{number}</h1>
      <button onClick = {clickHandler}>Add</button>
    </div>
  );
};

export default Restaurant;
