const RestaurantButton = ({ onClickHandler }) => {
  return (
    <button className="btn btn-primary" onClick={onClickHandler}>
      Add
    </button>
  );
};

export default RestaurantButton;
