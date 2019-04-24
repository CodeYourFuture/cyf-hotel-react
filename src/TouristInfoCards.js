import React, { Component } from "react";
import TouristInfoCard from "./TouristInfoCard"

class TouristInfoCards extends Component {

  render() {
    return (
        <div className="tourist-information">
          <div className="container">
            <div className="row">
              <TouristInfoCard data={this.props.data} />
            </div>
          </div>
        </div>
)
}

}



export default TouristInfoCards;
