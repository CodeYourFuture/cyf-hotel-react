import React from "react";

const TouristInfoCards = () => {
  return (
    <div className="row-cards">
      <div className="card" style={{ width: 18 + "rem" }}>
        <img
          src="https://www.saga.co.uk/contentlibrary/saga/publishing/verticals/travel/city-guides/glasgow-cathedral.jpg"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Visit Glasgow</h5>

          <a
            href="https://www.peoplemakeglasgow.com"
            className="btn btn-btn btn-danger"
          >
            More info
          </a>
        </div>
      </div>

      <div className="card" style={{ width: 18 + "rem" }}>
        <img
          src="http://www.whileimyoung.com/wp-content/uploads/2017/11/67264FF2-026B-4012-A345-97E8537DE5A1.jpg"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Visit Manchester</h5>

          <a href="https://www.visitmanchester.com " className="btn btn-danger">
            More info
          </a>
        </div>
      </div>

      <div className="card" style={{ width: 18 + "rem" }}>
        <img
          src="https://previews.123rf.com/images/jovannig/jovannig1412/jovannig141200505/34758322-london-skyline-with-st-paul-cathedral-magnificence-at-sunset-.jpg"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Visit London</h5>

          <a href="https://www.visitlondon.com" className="btn btn-danger">
            More info
          </a>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
