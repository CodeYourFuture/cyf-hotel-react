import React from "react";

const TouristInfoCards = () => {
  return (
    <div className="card-Container">
      <div className="card">
        <img
          src="https://cdn.pixabay.com/photo/2017/04/14/23/47/bridge-2231612_1280.jpg"
          className="card-img-top"
        />
        <div className="card-body">
          <a href="http://visitmanchester.com" className="btn btn-primary">
            Manchester
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://cdn.pixabay.com/photo/2017/06/11/18/03/london-2393098_1280.jpg"
          className="card-img-top"
        />
        <div className="card-body">
          <a href="http://visitlondon.com" className="btn btn-primary">
            London
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://cdn.pixabay.com/photo/2015/09/27/17/03/secc-961000_1280.jpg"
          className="card-img-top"
        />
        <div className="card-body">
          <a href="http://peoplemakeglasgow.com" className="btn btn-primary">
            Glasgow
          </a>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
