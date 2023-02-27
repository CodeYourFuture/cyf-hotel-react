


function TouristInfoCards (props){
    return (
        
       <div className="card">
       
         <img src={props.imageSource} className="card-img-top" />
            <div className="card-body">
            <a href={props.link} className="btn btn-primary">{props.town}</a>
           </div>
           </div>
           
           );
           }

export default TouristInfoCards;

