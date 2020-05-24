import React from "react"
import TouristInfoCard from "./TouristInfoCard"

function TouristInfoCards() {

      return (
            <div className="cardContainer">
                  <TouristInfoCard cityInfoLink={"https://www.peoplemakeglasgow.com"} city={"Glasgow"} image={"https://peoplemakeglasgow.com/images/CTA_Images/114605-GCMB-Generic_Homepage_Banner_RR_V1.png"} />
                  <TouristInfoCard cityInfoLink={"https://www.visitmanchester.com"} city={"Manchester"} image={"https://www.visitmanchester.com/imageresizer/?image=%2fdmsimgs%2fBusy_mall1200x619_136550926.jpg&action=ProductDetailFullWidth2"} />
                  <TouristInfoCard cityInfoLink={"https://www.visitlondon.com"} city={"London"} image={"https://cdn.londonandpartners.com/asset/london-by-night-open-top-bus-tour_london-by-night-open-top-bus-tour-image-courtesy-of-golden-tours_a78a06aa1761ee29c3c3c7bcff4d1939.jpg"} />
            </div>
      )

}

export default TouristInfoCards     