import React, {useState} from 'react';
import RestaurantButtons from './RestaurantButtons';

const Order = ({orderType}) => {

    const [order, setOrder] = useState(0);

    const clickHandler = () => {
        setOrder(order + 1);
    }

    const clickRemover = () => {
      setOrder(order - 1);
    };


    return (
        <div className='restaurantOrders'>
            <li>
              {orderType}: {order} 
              <RestaurantButtons orderOne = {clickHandler} />
            </li>
            <button className='btn-primary' onClick={clickRemover}>remove</button>
        </div>
    );
};

export default Order;