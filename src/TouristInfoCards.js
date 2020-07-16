import React from "react";

const TouristInfoCards = () => {
  return (
    <div className="wrapper">
      <div className="card">
        <h2>Glasgow</h2>
        <img
          src="https://tse4.mm.bing.net/th?id=OIP._rs8wpWCjfVYpWhIofP5zAHaHa&pid=Api&P=0&w=300&h=300"
          className="card-img-top"
        />
        <div className="card-body">
          <a href="peoplemakeglasgow.com" className="btn btn-primary">
            Go To Glasgow
          </a>
          <p>
            Glasgow is also known for the Glasgow patter, a distinct dialect of
            the Scots language that is noted for being difficult to understand
            by those from outside the city. Glasgow grew from a small rural
            settlement on the River Clyde to become the largest seaport in
            Scotland, and tenth largest by tonnage in Britain.
          </p>
        </div>
      </div>
      <div className="card">
        <h2>Manchester</h2>
        <img
          src="https://tse2.mm.bing.net/th?id=OIP.Wr3XmXMX7u90i6XO3nU3QwHaEo&pid=Api&P=0&w=262&h=164"
          className="card-img-top"
        />
        <div className="card-body">
          <a href="visitmanchester.com" className="btn btn-primary">
            Go To Manchester
          </a>
          <p>
            Manchester city centre is jam-packed with unique and eclectic
            restaurants, bars, shops, museums, galleries, hotels and places to
            stay whilst the surrounding Greater Manchester boroughs offer a
            patch-work of visitor experiences including quaint market towns,
            traditional pubs and beautiful green spaces and waterways to be
            explored on foot or bike . The city region is easily navigated
          </p>
        </div>
      </div>
      <div className="card">
        <h2>London</h2>
        <img
          src="https://tse2.mm.bing.net/th?id=OIP.a6sN4drU-8Bb9M23sZg62wHaEK&pid=Api&P=0&w=319&h=180"
          className="card-img-top"
        />
        <div className="card-body">
          <a href="visitlondon.com" className="btn btn-primary">
            Go To London
          </a>
          <p>
            London is the capital and largest city of England and the United
            Kingdom. Standing on the River Thames in the south-east of England,
            at the head of its 50-mile (80 km) estuary leading to the North Sea,
            London has been a major settlement for two millennia
          </p>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
