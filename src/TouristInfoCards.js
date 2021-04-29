import React from "react";

const TouristInfoCards = () => {
  return (
    <div className="card-container">
      <div className="card">
        <img
          className="card-img-top"
          src="https://images-na.ssl-images-amazon.com/images/I/91uAXURQq4L._SX500_.jpg"
          alt="Glasgow"
        />
        <div className="card-body">
          <a className="btn btn-primary" href="https://peoplemakeglasgow.com">
            Glasgow
          </a>
        </div>
      </div>

      <div className="card">
        <img
          className="card-img-top"
          src="https://static.amazon.jobs/locations/118/thumbnails/Manchester_-_Thumbnail.jpg?1456767226"
          alt=""
        />
        <div className="card-body">
          <a className="btn btn-primary" href="https://visitmanchester.com">
            Manchester
          </a>
        </div>
      </div>

      <div className="card">
        <img
          className="card-img-top"
          src="https://live.staticflickr.com/3653/3499471010_a80f94ae33_b.jpg"
          alt=""
        />
        <div className="card-body">
          <a className="btn btn-primary" href="https://visitlondon.com">
            London
          </a>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
