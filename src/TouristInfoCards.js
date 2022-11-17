import React from "react";

const TouristInfoCards = () => {
  return (
    <div className="cards">
      <div className="card">
        <img
          src="https://cdn.londonandpartners.com/-/media/images/london/visit/things-to-do/sightseeing/london-attractions/tower-bridge/tower-bridge-shutterstock-1920x582.jpg?mw=1920&hash=078DDB24AC457E2D8F231FC3E0F7EC55A00C88E3"
          className="card-img-top"
          alt=""
        />
        <div className="card-body">
          <h1>London</h1>
          <p>Lorem ipsum</p>
          <a href="visitlondon.com" className="btn btn-primary">
            More Information
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://images.unsplash.com/photo-1515586838455-8f8f940d6853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFuY2hlc3RlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
          className="card-img-top"
          alt=""
        />
        <div className="card-body">
          <h1>manchester</h1>
          <p>Lorem ipsum</p>
          <a href="visitmanchester.com" className="btn btn-primary">
            More Information
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://www.visitbritain.com/sites/default/files/consumer/paragraphs-bundles/image-header-with-text/glasgow_clyde_arc_vb34161123.jpg"
          className="card-img-top"
          alt=""
        />
        <div className="card-body">
          <h1>Glasgow</h1>
          <p>lorem ipsum</p>
          <a href="peoplemakeglasgow.com" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
