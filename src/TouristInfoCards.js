import React from 'react';
import london from "./image/london2.jpg";
import glasgow from "./image/glasgow.jpg";
import manchester from "./image/manchester.jpg";

const TouristInfoCards = () => {
    return (
      <div className = "all-cards">
     <div className="card">
	      <img src = {london} className="card-img-top" />
	      <div className="card-body">
          <h1>LONDON</h1>
          <p>London, the capital of England and the United Kingdom, is a 21st-century city with history stretching back to Roman times. At its centre stand the imposing Houses of Parliament, the iconic ‘Big Ben’ clock tower and Westminster Abbey, site of British monarch coronations.</p>
		      <a href = "visitlondon.com" className="btn btn-primary">More Info</a>
	      </div>
      </div>

       <div className="card">
	      <img src = {glasgow} className="card-img-top" />
	      <div className="card-body">
          <h1>GLASGOW</h1>
          <p>Glasgow is a port city on the River Clyde in Scotland's western Lowlands. It's famed for its Victorian and art nouveau architecture, a rich legacy of the city's 18th–20th-century prosperity due to trade and shipbuilding, prosperity due to trade and.</p>
		      <a href = "peoplemakeglasgow.com" className="btn btn-primary">More Info</a>
	      </div>
      </div>

       <div className="card">
	      <img src = {manchester} className="card-img-top" />
	      <div className="card-body">
          <h1>MANCHESTER</h1>
          <p>Manchester is a major city in the northwest of England with a rich industrial heritage. The Castlefield conservation area’s 18th-century canal system recalls the city’s days as a textile powerhouse, and visitors can trace this history at the interactive Museum of Science &.</p>
		      <a href = "visitmanchester.com" className="btn btn-primary">More Info</a>
	      </div>
      </div>
      </div>
    );
};

export default TouristInfoCards;