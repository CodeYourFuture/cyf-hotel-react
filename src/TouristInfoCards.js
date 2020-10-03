import React from "react";

class TouristInfoCards extends React.Component {
  render() {
    return (
      <div className="Cards">
        <div className="card">
          <img
            src="https://peoplemakeglasgow.com/images/CTA_Images/114605-GCMB-Generic_Homepage_Banner_RR_V1.png"
            className="card-img-top"
            alt="Glasgow"
          />
          <div className="card-body">
            <a
              href="https://peoplemakeglasgow.com/"
              className="btn btn-primary"
            >
              Glasgow
            </a>
          </div>
        </div>

        <div className="card">
          <img
            src="https://assets.simpleview-europe.com/manchester2016/imageresizer/?image=%2Fdbimgs%2FOlympic%20Parade%20nav.jpg&action=FeaturedItems3x2"
            className="card-img-top"
            alt="Manchester"
          />
          <div className="card-body">
            <a
              href="https://www.visitmanchester.com/"
              className="btn btn-primary"
            >
              Manchester
            </a>
          </div>
        </div>

        <div className="card">
          <img
            src="https://cdn.londonandpartners.com/l-and-p/assets/travel-trade/44946-310x174.jpg"
            className="card-img-top"
            alt="London"
          />
          <div className="card-body">
            <a href="https://www.visitlondon.com" className="btn btn-primary">
              London
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default TouristInfoCards;
