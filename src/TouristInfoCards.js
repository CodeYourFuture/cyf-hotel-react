import React from "react";

const TouristInfoCards = () => {
  return (
    <div className="row justify-content-around">
      <div className="col-md-3 mb-2 mx-2 mt-2 justify">
        <div className="card w-100">
          <img
            src="https://images.unsplash.com/photo-1571494146906-86de15d3817b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z2xhc2dvd3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
            className="card-img-top"
          />
          <div className="card-body d-flex flex-column align-items-center">
            <h3 className="card-title">Glasgow</h3>
            <p>Something about Glasgow</p>
            <a
              href="https://peoplemakeglasgow.com/"
              className="btn btn-primary"
            >
              Go Glasgow
            </a>
          </div>
        </div>
      </div>
      <div className="col-md-3 mb-2 mx-2 mt-2">
        <div className="card w-100">
          <img
            src="https://images.unsplash.com/photo-1515586838455-8f8f940d6853?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFuY2hlc3RlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
            className="card-img-top"
          />
          <div className="card-body d-flex flex-column align-items-center">
            <h3 className="card-title">Manchester</h3>
            <p>Something about Manchester</p>
            <a
              href="https://www.visitmanchester.com/"
              className="btn btn-primary"
            >
              Go Manchester
            </a>
          </div>
        </div>
      </div>
      <div className="col-md-3 mx-2 mt-2">
        <div className="card w-100">
          <img
            src="https://images.unsplash.com/photo-1513026705753-bc3fffca8bf4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGxvbmRvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
            className="card-img-top"
          />
          <div className="card-body d-flex flex-column align-items-center">
            <h3 className="card-title">London</h3>
            <p>Something about London</p>
            <a href="https://visitlondon.com/" className="btn btn-primary">
              Go London
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
