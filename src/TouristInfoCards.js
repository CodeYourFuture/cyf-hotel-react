import React from "react";

const TouristInfoCards = () => {
  return (
    <div className="card-wrapper">
      <div className="card">
        <div className="card-body">
          <img
            src="https://lp-cms-production.imgix.net/features/2018/04/500pxRF_55425108-dc5c35951978.jpg"
            className="card-img-top"
          />
          <h1>London</h1>
          <p>
            Welcome to London! Discover the best of London with Visit London,
            the official guide to England’s exciting capital. Find things to do
            in London, from iconic sightseeing spots and fun-filled days out to
            top restaurants, theatre and unmissable London events. If you’re not
            able to visit just yet, plan ahead to make the most of your next
            visit.
          </p>
          <a href="http://visitlondon.com" className="btn btn-primary">
            More Information
          </a>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <img
            src="https://media.timeout.com/images/105400989/750/422/image.jpg"
            className="card-img-top"
          />
          <h1>Glasgow</h1>
          <p>
            Glasgow topped Condé Nast Traveller’s list of best cities to visit
            in 2021 and if that’s not enough to make you want to book a break,
            here are some more great reasons to visit.
          </p>
          <a href="http://peoplemakeglasgow.com" className="btn btn-primary">
            More Information
          </a>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <img
            src="https://www.visitbritain.com/sites/default/files/consumer/paragraphs-bundles/image-header-with-text/manchester_town_hall_ve13463_1200x600_0_1_0_0.jpg"
            className="card-img-top"
          />
          <h1>Manchester</h1>
          <p>
            Known throughout the world as the birthplace of the industrial
            revolution, Manchester has a proud history in science, politics,
            music, arts and sport. And today the city combines this heritage
            with a progressive vision to be a city that delivers surprise and
            delight in equal measures.
          </p>
          <a href="http://visitmanchester.com" className="btn btn-primary">
            More Information
          </a>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
