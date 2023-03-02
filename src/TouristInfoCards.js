const TouristInfoCard = (props) => {
    return (
    
          <div className="card">
            <h1>{props.title}</h1>
            <img className="img-header" src={props.image}/>
            <p>{props.description}</p>
            <a href= {props.link}></a>       
          </div>
    );        
  }


export default TouristInfoCard;