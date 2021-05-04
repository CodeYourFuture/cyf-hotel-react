import React from "react";

const TouristInfoCards = () => {
  return (
    <div>
      <div className="card">
        <img
          src="https://cdn.pixabay.com/photo/2020/01/06/22/59/glasgow-4746491_960_720.jpg"
          className="card-img-top"
        />
        <div className="card-body">
          <a href="https://peoplemakeglasgow.com" className="btn btn-primary">
            Glasgow
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://cdn.pixabay.com/photo/2017/07/13/19/50/manchester-2501693_960_720.jpg"
          className="card-img-top"
        />
        <div className="card-body">
          <a href="https://visitmanchester.com" className="btn btn-primary">
            Manchester
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://cdn.pixabay.com/photo/2014/11/13/23/34/london-530055_960_720.jpg"
          className="card-img-top"
        />
        <div className="card-body">
          <a href="https://visitlondon.com" className="btn btn-primary">
            London
          </a>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
