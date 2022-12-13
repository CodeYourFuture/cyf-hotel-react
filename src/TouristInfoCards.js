import React from "react";

const HotelCard = props => {
  return (
    <div className="card">
      <img src={props.image} className="card-img-top" />
      <div className="card-body">
        <h2>{props.name}</h2>
        <p>{props.text}</p>
      </div>
      <button a href={props.link} className="btn btn-primary">
        Go somewhere
      </button>
    </div>
  );
};

const TouristInfoCards = () => {
  return (
    <div>
      <HotelCard
        name={"Manchester"}
        text={
          "Manchester city centre will be getting into the Christmas spirit with its series of Festive Sundays - six consecutive Sundays of sparkling street performances to delight and surprise families in the run up to Christmas 2022."
        }
        link="https://visitmanchester.com"
        image="https://thumbs.dreamstime.com/b/manchester-canal-uk-england-skyline-shot-deansgate-108118828.jpg"
      />
      <HotelCard
        name={"London"}
        text={
          "Welcome to London! Discover the best of London with Visit London, the official guide to England’s exciting capital. Find things to do in London, from iconic sightseeing spots and fun-filled days out to top restaurants, theatre and unmissable London events."
        }
        link="https://visitlondon.com"
        image="https://media.istockphoto.com/id/1294454411/photo/london-symbols-with-big-ben-double-decker-buses-and-red-phone-booth-in-england-uk.jpg?b=1&s=170667a&w=0&k=20&c=SR5FBt8VvpZEOIxZcTmoEf9XxU0oiSnbobD3E6ZB358="
      />
      <HotelCard
        name={"Glasgow"}
        text={
          "You’re guaranteed to find accommodation in Glasgow which suits your taste and budget. Whether you’re looking for something uniquely Glaswegian, a trendy hotel, a vibrant hostel or a comfortable city centre apartment, you can be assured of a warm welcome."
        }
        link="https://peoplemakeglasgow.com"
        image="https://media.cntraveler.com/photos/5ad4ece4379a3a44feb968b6/master/w_3604,h_2574,c_limit/Colosseum-GettyImages-537714366.jpg"
      />
    </div>
  );
};

export default TouristInfoCards;
