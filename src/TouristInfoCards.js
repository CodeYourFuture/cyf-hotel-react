import React from "react";

function TouristInfoCards() {
  return (
    <div className="card-wrapper">
      <div className="card">
        <img
          src="https://cdn.pixabay.com/photo/2020/01/06/22/59/glasgow-4746491__340.jpg"
          className="card-img-top"
          alt=""
        />
        <h3>Glasgow</h3>
        <p className="text-justify">
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged
        </p>
        <div className="card-body">
          <a href="#" className="btn btn-secondary">
            peoplemakeglasgow.com
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://cdn.pixabay.com/photo/2018/11/16/11/23/raining-3819220__340.jpg"
          alt=""
          className="card-img-top"
        />
        <h3>Manchester</h3>
        <p className="text-justify">
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged
        </p>
        <div className="card-body">
          <a href="#" className="btn btn-secondary">
            visitmanchester.com
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://cdn.pixabay.com/photo/2017/06/11/18/03/big-ben-2393098_960_720.jpg"
          className="card-img-top"
          alt=""
        />
        <h3>London</h3>
        <p className="text-justify">
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged
        </p>
        <div className="card-body">
          <a href="#" className="btn btn-secondary">
            visitlondon.com
          </a>
        </div>
      </div>
    </div>
  );
}

export default TouristInfoCards;
