export const RestaurantButton = ({ orderOne }) => {
  return (
    <div>
      <button className="btn btn-primary" onClick={orderOne}>
        Add
      </button>
    </div>
  );
};
