const Order = () => {
  const [order, setOrder] = useState(0);

  const orderOne = () => {
    setOrder(v => v + 1);
  };

  return (
    <li>
      Pizzas: {order}
      <RestaurantButton prop={orderOne} />
    </li>
  );
};

export default Order;
