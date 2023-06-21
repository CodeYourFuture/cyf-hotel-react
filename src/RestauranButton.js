const RestaurantButton = ({ handleClick }) => {
  return (
    <div>
      <button onClick={handleClick} className="btn btn-primary">Add +</button>
      <div>
        <button onClick={handleClick} className="btn-zero">Reset</button>
      </div>
    </div>
  );
};

export default RestaurantButton;
