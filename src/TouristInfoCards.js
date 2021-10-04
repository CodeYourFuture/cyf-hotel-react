import React from "react";

const TouristInfoCards = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="card">
            <img src="" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-title">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a
                href="https://www.peoplemakeglasgow.com"
                className="btn btn-primary"
                target="_blank"
              >
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="..." className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-title">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a
                href="https://www.visitmanchester.com"
                className="btn btn-primary"
                target="_blank"
              >
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="..." className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-title">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a
                href="https://www.visitlondon.com"
                className="btn btn-primary"
                target="_blank"
              >
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
