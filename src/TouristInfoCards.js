import React from "react";

const TouristInfoCards = () => {
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div className="col ">
          <div className="card shadow">
            <img
              src="https://images.unsplash.com/photo-1598476959236-fd5b8e15e64c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80"
              className="card-img-top"
              alt="Glasgow city"
            />
            <div className="card-body">
              <h5 className="card-title">Glasgow</h5>
              <p className="card-title">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a
                href="https://www.peoplemakeglasgow.com"
                className="btn btn-primary shadow-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Go Glasgow
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow">
            <img
              src="https://images.unsplash.com/photo-1515586838455-8f8f940d6853?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1093&q=80"
              className="card-img-top"
              alt="Manchester city"
            />
            <div className="card-body">
              <h5 className="card-title">Manchester</h5>
              <p className="card-title">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a
                href="https://www.visitmanchester.com"
                className="btn btn-primary shadow-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Go Manchester
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow hover">
            <img
              src="https://images.unsplash.com/photo-1476958526483-36efcaa80b1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
              className="card-img-top"
              alt="London"
            />
            <div className="card-body">
              <h5 className="card-title">London</h5>
              <p className="card-title">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a
                href="https://www.visitlondon.com"
                className="btn btn-primary shadow-sm "
                target="_blank"
                rel="noopener noreferrer"
              >
                Go London
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
