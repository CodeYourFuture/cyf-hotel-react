import React from "react";

const TouristInfoCards = () => {
  return (
    <div className="main-card">
      <div className="card">
        <img
          src="https://a.cdn-hotels.com/gdcs/production189/d348/c9901744-aad6-4f5b-bf84-1da600b390d7.jpg"
          alt=""
          className="card-img-top"
        />
        <div className="card-body">
          <a href="https://visitmanchester.com" className="btn-btn-primary">
            Go Manchester
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://dimg.visitscotland.com/wsimgs/visitscotland_34212870444_1410159508.jpg"
          alt=""
          className="card-img-top"
        />
        <div className="card-body">
          <a href="http://peoplemakeglasgow.com" className="btn-btn-primary">
            Go Glasgow
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyN5gXxMY2uSnThIJKHN_JW94-dsOZdP6gM28_cIiqdnoxk4LwN0h30mX3-7zfgCQLeuM&usqp=CAU"
          alt=""
          className="card-img-top"
        />
        <div className="card-body">
          <a href="https://visitlondon.com" className="btn-btn-primary">
            Go London
          </a>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
