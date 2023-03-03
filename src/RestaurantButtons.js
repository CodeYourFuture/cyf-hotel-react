import React from 'react';

const RestaurantButtons = ({orderOne}) => {
    return (
        <div>
           <button className='btn-primary' onClick = {orderOne} >Add</button> 
        </div>
    );
};

export default RestaurantButtons;