import React from "react";

class TouristInfoCards extends React.Component {
  render() {
    return (
      <div>
        <div className="card">
          <img src="" className="card-img-top" />
          <div className="card-body">
            <a
              href="https://www.peoplemakeglasgow.com"
              className="btn btn-primary"
            >
              Glasgow
            </a>
          </div>
          <div className="card">
            <img src="" className="card-img-top" />
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
            <img src="" className="card-img-top" />
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
