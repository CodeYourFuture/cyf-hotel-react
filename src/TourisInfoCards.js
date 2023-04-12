const TouristInfoCards = props => {
  console.log(props, "--inside ToruInfo");

  return (
    <div className="card-deck mt-3 w-75 mx-auto">
      {props.cards.map((el, index) => (
        <TouristCard {...el} key={index} id={index} />
      ))}
    </div>
  );
};

export default TouristInfoCards;

const TouristCard = ({
  id,
  name: location,
  url: href,
  img: image,
  description: summary
}) => {
  return (
    <div className="card" key={id}>
      <img src={image} className="card-img-top" />
      <div className="card-body">
        <h3 className="card-title">{location}</h3>
        <p className="card-text">{summary}</p>
        <a href={href} className="btn btn-primary">
          travel to {location}
        </a>
      </div>
    </div>
  );
};
