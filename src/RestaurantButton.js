import React from 'react';

const RestaurantButton = props => {
    return (
        <button onClick={props.addOrder} className="btn btn-primary">{props.btnLabel}</button>
    )
}

export default RestaurantButton