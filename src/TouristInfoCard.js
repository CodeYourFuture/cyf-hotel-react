import React, { Component } from "react";

class TouristInfoCard extends Component {

constructor(props) {
  super(props);
}

render() {
  return(
      this.props.data.map((singleCard,index) => {
        return(
          <div className="card col-md-3 offset-md-1 border-dark" key={index}>
                <div className="card-image-container">
                  <img
                    className="card-img-top"
                    src={singleCard.image}
                    alt="Card cap"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    {singleCard.location}
                  </h5>
                  <p className="card-text">
                    {singleCard.text}
                  </p>
                  <a href={singleCard.link} className="btn btn-primary">
                    {singleCard.buttonText}
                  </a>
                </div>
              </div>
        )
      })
  )

}

}



export default TouristInfoCard;
