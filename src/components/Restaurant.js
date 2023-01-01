import Order from "./Order";

const Restaurant = () => {
  return (
    <div className="restaurant">
      <h3>Restaurant Orders</h3>
      <ul>
        <Order orderType={"Pasta"} />
        <Order orderType={"Salads"} />
        <Order orderType={"Chocolate cake"} />
        <Order orderType={"Chicken"} />
        <Order orderType={"Vanilla Ice cream"} />
      </ul>
    </div>
  );
};

export default Restaurant;
