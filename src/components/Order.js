import React, { useState } from "react";

const Order = props => {
  const [order, setOrder] = useState(0);

  return (
    <li>
      {props.orderType}: {order}{" "}
      <button className="btn btn-primary" onClick={() => setOrder(order + 1)}>
        Add
      </button>
    </li>
  );
};
export default Order;

// function component
// class component
// props = static
// state = dynamic
// export  default  Order

// class Orders extends React.Component {
//     constructor(props){
//         super(props);
//         this.state ={
//             orders : 0,
//             count : 5
//         }
//     }

//     render(){
//         return (
//           <li>
//             Pizzas: {this.order}{" "}
//             <button
//               className="btn btn-primary"
//               onClick={() => this.setOrders(this.order + 1)}
//             >
//               Add
//             </button>
//           </li>
//         );
//     }
// }
