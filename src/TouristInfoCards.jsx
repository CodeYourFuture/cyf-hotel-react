import React from "react";

// TouristInfoCards` which shows 3 _cards_. A card is a common user interface pattern with an image at the top and some related text underneath. The cards must link to `peoplemakeglasgow.com`, `visitmanchester.com` and `visitlondon.com`. The cards should contain the name of the city and an image of the city.

function TouristInfoCards() {
  return (
    <div className="card-deck">
      <div className="card" style={{ width: "18rem" }}>
        <img
          src="https://peoplemakeglasgow.com/imager/general/76609/West-end-Kelvingrove-Art-Gallery-Content-Block_11e6b377409ad0b26f1269c19e5bbf18.jpg"
          className="card-img-top"
          alt="Glasgow"
        />
        <div className="card-body">
          <h5 className="card-title">Eco city break in Glasgow</h5>
          <p className="card-text" />
          <a href="https://peoplemakeglasgow.com/" className="btn btn-primary">
            Go Glasgow
          </a>
        </div>
      </div>
      <div className="card" style={{ width: "18rem" }}>
        <img
          src="https://eu-assets.simpleview-europe.com/manchester2016/imageresizer/?image=%2Fdmsimgs%2FHome_DMS_1600199616.jpg&action=ProductDetailFullWidth2"
          className="card-img-top"
          alt="Manchester"
        />
        <div className="card-body">
          <h5 className="card-title">Visit Manchester</h5>
          <p className="card-text" />
          <a
            href="https://www.visitmanchester.com/"
            className="btn btn-primary"
          >
            Go Manchester
          </a>
        </div>
      </div>
      <div className="card" style={{ width: "18rem" }}>
        <img
          src="https://cdn.londonandpartners.com/-/media/images/london/visit/things-to-do/sightseeing/london-attractions/london-eye/lastminutelondoneye640x360.jpg?mw=640&hash=369C7DBB3A75160763BFD8572303D124F316A65C"
          className="card-img-top"
          alt="London Eye"
        />
        <div className="card-body">
          <h5 className="card-title">Discover the best of London</h5>
          <p className="card-text" />
          <a href="https://visitlondon.com/" className="btn btn-primary">
            Go London
          </a>
        </div>
      </div>
    </div>
  );
}

export default TouristInfoCards;
