import React, {useState} from 'react';
import RestaurantButtons from './RestaurantButtons';

const Order = ({orderType}) => {

    const [order, setOrder] = useState(0);

    const addHandler = () => {
        setOrder(order + 1);
    }

    const removeHandler = () => {
      setOrder(order - 1);
    };


    return (
        <div className='restaurantOrders'>
            <li>
              {orderType}: {order} 
              <RestaurantButtons orderOne = {addHandler} />
            </li>
            <button className='btn-primary' onClick={removeHandler}>remove</button>
        </div>
    );
};

export default Order;