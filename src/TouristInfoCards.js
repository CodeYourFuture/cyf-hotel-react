import React from "react";
const TouristInfoCards = () => {
  return (
    <div className="row">
      <div class="col-sm-4">
        <div className="card">
          <img
            src="https://www.scotsman.com/images-e.jpimedia.uk/imagefetch/http://www.scotsman.com/webimage/Prestige.Item.1.83448117!image/image.jpg"
            className="card-img-top"
          />
          <div className="card-body">
            <a
              href="https://www.peoplemakeglasgow.com"
              className="btn btn-primary"
            >
              Go to Glasgow
            </a>
          </div>
        </div>
      </div>
      <div class="col-sm-4">
        <div className="card">
          <img src="..." className="card-img-top" />
          <div className="card-body">
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
      <div class="col-sm-4">
        <div className="card">
          <img src="..." className="card-img-top" />
          <div className="card-body">
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
