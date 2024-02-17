import React from "react";

const RoomTypes = () => {
  return (
    <div id="rooms" className="container py-4">
      <h2 className="text-center mb-4">Our Rooms</h2>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card h-100 border-0 shadow">
            <img
              src="https://www.chicagoriverhotel.com/wp-content/uploads/sites/9/2017/06/1513-SUITE_CQ_WACKER_0122_White-No-Pattern.jpg"
              className="card-img-top"
              alt="Standard Room"
            />
            <div className="card-body">
              <h5 className="card-title">Standard Room</h5>
              <p className="card-text">
                Comfortable and spacious room equipped with all the necessary
                amenities for a pleasant stay.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100 border-0 shadow">
            <img
              src="https://image-tc.galaxy.tf/wijpeg-afu0zj5rhmyyirzditj3g96mk/deluxe-room-king-1-2000px.jpg"
              className="card-img-top"
              alt="Deluxe Room"
            />
            <div className="card-body">
              <h5 className="card-title">Deluxe Room</h5>
              <p className="card-text">
                Luxurious room with additional amenities and elegant decor for a
                truly indulgent experience.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100 border-0 shadow">
            <img
              src="https://media-cdn.tripadvisor.com/media/photo-s/22/ac/7b/b8/the-amayaa.jpg"
              className="card-img-top"
              alt="Suite"
            />
            <div className="card-body">
              <h5 className="card-title">Suite</h5>
              <p className="card-text">
                Spacious suite with separate living and sleeping areas, perfect
                for families or extended stays.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomTypes;
