import React from "react";

const TouristInfoCards = () => {
    return (
      <div className="card-deck">
        <div className="card">
          <img
            src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/05/04/16/glasgow-main.jpg?width=1200"
            className="card-img-top"
            alt="Glasgow"
          />
          <div className="card-body">
            <h5 className="card-title">Glasgow</h5>
            <a href="https://peoplemakeglasgow.com" className="btn btn-primary">
              More Information
            </a>
          </div>
        </div>
        <div className="card">
          <img
            src="https://i.guim.co.uk/img/media/5bb754ed0d06b8f8b251fcddfc713c2d4269b386/0_310_6720_4032/master/6720.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=c2ccd9ddeda43dd06639dd405ce0232d"
            className="card-img-top"
            alt="Manchester"
          />
          <div className="card-body">
            <h5 className="card-title">Manchester</h5>
            <a href="https://visitmanchester.com" className="btn btn-primary">
              More Information
            </a>
          </div>
        </div>
        <div className="card">
          <img
            src="https://www.rehabguide.co.uk/wp-content/uploads/2020/08/london-1200x900.jpg"
            className="card-img-top"
            alt="London"
          />
          <div className="card-body">
            <h5 className="card-title">London</h5>
            <a href="https://visitlondon.com" className="btn btn-primary">
              More Information
            </a>
          </div>
        </div>
      </div>
    );
}

export default TouristInfoCards;