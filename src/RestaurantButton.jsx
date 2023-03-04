const RestaurantButton = props => {
  return (
    <button onClick={props.onClick} className="btn btn-primary">
      Add
    </button>
  );
};

export default RestaurantButton;
