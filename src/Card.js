export const Card = props => {
  return (
    <div className="card">
      <div>
        <img src={props.url} className="card-img-top" />
        <p className="card-image-location">
          {props.location}
          <span>
            <img
              className="card-image-heart"
              src="https://cdn-icons-png.flaticon.com/128/5399/5399396.png"
            />
          </span>
        </p>
      </div>
      <div className="card-body">
        <h3>{props.city}</h3>
        <p>{props.description}</p>
        <a href={props.link} target="_blank" className="btn btn-primary">
          Read more
        </a>
      </div>
    </div>
  );
};
