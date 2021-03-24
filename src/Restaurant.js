import React, { useState } from "react";

const Restaurant = () => {
  const pizzas = 0;
  const [orders, setOrders] = useState([]);
  const addOrders = () => {
    setOrders((orders = 0));
  };

  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <li>
          Pizzas: {pizzas} <button className="btn btn-primary">Add</button>
        </li>
      </ul>
    </div>
  );
};

export default Restaurant;

// **Instructions:** At the moment, the number of pizzas a guest can order is static and set to 0,
// even if they click on the 'Add' button.We will change that in the following to let
// a guest add more pizzas to their order.First, declare a new state variable`orders`
// along with the function to set the orders state`setOrders`.The initial value of the`orders`
// state should be ** 0 **.Use the new `orders` variable instead of the`pizzas` variable
//   ( that you can now delete).

// **Hint:** You need to use the React function `useState` to create a state variable.
// Remember to import the function at the top with `import React, {useState} from "react";`.

// **Test:** Verify the number of ordered pizzas it still **0** on the screen.

// import React, {useState} from "react";

// function CaughtPokemon( props )
// {
//     const [caught, setCaught] = useState([])
//     const catchPokemon = () =>
//     {
//         const pokeCharact=["Ditto","Eevee","Pikachu","Spearow","Butterfree"]
//         setCaught( caught.concat(pokeCharact) + 1 );
//     }

//     // const lossPokemon = () =>
//     // {
//     //     setCaught(caught - 1)
//     // }
//     return (
//         <div>
//             <ul>
//                 {caught.map( ( elem, index ) =>
//                 {
//                     return <li key={index}>{elem}</li>
//                 })}
//             </ul>
//             <button onClick={catchPokemon}>caught</button>
//             {/* <button onClick={lossPokemon}>lost</button> */}
//             <p>Caught {caught.length} pokemon on {props.date}</p>
//         </div>

//     );
// }
