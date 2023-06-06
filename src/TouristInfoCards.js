import React from "react";


const TouristInfoCards = () => {
    return (
      <div>
        <div className="card">
          <img
            src="https://i2-prod.glasgowlive.co.uk/incoming/article15900403.ece/ALTERNATES/s1200c/1_Gavin-McCormick.jpg"
            className="card-img-top"
          />
          <h1>Glasgow</h1>
          <p>
            Glasgow is the largest city in Scotland, and third largest in the
            United Kingdom. Historically part of Lanarkshire, it is now one of
            the 32 Council Areas of Scotland. It is situated on the River Clyde
            in the country's West Central Lowlands. Inhabitants of the city are
            often referred to as Glaswegians or Weegies.
          </p>
          <div className="card-body">
            <a href="peoplemakeglasgow.com" className="btn btn-primary">
              More information
            </a>
          </div>
        </div>

        <div className="card">
          <img
            src="https://media.gettyimages.com/id/174726708/photo/london-big-ben-and-traffic-on-westminster-bridge.jpg?s=612x612&w=gi&k=20&c=lRk-qiRxj0Y_qYhLDcBSePJUV4yUaiBUuQi9uCRTXIg="
            className="card-img-top"
          />
          <h1>London</h1>
          <p>
            London is the capital city of the United Kingdom. It is the U.K.'s
            largest metropolis and its economic, transportation, and cultural
            centre. London is also among the oldest of the world's great cities,
            with its history spanning nearly two millennia.
          </p>
          <div className="card-body">
            <a href="visitlondon.com" className="btn btn-primary">
              More information
            </a>
          </div>
        </div>

        <div className="card">
          <img
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/a1/ee/e8/the-famous-manchester.jpg?w=1200&h=-1&s=1"
            className="card-img-top"
          />
          <h1>Manchester</h1>
          <p>
            Manchester City adopted their sky blue home shirts in 1894, in the
            first season with the current name. Over the course of its history,
            the club has won nine league titles, seven FA Cups, eight League
            Cups, six FA Community Shields, and one European Cup Winners' Cup.
          </p>
          <div className="card-body">
            <a href="visitmanchester.com" className="btn btn-primary">
              More information
            </a>
          </div>
        </div>
      </div>
    );


}

export default TouristInfoCards;