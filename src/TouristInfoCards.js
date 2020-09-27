import React from "react";
function TouristInfoCards() {
  return (
    <div className="row mx-auto  container mt-1">
      <div className="card  col-md-3  h-50 mr-1 ml-1">
        <img
          src="https://peoplemakeglasgow.com/images/Things_to_do/Tours/city-sightseeing-riverside.jpg"
          className="rounded  h-50 w-100 mt-1"
          alt=""
        />
        <div className="card-block">
          <a
            href="http://peoplemakeglasgow.com"
            className="btn btn-primary mt-1 mb-1 w-100"
          >
            Go Glasgow
          </a>
        </div>
      </div>
      <div className="card col-md-3  h-50 mr-1 ml-1">
        <img
          src="https://assets.simpleview-europe.com/manchester2016/imageresizer/?image=%2Fdbimgs%2Flake-district%281%29.jpg&action=FeaturedItems3x2"
          className="rounded  h-50 w-100 mt-1"
          alt=""
        />
        <div className="card-block ">
          <a
            href="http://visitmanchester.com"
            className="btn btn-primary mt-1 mb-1 w-100"
          >
            Go Manchester
          </a>
        </div>
      </div>
      <div className="card col-md-3  h-50 mr-1 ml-1 ">
        <img
          src="https://cdn.contexttravel.com/image/upload/c_fill,q_60,w_2600/v1555943130/production/city/hero_image_11_1555943130.jpg"
          className="rounded h-50 w-100 mt-1"
          alt=""
        />
        <div className="card-block">
          <a
            href="http://visitlondon.com"
            className="btn btn-primary mt-1 mb-1 w-100"
          >
            Go London
          </a>
        </div>
      </div>
    </div>
  );
}
export default TouristInfoCards;
