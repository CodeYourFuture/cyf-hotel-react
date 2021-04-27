import React from "react";

const TouristInfoCards = () => {
  return (
    <div>
      <div className="card">
        <img
          src="https://s19623.pcdn.co/wp-content/uploads/2015/10/A-weekend-in-Glasgow-48-hour-itinerary.jpg"
          className="card-img-top"
        />
        <div className="card-body">
          <a href="https://peoplemakeglasgow.com/" className="btn btn-primary">
            Glasgow
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://www-file.huawei.com/-/media/corporate/local-site/uk/image/2019/manchester-1.jpg?la=en-gb"
          className="card-img-top"
        />
        <div className="card-body">
          <a href="visitmanchester.com" className="btn btn-primary">
            Manchester
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://www.cityam.com/wp-content/uploads/2020/02/London_Tower_Bridge_City.jpg"
          className="card-img-top"
        />
        <div className="card-body">
          <a href="visitlondon.com" className="btn btn-primary">
            London
          </a>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
