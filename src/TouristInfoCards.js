import React from "react";

const TouristInfoCards = () => {
  return (
    <div className="container">
      <div className="card-deck">
        <div className="card mb-4">
          <img
            src="https://frontline-collections.com/wp-content/uploads/2018/02/Glasgow-Debt-Collection.jpg"
            className="card-img-top img-fluid"
            alt="glasgow"
          />
          <div className="card-body">
            <a
              href="https://peoplemakeglasgow.com/"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Glasgow
            </a>
          </div>
        </div>

        <div className="card mb-4">
          <img
            src="https://i2-prod.liverpoolecho.co.uk/incoming/article16582339.ece/ALTERNATES/s615/0_010719weatherpics7.jpg"
            className="card-img-top img-fluid"
            alt="manchester"
          />
          <div className="card-body">
            <a
              href="https://www.visitmanchester.com/"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Manchester
            </a>
          </div>
        </div>

        <div className="card mb-4">
          <img
            src="https://www.trustnodes.com/wp-content/uploads/2020/04/London.jpg"
            className="card-img-top img-fluid"
            alt="london"
          />
          <div className="card-body">
            <a
              href="https://www.visitlondon.com/"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              London
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
