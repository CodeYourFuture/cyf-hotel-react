function RestaurantButton({ orderOne, removeOrderOne }) {
  return (
    <div className="btn-container">
      <button className="btn btn-danger" onClick={removeOrderOne}>
        -
      </button>
      <button className="btn btn-success" onClick={orderOne}>
        +
      </button>
    </div>
  );
}
export default RestaurantButton;
