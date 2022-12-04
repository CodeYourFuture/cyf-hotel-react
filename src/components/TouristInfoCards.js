import React from "react";

const TouristInfoCards = () => {
  return (
    <div className="card-container">
      <Card
        link="https://peoplemakeglasgow.com"
        image="https://media.cntraveler.com/photos/5ad4ece4379a3a44feb968b6/master/w_3604,h_2574,c_limit/Colosseum-GettyImages-537714366.jpg"
        name="Glasgow"
        text="this is a default text"
      />

      <Card
        link="https://visitmanchester.com"
        image="https://thumbs.dreamstime.com/b/manchester-canal-uk-england-skyline-shot-deansgate-108118828.jpg"
        name="Manchester"
        text="this is a default text"
      />

      <Card
        link="https://visitlondon.com"
        image="https://media.istockphoto.com/id/1294454411/photo/london-symbols-with-big-ben-double-decker-buses-and-red-phone-booth-in-england-uk.jpg?b=1&s=170667a&w=0&k=20&c=SR5FBt8VvpZEOIxZcTmoEf9XxU0oiSnbobD3E6ZB358="
        name="London"
        text="this is a default text"
      />
    </div>
  );
  //   <Card info={{
  //         link: '',
  //         image: '',
  //     }}
  //   />;
};

// define a props for a card
const Card = props => {
  return (
    <section>
      <div className="card">
        <img src={props.image} alt="city image" className="card-image" />
        <div className="card-detail">
          <h4>{props.name}</h4>
          <p>{props.text}</p>
        </div>
        <div className="card-button">
          <a href={props.link}>
            <button>more info</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TouristInfoCards;
