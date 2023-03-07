import React from 'react';

type PropsType = { orderOne: () => void };
const RestaurantButton = ({ orderOne }: PropsType) => {
  return (
    <button className='btn btn-primary' onClick={orderOne}>
      Add
    </button>
  );
};

export default RestaurantButton;
