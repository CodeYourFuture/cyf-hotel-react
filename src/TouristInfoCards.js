import React from "react";

const TouristInfoCards = () => {
  return (
    <div>
      <div className="card">
        <img
          alt="glasgow"
          src="https://webunwto.s3.eu-west-1.amazonaws.com/s3fs-public/2022-03/the-glasgow-declaration-on-climate-action-in-tourism-sm.jpg"
          className="card-img-top"
        />
        <div className="card-body">
          <a
            href="http://www.peoplemakeglasgow.com"
            className="btn btn-primary"
          >
            Visit Glasgow
          </a>
        </div>
      </div>

      <div className="card">
        <img
          alt="manchester"
          src="https://www.countrysidepartnerships.com/sites/default/files/styles/hero_mobile/public/media/2019-10/AdobeStock_78727861.jpeg.webp?itok=fSffe8ay&cache-buster=a684714d75&coords_hash=cec3070d8e"
          className="card-img-top"
        />
        <div className="card-body">
          <a href="http://www.visitmanchester.com" className="btn btn-primary">
            Visit Manchester
          </a>
        </div>
      </div>

      <div className="card">
        <img
          alt="london"
          src="https://image.arrivalguides.com/500x500/09/1dd23cc06c31c31ba7df72f2c74db5bc.jpg"
          className="card-img-top"
        />
        <div className="card-body">
          <a href="http://www.visitlondon.com" className="btn btn-primary">
            Visit London
          </a>
        </div>
      </div>
    </div>
  );
};
export default TouristInfoCards;
