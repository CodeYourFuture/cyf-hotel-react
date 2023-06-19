import React, { useState } from "react";

const RestaurantButton = () => {
    const [order, setOder] = useState(0);

    const AddPizzas = () => {
        setOder(order + 1);
    };

return (
    <div>
        <ul>
            <li>
                Pizzas: {order} <button onClick={AddPizzas} className="btn      btn-primary">
                Add
                </button>
            </li>
        </ul>
    </div>
);
};

export default RestaurantButton;

//   const [order, setOder] = useState(0);

//   const AddPizzas = () => {
//     orderOne = setOder(order + 1);
//   };

//   return (
//     <div>
//       <button onClick={AddPizzas} className="btn btn-primary">
//         Add
//       </button>
//       <Restaurant orderOne />
//     </div>
//   );
