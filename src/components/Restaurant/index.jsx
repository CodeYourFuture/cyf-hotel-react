import Order from "./Order";

const Restaurant = () => {
  const orders = ["Pizza", "Salad", "Chocolate Cake"];
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        {orders.map((order) => (
          <Order orderType={order} />
        ))}
      </ul>
    </div>
  );
};

export default Restaurant;
