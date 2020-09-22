import React, { Fragment } from "react";

const TouristInfoCards = () => {
  return (
    <Fragment>
      <div className="App-container">
        <div className="card">
          <img
            src="https://peoplemakeglasgow.com/images/Things_to_do/Top_attractions/Main-image-995.JPG"
            class="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 class="card-title">Glasgow</h5>
            <a
              href="http://peoplemakeglasgow.com"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Go to somewhere
            </a>
          </div>
        </div>
        <div className="card">
          <img
            src="https://assets.simpleview-europe.com/manchester2016/imageresizer/?image=%2Fdbimgs%2FCath%20gdns%20mkts%202.jpg&action=BlogDetailContent"
            class="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 class="card-title">Manchester</h5>
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
            class="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 class="card-title">London</h5>
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
    </Fragment>
  );
};

export default TouristInfoCards;
