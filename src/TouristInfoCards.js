import React from "react";

const TouristInfoCards = () => {
  return (
    <div className="card-container">
      <div className="card">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Dawn_over_Glasgow_%2848659596342%29.jpg/1024px-Dawn_over_Glasgow_%2848659596342%29.jpg"
          className="card-img-top"
          alt=""
          title="By Ian Dick from Glasgow, UK"
        />
        <div className="card-body">
          <h5 className="card-title">Glasgow</h5>
          <p className="card-text">
            Visit vibrant Glasgow, Glasgow is fantastic, great night life, the
            people are fantastic, it's a big city but easy to get around, one of
            the best shopping cities in the UK
          </p>
          <a className="btn btn-primary" href="https://peoplemakeglasgow.com/">
            See more
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://i2-prod.manchestereveningnews.co.uk/incoming/article17428679.ece/ALTERNATES/s810/1_MWOCT19-121051JPG.jpg"
          className="card-img-top"
          alt=""
        />
        <div className="card-body">
          <h5 className="card-title">Manchester</h5>
          <p className="card-text">
            Visit lively Manchester.Manchester is a lively city brimming with
            character, whether it’s the Industrial Revolution or a musical
            revolution, Manchester is at the heart of it. From shopping at the
            Trafford Centre to watching football at Old Trafford, there’s
            something for everyone.
          </p>
          <a
            className="btn btn-primary"
            href="https://www.visitmanchester.com/"
          >
            See more
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://london.ac.uk/sites/default/files/styles/promo_large/public/2018-10/london-aerial-cityscape-river-thames_1.jpg?itok=BMaDUhjp"
          className="card-img-top"
          alt=""
        />
        <div className="card-body">
          <h5 className="card-title">London</h5>
          <p className="card-text">
            Visit historic London. With the diversity, the vibrancy, the sheer
            noise, the sense of global connectivity, the pace, the exuberance
            and so much more.
          </p>
          <a className="btn btn-primary" href="https://www.visitlondon.com/">
            See more
          </a>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
