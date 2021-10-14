import React from "react";

const TouristInfoCards = () => {
  return (
    <div className="App-cards">
      <div className="container">
        <div className="row">
          <div className="col p-4">
            <div className="card text-center" style={{ width: "18rem" }}>
              <img
                src="https://eu-assets.simpleview-europe.com/manchester2016/imageresizer/?image=%2Fdmsimgs%2Fchristmas-markets-at-albert-square_1__441639496.jpg&action=ProductDetailFullWidth2"
                className="card-img-top img-fluid"
                alt="Manchester"
              />
              <div className="card-body">
                <h5 className="card-title">Manchester</h5>
                <p className="card-text">
                  Youthful, diverse, energetic and bursting with character;
                  Manchester is one of the most exciting places to visit in the
                  UK right now. Known throughout the world as the birthplace of
                  the industrial revolution, Manchester has a proud history in
                  science, politics, music, arts and sport.
                </p>
                <a
                  href="https://www.visitmanchester.com/"
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  More Information
                </a>
              </div>
            </div>
          </div>

          <div className="col p-4">
            <div className="card text-center" style={{ width: "18rem" }}>
              <img
                src="https://london.ac.uk/sites/default/files/styles/max_1300x1300/public/2018-10/london-aerial-cityscape-river-thames_1.jpg?itok=6LenFxuz"
                className="card-img-top img-fluid"
                alt="London"
              />
              <div className="card-body">
                <h5 className="card-title">London</h5>
                <p className="card-text">
                  London, the capital of England and the United Kingdom, is a
                  21st-century city with history stretching back to Roman times.
                  At its centre stand the imposing Houses of Parliament, the
                  iconic ‘Big Ben’ clock tower and Westminster Abbey, site of
                  British monarch coronations.
                </p>
                <a
                  href="https://visitlondon.com/"
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  More Information
                </a>
              </div>
            </div>
          </div>

          <div className="col p-4">
            <div className="card text-center" style={{ width: "18rem" }}>
              <img
                src="https://ichef.bbci.co.uk/news/976/cpsprodpb/1801A/production/_118803389_gettyimages-1211433224.jpg"
                className="card-img-top img-fluid"
                alt="Glasgow"
              />
              <div className="card-body">
                <h5 className="card-title">Glasgow</h5>
                <p className="card-text">
                  Glasgow is a port city on the River Clyde in Scotland's
                  western Lowlands. It's famed for its Victorian and art nouveau
                  architecture. Today it's a home to institutions including the
                  Scottish Opera, Scottish Ballet and National Theatre of
                  Scotland, as well as acclaimed museums.
                </p>
                <a
                  href="https://peoplemakeglasgow.com/"
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  More Information
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
