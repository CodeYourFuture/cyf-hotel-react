const TouristInfoCards = props => (
  <div className="card-container">
    {props.cities.map(eachCard => (
      <div className="card">
        <img src={eachCard.image} className="card-img card-img-top" />
        <div className="card-body">
          <h1>{eachCard.name}</h1>
          <p>{eachCard.description}</p>
        </div>
        <a href={eachCard.information} className="btn btn-primary">
          {" "}
          More Information
        </a>
      </div>
    ))}
  </div>
);

export default TouristInfoCards;
