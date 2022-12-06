import React from "react";

const TouristlnfoCards = () => {
  return (
    <div className="main-card">
      <div className="card">
        <img
          className="main-pic"
          src="https://images.unsplash.com/photo-1585943764912-9eb79c420255?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbmNoZXN0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
        />
        <div className="card-body">
          <a href="#" className="btn btn-primary">
            Go Manchester
          </a>
        </div>
      </div>

      <div className="card">
        <img
          className="main-pic"
          src="https://images.unsplash.com/photo-1633828748381-7fd633580a38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z2xhc2dvdyUyMGNpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
        />
        <div className="card-body">
          <a href="#" className="btn btn-primary">
            Go Glasgow
          </a>
        </div>
      </div>
      <div className="card">
        <img
          className="main-pic"
          src="https://images.unsplash.com/photo-1534800891164-a1d96b5114e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bG9uZG9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
        />
        <div className="card-body">
          <a href="#" className="btn btn-primary">
            Go London
          </a>
        </div>
      </div>
    </div>
  );
};

export default TouristlnfoCards;
