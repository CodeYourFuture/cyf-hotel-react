import React from "react";
import "./App.css";
const TouristInfoCards = () => {
  return (
    <div id="allcards">
      <div className="card">
        <img src="/glasgow.jpg" className="card-img-top" alt="" />
        <div className="card-body">
          <h4>Glasgow</h4>
          <p>
            Welcome to London! Discover the best of London with Visit London,
            the official guide to England’s exciting capital. Find things to do
            in London, from iconic sightseeing spots and fun-filled days out to
            top restaurants, theatre and unmissable London events. If you’re not
            able to visit just yet, plan ahead to make the most of your next
            visit.
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

      <div className="card">
        <img src="/manchester.jpg" className="card-img-top" alt="" />
        <div className="card-body">
          <h4>Manchester</h4>
          <p>
            Welcome to London! Discover the best of London with Visit London,
            the official guide to England’s exciting capital. Find things to do
            in London, from iconic sightseeing spots and fun-filled days out to
            top restaurants, theatre and unmissable London events. If you’re not
            able to visit just yet, plan ahead to make the most of your next
            visit.
          </p>
          <a
            href="https://www.visitmanchester.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            More Information
          </a>
        </div>
      </div>

      <div className="card">
        <img src="/london.jpg" className="card-img-top" alt="" />
        <div className="card-body">
          <h4>London</h4>
          <p>
            Welcome to London! Discover the best of London with Visit London,
            the official guide to England’s exciting capital. Find things to do
            in London, from iconic sightseeing spots and fun-filled days out to
            top restaurants, theatre and unmissable London events. If you’re not
            able to visit just yet, plan ahead to make the most of your next
            visit.
          </p>
          <a
            href="https://visitlondon.com/"
            target="_blank"
            className="btn btn-primary"
            rel="noopener noreferrer"
          >
            More Information
          </a>
        </div>
      </div>
    </div>
  );
};
export default TouristInfoCards;
