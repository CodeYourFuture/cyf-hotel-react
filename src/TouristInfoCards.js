import React from "react";
import "./TouristInfoCards.css";

const TouristInfoCards = () => {
  return (
    <div className="row p-3">
      <div className="card bg-dark text-white col">
        <img
          src="img/london.jpg"
          alt="london big ben"
          className="card-img-top rounded-circle"
        />
        <div className="card-body">
          <h1 className="card-title">LONDON</h1>
          <p className="card-text">
            Welcome to London! Discover the best of UK's capitol this summer!
            Find things to do in London, from iconic sightseeing spots and
            fun-filled days out to top restaurants, theatre and unmissable
            London events. See the Change of The Guards at the Royal Buckingham
            Palace or take a ride on the London Eye and see all the view from
            the top.
          </p>
          <a href="visitlondon.com" className="btn btn-info btn-lg mt-5">
            Visit London
          </a>
        </div>
      </div>

      <div className="card bg-dark text-white col">
        <img
          src="img/manchester.jpg"
          alt="peoplelovemanchester"
          className="card-img-top rounded-circle"
        />
        <div className="card-body">
          <h1 className="card-title">MANCHESTER</h1>
          <p className="card-text">
            People Love Manchester! Discover university city of Manchester! Find
            the vibrant students' spirit of city of Manchester, from iconic
            sightseeing spots and fun-filled days out to top restaurants,
            theatre and unmissable events. See the new and old architecture of
            Manchester and enjoy a pint in one of the old school english pubs
            after a long day!
          </p>
          <a href="visitmanchester.com" className="btn btn-info btn-lg mt-5">
            Visit Manchester
          </a>
        </div>
      </div>

      <div className="card bg-dark text-white col">
        <img
          src="img/glasgow.jpg"
          alt="glasgow view"
          className="card-img-top rounded-circle"
        />
        <div className="card-body">
          <h1 className="card-title">GLASGOW</h1>
          <p className="card-text">
            People Make Glasgow! It's not just a saying! Find the wonderful
            community of Glasgow people with their peculiar Glaswegian dialect
            and sense of humor! Take a pub stroll and immerse yourself in the
            outstanding atmosphere of Glasgow. Have a Munchy Box 'Glasgow salad'
            or Lorne Sausage and feel the goodness of Glasgow delicacies! Best
            time ever guaranteed!
          </p>
          <a href="peoplemakeglasgow.com" className="btn btn-info btn-lg mt-4">
            Visit Glasgow
          </a>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
