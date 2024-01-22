import React from 'react';
import Order from './Order';

const Restaurant = () => {
  const foods = ["pizza", "salad", "cake"]
  return (
    <div>
      <h3 className='head3'>Restaurant orders</h3>
      <ul>
        
         {foods.map ((food, index) => <Order key = {index} orderType = {food}/>)}
        
      </ul>
    </div>
  );
};

export default Restaurant;
