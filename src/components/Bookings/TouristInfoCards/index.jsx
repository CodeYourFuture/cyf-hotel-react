import Locations from "./TouristsLocation.json";
import { Card, CardBack, CardDesc, CardFront, CardImg, CardInner } from "./view";

const TouristsInfoCard = ({ location, img, link, desc }, index) => {
  return (
    <Card className="card shadow mx-3" key={index}>
      <CardInner className="card-body d-flex justify-content-center w-100 h-100 py-2">
        <CardFront>
          <CardImg src={img} className="card-img p-1" alt={location} />
        </CardFront>
        <CardBack className="position-absolute my-2 text-white text-center">
          <CardDesc className="position-absolute fs-6">
            <h5>{location}</h5>
            <p>{desc}</p>
            <a href={link} target="_blank" className="btn btn-primary d-inline-block">
              Go to {location}
            </a>
          </CardDesc>
        </CardBack>
      </CardInner>
    </Card>
  );
};

const TouristsInfoCards = () => {
  return (
    <section className="d-flex justify-content-around flex-wrap mt-4">
      {Locations.map((location, index) => TouristsInfoCard(location, index))}
    </section>
  );
};

export default TouristsInfoCards;
