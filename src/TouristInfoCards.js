import React from "react";

const TouristInfoCards = () => {
  return (
    <div className="card">
      <img
        src="https://peoplemakeglasgow.com/templates/people/images/logo.png"
        className="card-img-top"
      />
      <div className="card-body">
        <a href="https://peoplemakeglasgow.com" className="btn btn-primary">
          Glasgow
        </a>
      </div>
      <div className="card">
        <img
          src="https://cdn.londonandpartners.com/assets/73295-640x360-london-skyline-ns.jpg"
          className="card-img-top"
        />
        <div className="card-body">
          <a href="https://visitlondon.com" className="btn btn-primary">
            London
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://yt3.ggpht.com/a/AGF-l7-ua_5VIaz7FNCMb8CyvHaWzndZBQKmCjIgSQ=s900-c-k-c0xffffffff-no-rj-mo"
          className="card-img-top"
        />
        <div className="card-body">
          <a href="https://visitmanchester.com" className="btn btn-primary">
            Manchester
          </a>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
