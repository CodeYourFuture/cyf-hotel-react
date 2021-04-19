import React from "react";

const TouristInfoCards = () => {
  return (
    <div className="card-group">
      <div className="card">
        <img
          src="https://peoplemakeglasgow.com/images/Things_to_do/Top_attractions/Main-image-995.JPG"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Glasgow</h5>
          <a
            href="http://peoplemakeglasgow.com"
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Go to Glasgow
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://assets.simpleview-europe.com/manchester2016/imageresizer/?image=%2Fdbimgs%2FCath%20gdns%20mkts%202.jpg&action=BlogDetailContent"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Manchester</h5>
          <a
            href="http://visitmanchester.com"
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Go to Manchester
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://cdn.londonandpartners.com/visit/whats-on/special-events/new-years-eve-fireworks/96604-640x360-nye-fireworks16-closeup-640.jpg"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">London</h5>
          <a
            href="http://visitlondon.com"
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Go to London
          </a>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
