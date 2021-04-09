import React from "react";
// import images from './src/images/Glasgow.jpg';

const TouristInfoCards = () => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src="https://images.unsplash.com/photo-1571494146906-86de15d3817b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1280&q=80"
        className="card-img-top"
        alt=""
      />
      <div className="card-body">
        <h5 className="card-title">Glasgow</h5>
        <p className="card-text">
          Whilst you stay at home use visitlondon.com to experience Glasgow
          virtually #GLAmissesyou
        </p>
        <a
          href="http://www.peoplemakeglasgow.com"
          className="btn btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go Glasgow
        </a>
      </div>
      <img
        src="https://images.unsplash.com/photo-1613505151299-3a1ab3dc4e44?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2556&q=80"
        className="card-img-top"
        alt=""
      />
      <div className="card-body">
        <h5 className="card-title">London</h5>
        <p className="card-text">
          Whilst you stay at home use visitlondon.com to experience London
          virtually #LDNmissesyou
        </p>
        <a
          href="http://www.visitlondon.com"
          className="btn btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go London
        </a>
      </div>
      <img
        src="https://images.unsplash.com/photo-1515586838455-8f8f940d6853?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=984&q=80"
        className="card-img-top"
        alt=""
      />
      <div className="card-body">
        <h5 className="card-title">Manchester</h5>
        <p className="card-text">
          Whilst you stay at home use visitmanchester.com to experience
          Manchester virtually #MCRmissesyou
        </p>
        <a
          href="http://www.visitmanchester.com"
          className="btn btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go Manchester
        </a>
      </div>
    </div>
  );
};

export default TouristInfoCards;
