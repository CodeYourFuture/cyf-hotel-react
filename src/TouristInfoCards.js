import React from "react";

class TouristInfoCards extends React.Component {
  render() {
    return (
      <div>
        <div className="card">
          <img
            src="https://peoplemakeglasgow.com/images/CTA_Images/114605-GCMB-Generic_Homepage_Banner_RR_V1.png"
            className="card-img-top"
            alt=""
          />
          <div className="card-body">
            <a
              href="https://www.peoplemakeglasgow.com"
              className="btn btn-primary"
            >
              Glasgow
            </a>
          </div>
          <div className="card">
            <img
              src="https://assets.simpleview-europe.com/manchester2016/imageresizer/?image=%2Fdbimgs%2FOlympic%20Parade%20nav.jpg&action=FeaturedItems1x1"
              className="card-img-top"
              alt=""
            />
            <div className="card-body">
              <a
                href="https://www.visitmanchester.com"
                className="btn btn-primary"
              >
                Manchester
              </a>
            </div>
          </div>
          <div className="card">
            <img
              src="https://cdn.londonandpartners.com/-/media/images/london/visit/general-london/towerbridgecopyrightvisitlondoncomantoinebuchet.jpg?mw=1920&hash=B6672601055B38B34C592E0160B0445AA063B876"
              className="card-img-top"
              alt=""
            />
            <div className="card-body">
              <a href="https://www.visitlondon.com" className="btn btn-primary">
                London
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TouristInfoCards;
