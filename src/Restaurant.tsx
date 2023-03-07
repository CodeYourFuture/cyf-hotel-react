import React from 'react';
import Order from './Order';

const Restaurant = () => {
  const foods = ['Pizzas', 'Salads', 'Chocolate cake'];
  return (
    <div className='text-center g-5'>
      <h3>Restaurant Orders</h3>
      <ul className='list-group list-group-flush'>
        {foods.map((food) => (
          <Order key={food} orderType={food} />
        ))}
      </ul>
    </div>
  );
};

export default Restaurant;
