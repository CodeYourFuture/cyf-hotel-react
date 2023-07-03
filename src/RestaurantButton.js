const RestaurantButton = ({ handleClick, handleClick1 }) => {
  return (
    <div>
      <button onClick={handleClick} className="btn btn-primary">add more</button>
      <button onClick={handleClick1} className="btn-zero">Reset</button>
    
    </div>
  );
};

export default RestaurantButton;
