import React from "react";

const TouristInfoCards = () => {
  return (
    <div className="wrap-card">
      <div className="card">
        <img
          src="https://images.unsplash.com/photo-1621519604512-85ea63c15ca2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=779&q=80"
          className="card-img-top"
          width={500}
          height={300}
        />
        <h2>Glasgow</h2>
        <p>
          Image result for glasgow about Glasgow is Scotland's largest city, and
          it forms an independent council area that lies entirely within the
          historic county of Lanarkshire. The city occupies much of the lower
          Clyde valley, and its suburbs extend into surrounding districts. Most
          important commercial and administrative buildings lie north of the
          Clyde
        </p>
        <a href="peoplemakeglasgow.com" className="btn btn-primary">
          Read More
        </a>
      </div>
      <div className="card">
        <img
          src="https://images.unsplash.com/photo-1631473130317-9cd893da371c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          className="card-img-top"
          width={500}
          height={200}
        />
        <h2>Manchester</h2>
        <p>
          Manchester, city and metropolitan borough in the metropolitan county
          of Greater Manchester urban county, northwestern England.Youthful,
          diverse, energetic and bursting with character; Manchester is one of
          the most exciting places to visit in the UK right now where everybody
          and anybody is very warmly welcomed.
        </p>
        <a href="visitmanchester.com" className="btn btn-primary">
          Read more
        </a>
      </div>
      <div className="card">
        <img
          src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          className="card-img-top"
          width={500}
          height={200}
        />
        <h2>London</h2>
        <p>
          London, city, capital of the United Kingdom. It is among the oldest of
          the world’s great cities—its history spanning nearly two millennia—and
          one of the most cosmopolitan. By far Britain’s largest metropolis, it
          is also the country’s economic, transportation, and cultural centre.
          This great world city is far more than just the capital of the United
          Kingdom of Great Britain and Northern Ireland.
        </p>
        <a href="visitlondon.com" className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
};

export default TouristInfoCards;
