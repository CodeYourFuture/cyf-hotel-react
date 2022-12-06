import React from "react";

const TouristInfoCards = () => {
  return (
    <div className="main-card">
      <div className="card">
        <img
          src="https://www.londonxlondon.com/wp-content/uploads/2019/11/Winter-in-London.jpg"
          className="card-img-top"
        />
        <div className="card-body">
          <a href="#" className="btn btn-primary">
            Go London
          </a>
        </div>
      </div>

      <div className="card">
        <img
          src="https://media.istockphoto.com/id/915904544/photo/night-view-of-the-clyde-arc.jpg?s=612x612&w=0&k=20&c=e5eL9Qy596sZOQxPJuFXYdpJP9me0KMKfCGzytho9GI="
          className="card-img-top"
        />
        <div className="card-body">
          <a href="#" className="btn btn-primary">
            Go Glasgow
          </a>
        </div>
      </div>

      <div className="card">
        <img
          src="https://i2-prod.manchestereveningnews.co.uk/incoming/article16687124.ece/ALTERNATES/s615/0_manchester-rain-IMG_0637-MEN.jpg"
          className="card-img-top"
        />
        <div className="card-body">
          <a href="#" className="btn btn-primary">
            Go Manchester
          </a>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
