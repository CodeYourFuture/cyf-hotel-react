

// /we're going to create a PROPS function as this will let us to REUSE the funtion and minimazed our code

const TouristCardData = (props) => {
// insert all DATA in one , in this case we need to store img,title,description,link
    return (
    <div className="cardData">
         <img src={`${props.pictures}`} className="card-img-top" />
        <div className="info">
            <h2 className="place">{props.title}</h2>
            <p className="summary"> {props.description}</p>
            <a href={props.link} className="link" target="_blank" type="button">
                more information
            </a>
        </div>     
    </div>
    );
};

export default TouristCardData;