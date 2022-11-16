import React from "react";
import "./App.css";

const Glasgow = () => {
  return (
    <div className="card">
      <img
        src="https://images.unsplash.com/photo-1571494146906-86de15d3817b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1088&q=80"
        alt=""
        className="card-img-top"
      />
      <h2 className="Card-Title">Glasgow</h2>
      <p className="Card-Summary">
        Glasgow is the most populous city in Scotland and the fourth-most
        populous city in the United Kingdom, as well as being the 27th largest
        city by population in Europe.In 2020, it had an estimated population of
        635,640.{" "}
      </p>
      <div className="card-body">
        <a
          href="https://peoplemakeglasgow.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          More Information
        </a>
      </div>
    </div>
  );
};

const Manchester = () => {
  return (
    <div className="card">
      <img
        src="https://images.unsplash.com/photo-1515586838455-8f8f940d6853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuY2hlc3RlciUyMHVrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        alt=""
        className="card-img-top"
      />
      <h2 className="Card-Title">Manchester</h2>
      <p className="Card-Summary">
        Manchester is a city in Greater Manchester, England. It had a population
        of 552,000 in 2021. It is bordered by the Cheshire Plain to the south,
        the Pennines to the north and east, and the neighbouring city of Salford
        to the west.{" "}
      </p>
      <div className="card-body">
        <a
          href="https://visitmanchester.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          More Information
        </a>
      </div>
    </div>
  );
};

const London = () => {
  return (
    <div className="card">
      <img
        src="https://images.unsplash.com/photo-1602521519774-a530743d6ff2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8TG9uZG9uJTIwdWt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        alt=""
        className="card-img-top"
      />
      <h2 className="Card-Title">London</h2>
      <p className="Card-Summary">
        London is the capital and largest city of England and the United
        Kingdom, with a population of just under 9 million. It stands on the
        River Thames in south-east England at the head of a 50-mile (80 km)
        estuary down to the North Sea, and has been a major settlement for two
        millennia.
      </p>
      <div className="card-body">
        <a
          href="https://visitlondon.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          More Information
        </a>
      </div>
    </div>
  );
};

const TouristInfoCards = () => {
  return (
    <div className="InfoCards">
      <Glasgow />
      <Manchester />
      <London />
    </div>
  );
};

export default TouristInfoCards;
