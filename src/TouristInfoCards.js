import React from "react"
import CitiesImages from "./CitiesImages.json"
import TouristInfoCard from "./TouristInfoCard"

function TouristInfoCards() {

      return (
            <div >
                  <TouristInfoCard content={CitiesImages} />
            </div>
      )

}

export default TouristInfoCards     