const TouristInfoCard = (props) => {
    return (
    
          <div className="card">
            <h1>{props.title}</h1>
            <img src={props.image}/>
            <h5>{props.description}</h5>
            <a href= {props.link}></a>       
          </div>
    );        
  }


export default TouristInfoCard;