import React from "react";
// import Restaurant from './Restaurant';
// import Order from './Order';
import PropTypes from "prop-types";

const RestaurantButton = ({ orderOne, text, orderType }) => {
  /*const onClick = () => {
        console.log('click');
    };*/
  return (
    <>
      <button className="btn btn-primary" onClick={orderOne}>
        Add {text}
      </button>
    </>
  );
};

RestaurantButton.propTypes = {
  onClick: PropTypes.func
};

export default RestaurantButton;
