import React from "react";

const TouristInfoCards = () => {
  return (
    <div className="allCards">
      <div className="card">
        <p>
          <strong>LONDON</strong>
        </p>
        <img
          src="https://cdn.londonandpartners.com/-/media/images/london/visit/things-to-do/sightseeing/london-attractions/london-eye/london-eye.jpg?mw=640&hash=C76435E1F43C5E483B25E9730DE0D49BE6861432"
          className="card-img-top"
        />
        <div>
          <br />
          Known throughout the world as the birthplace of the industrial
          revolution, Manchester has a proud history in science, politics,
          music, arts and sport.
        </div>
        <div className="card-body">
          <a href="visitlondon.com" className="btn btn-primary">
            Go London
          </a>
        </div>
      </div>

      <div className="card">
        <p>
          <strong>GLASGOW</strong>
        </p>
        <img
          src="https://peoplemakeglasgow.com/images/Blog/Tomshields/University_of_Glasgow_Cloisters.jpg"
          className="card-img-top"
        />
        <div>
          <br />
          Seven things you didn't know about Glasgow's Highland cattle With over
          90 parks and gardens, it’s no...
        </div>
        <div className="card-body">
          <a href="peoplemakeglasgow.com" className="btn btn-primary">
            Go Glasgow
          </a>
        </div>
      </div>

      <div className="card">
        <p>
          <strong>MANCHESTER</strong>
        </p>
        <img
          src="https://www.visitmanchester.com/imageresizer/?image=%2fdmsimgs%2fManchester_Exterior_1__web_135333318.jpg&action=ProductDetailFullWidth2"
          className="card-img-top"
        />
        <div>
          <br />A trip to the capital wouldn't be complete without seeing the
          top 10 attractions in London. Make sure to tick these top things to
          see in London off your list.
        </div>
        <div className="card-body">
          <a href="visitmanchester.com" className="btn btn-primary">
            Go Manchester
          </a>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
