import React from "react";

const TouristInfoCards = () => {
  return (
    <div className="main-card">
      <div className="card">
        <img
          src="https://a.travel-assets.com/findyours-php/viewfinder/images/res70/40000/40504-Albert-Square.jpg"
          className="card-img-top"
        />
        <div className="card-body">
          <a href="#" className="btn btn-primary">
            Go Manchester
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://dimg.visitscotland.com/wsimgs/visitscotland_34212870444_1410159508.jpg"
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
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyN5gXxMY2uSnThIJKHN_JW94-dsOZdP6gM28_cIiqdnoxk4LwN0h30mX3-7zfgCQLeuM&usqp=CAU"
          className="card-img-top"
        />
        <div className="card-body">
          <a href="#" className="btn btn-primary">
            Go London
          </a>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
