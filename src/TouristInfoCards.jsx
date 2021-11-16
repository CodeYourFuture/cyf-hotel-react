import React from "react";
const TouristInfoCards = () => {
  return (
    <div className="card-container">
      <div className="card">
        <img
          src="https://peoplemakeglasgow.com/imager/general/44830/East-End-Glasgow-Cathedral-Header_363498fd50542583ec55608561258317.jpg"
          className="card-img-top"
          alt="Glasgow"
        />
        <div className="card-body">
          <h4>Glasgow</h4>
          <p>
            Glasgow is Scotland's largest city, and it forms an independent
            council area that lies entirely within the historic county of
            Lanarkshire. The city occupies much of the lower Clyde valley, and
            its suburbs extend into surrounding districts.
          </p>
          {/* for some reason these links just reload the page */}
          <a
            href="https://peoplemakeglasgow.com/"
            className="tourist-info-card"
            target="_blank"
          >
            Visit peoplemakeglasgow.com
          </a>
        </div>
      </div>

      <div className="card">
        <img
          src="https://www.manchestercentral.co.uk/sites/default/files/styles/one_one_large/public/2021-06/city.png?itok=1MlUvL--"
          className="card-img-top"
          alt="Manchester"
        />
        <div className="card-body">
          <h4>Manchester</h4>
          <p>
            Manchester is the nucleus of the largest metropolitan area in the
            north of England, and it remains an important regional city, but it
            has lost the extraordinary vitality and unique influence that put it
            at the forefront of the Industrial Revolution.
          </p>
          <a
            href="https://www.visitmanchester.com/"
            className="tourist-info-card"
            target="_blank"
          >
            Visit visitmanchester.com
          </a>
        </div>
      </div>

      <div className="card">
        <img
          src="https://www.history.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTYyNDg1MjE3MTI1Mjc5Mzk4/topic-london-gettyimages-760251843-promo.jpg"
          className="card-img-top"
          alt="London"
        />
        <div className="card-body">
          <h4>London</h4>
          <p>
            London is the capital city of the United Kingdom. It is the U.K.'s
            largest metropolis and its economic, transportation, and cultural
            centre. London is also among the oldest of the world's great cities,
            with its history spanning nearly two millennia.
          </p>
          <a
            href="https://visitlondon.com/"
            className="tourist-info-card"
            target="_blank"
          >
            Visit visitlondon.com
          </a>
        </div>
      </div>
    </div>
  );
};
export default TouristInfoCards;
