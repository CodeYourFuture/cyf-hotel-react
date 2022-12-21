import React from "react";

const TouristInfoCards = () => {
  return (
    <div className="card-container">
      <Card
        link="https://peoplemakeglasgow.com"
        image="https://media.cntraveler.com/photos/5ad4ece4379a3a44feb968b6/master/w_3604,h_2574,c_limit/Colosseum-GettyImages-537714366.jpg"
        name="Glasgow"
        text="Glasgow is the most populous city in Scotland and the fourth-most populous city in the United Kingdom, as well as being the 27th largest city by population in Europe.Glasgow has the largest economy."
      />

      <Card
        link="https://visitmanchester.com"
        image="https://thumbs.dreamstime.com/b/manchester-canal-uk-england-skyline-shot-deansgate-108118828.jpg"
        name="Manchester"
        text="Manchester  is a city in Greater Manchester, England.It is bordered by the Cheshire Plain to the south, the Pennines to the north and east, and the neighbouring city of Salford to the west."
      />

      <Card
        link="https://visitlondon.com"
        image="https://media.istockphoto.com/id/1294454411/photo/london-symbols-with-big-ben-double-decker-buses-and-red-phone-booth-in-england-uk.jpg?b=1&s=170667a&w=0&k=20&c=SR5FBt8VvpZEOIxZcTmoEf9XxU0oiSnbobD3E6ZB358="
        name="London"
        text="London is the capital and largest city of England and the United Kingdom, with a population of just under 9 million.It stands on the River Thames in south-east England ."
      />
    </div>
  );
};

// define a props for a card
function Card({ image, name, text, link }) {
  return (
    <section>
      <div className="card">
        <img src={image} alt="" className="card-image" />
        <div className="card-detail">
          <h4>{name}</h4>
          <p>{text}</p>
        </div>
        <div className="card-button">
          <a href={link}>
            <button>more info</button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default TouristInfoCards;
