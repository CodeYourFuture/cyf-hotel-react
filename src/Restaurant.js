import Order from "./Order";

const Restaurant = () => {
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul className="order-type">
        <Order orderType="Pizza" />
        <Order orderType="Cesar-Salad" />
        <Order orderType="Chocolate cake" />
        <Order orderType="Ice-Cream"/>
      </ul>
    </div>
  );
};

export default Restaurant;
