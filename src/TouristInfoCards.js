import React from "react";

function TouristInfoCards() {
  return (
    <div className="cards">
      <TouristInfoCard
        img="https://images.unsplash.com/photo-1531152369337-1d0b0b9ef20d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        link="https://peoplemakeglasgow.com"
        name="Visit Glasgow"
      />
      <TouristInfoCard
        img="https://images.unsplash.com/photo-1515586838455-8f8f940d6853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1284&q=80"
        link="https://visitmanchester.com"
        name="Visit Manchester"
      />
      <TouristInfoCard
        img="https://images.unsplash.com/photo-1505761671935-60b3a7427bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        link="https://visitlondon.com"
        name="Visit London"
      />
    </div>
  );
}

function TouristInfoCard(props) {
  return (
    <div className="card">
      <img src={props.img} alt={props.name} className="card-img-top" />
      <div className="card-body">
        <a href={props.link} className="btn btn-primary">
          {props.name}
        </a>
      </div>
    </div>
  );
}
export default TouristInfoCards;
