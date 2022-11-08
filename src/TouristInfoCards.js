import React from "react";

const Card = props => {
  return (
    <div className="card shadow-lg mt-5 text-center">
      <img src={props.img} />
      <div className="card-body">
        <h2 className="card-title">{props.name}</h2>
        <p>{props.dis}</p>
        <a href={props.link} className="btn btn-primary" target="_blank">
          More Info
        </a>
      </div>
    </div>
  );
};

const TouristInfoCards = () => {
  return (
    <div className="container pt-4">
      <div className="row">
        <div className="col-4">
          <Card
            img="https://images.unsplash.com/photo-1531152127291-ea24c3b2a1da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z2xhc2dvd3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            name="Glasgow"
            dis="Glasgow is a port city on the River Clyde in Scotland's western Lowlands"
            link="https://peoplemakeglasgow.com"
          />
        </div>
        <div className="col-4">
          <Card
            img="https://images.unsplash.com/photo-1494522855154-9297ac14b55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG1hY2hlc3RlciUyMGNpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            name="Manchester"
            dis="Manchester is a major city in the northwest of England with a rich industrial heritage."
            link="https://visitmanchester.com"
          />
        </div>
        <div className="col-4">
          <Card
            img="https://images.unsplash.com/photo-1486299267070-83823f5448dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bG9uZG9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            name="London"
            dis="Discover your ultimate guide to London. From the best activities in the city to top restaurants, bars and hotels, explore what's on in London today."
            link="https://visitlondon.com"
          />
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
