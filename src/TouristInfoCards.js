const TouristInfoCards = (props) => {
    return (
        <div className="card ">
          <img src={props.image} className="card-img-top"/>          
          <div className="card-body">
          <h2>{props.name}</h2>
            <p>
            {props.content}
            </p>
            <a href={props.info} className="btn btn-dark">
              More information
            </a>
          </div>
        </div>
      );
  };
  export default TouristInfoCards