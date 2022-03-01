import React from "react";

const TouristInfoCards = () => {
  return (
    <div className="card-info">
      <div className="card" style={{ width: 18 + "rem" }}>
        <img
          src="https://media.istockphoto.com/photos/university-of-glasgow-main-building-scotland-picture-id848696288?b=1&k=20&m=848696288&s=170667a&w=0&h=aY2G2mo0KjocB0HYYrF7xELt9XjQ0EP39YVio1CHIhQ="
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Glasgow</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a
            href="https://www.sec.co.uk/visitor-information/about-glasgow"
            rel="noopener noreferrer"
            target="_blank"
            className="btn btn-primary"
          >
            More Information
          </a>
        </div>
      </div>

      <div className="card" style={{ width: 18 + "rem" }}>
        <img
          src="https://thumbs.dreamstime.com/b/manchester-city-centre-uk-modern-apartments-both-side-river-irwell-passing-center-58917012.jpg"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Manchester</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a
            href="https://www.manchester.ac.uk/study/experience/student-life/city/"
            rel="noopener noreferrer"
            target="_blank"
            className="btn btn-primary"
          >
            More Information
          </a>
        </div>
      </div>

      <div className="card" style={{ width: 18 + "rem" }}>
        <img
          src="https://cdn.pixabay.com/photo/2017/06/11/18/03/big-ben-2393098__340.jpg"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">London</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a
            href="https://www.visitlondon.com/"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            More Information
          </a>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
