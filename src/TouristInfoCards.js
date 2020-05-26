import React from "react";
const TouristInfoCards = () => {
  return (
    <div className="row">
      <div className="col-sm-4">
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
          <img
            src="https://www.visitmanchester.com/imageresizer/?image=%2fdmsimgs%2fchristmas-markets-at-albert-square_1__441639496.jpg&action=ProductDetailFullWidth2"
            className="card-img-top"
          />
          <div className="card-body">
            <a
              href="https://www.visitmanchester.com"
              className="btn btn-primary"
            >
              Go to Manchester
            </a>
          </div>
        </div>
      </div>
      <div class="col-sm-4">
        <div className="card">
          <img
            src="https://cdn.londonandpartners.com/visit/general-london/areas/river/76709-640x360-houses-of-parliament-and-london-eye-on-thames-from-above-640.jpg"
            className="card-img-top"
          />
          <div className="card-body">
            <a href="https://www.visitlondon.com" className="btn btn-primary">
              Go to London
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
