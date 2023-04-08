import ClipLoader from "react-spinners/ClipLoader";

export const LoadingSpinner = () => {
  return (
    <div className="loading-container">
      <ClipLoader color={"#9110a5"} size={150} />
      <p className="loading-text">Loading Bookings...</p>
    </div>
  );
};
