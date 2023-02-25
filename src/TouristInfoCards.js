import React from "react";

const TouristInfoCards = () => {
  return (
    <div className="card-container">
      <div className="card">
        <img src="..." alt="london" />
        <div className="card-body">
          <h3>London</h3>
          <p>
            ''''''
          </p>
          <a href="https://www.visitlondon.com" className="btn btn-primary">
            More Information
          </a>
        </div>
      </div>

      <div className="card">
        <img src="..." alt="manchester" />
        <div className="card-body">
          <h3>Manchester</h3>
          <p>
            ......
          </p>
          <a href="https://www.visitmanchester.com" className="btn btn-primary">
            More Information
          </a>
        </div>
      </div>

      <div className="card">
        <img src="..." alt="glasgow" />
        <div className="card-body">
          <h3>Glasgow</h3>
          <p>
            .....
          </p>
          <a
            href="https://www.peoplemakeglasgow.com"
            className="btn btn-primary"
          >
            More Information
          </a>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;