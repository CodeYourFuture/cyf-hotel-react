import React from 'react';

const RestaurantButton = ({orderButton}) => {
  return (
    <button className="btn btn-primary" onClick={orderButton}>
      Add
    </button>
  );
};

export default RestaurantButton;
