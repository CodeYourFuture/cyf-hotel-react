import React, {useState} from "react";

const Restaurant = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <li>
          Pizzas: {count} <button className="btn btn-primary" onClick={ () =>
          setCount(count +1)}>
            Add</button>
        </li>
      </ul>
    </div>
  );
};


export default Restaurant;
