import React from 'react';

const RestaurantButton = props => {
    return (
        <span>
            <button onClick={props.addOrderAndCancel[0]} className="btn btn-primary" style={{ marginLeft: "10px" }}>{props.btnLabel[0]}</button>

            <button onClick={props.addOrderAndCancel[1]} className="btn btn-primary" style={{ marginLeft: "10px" }}>{props.btnLabel[1]}</button>
        </span >

    )
}

export default RestaurantButton