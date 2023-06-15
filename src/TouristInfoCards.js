import React from "react";
import InfoCard from "./InfoCard";
import Manchester from "./imagesCYFHotel/Manchester.jpg";
import London from "./imagesCYFHotel/London.jpg";
import Glasgow from "./imagesCYFHotel/Glasgow.jpg";

const glasgow = "Glasgow is the most populous city in Scotland and the fourth-most populous city in the United Kingdom, as well as being the 27th largest city by population in Europe.";
const manchester = "Manchester is a city and metropolitan borough in the county of Greater Manchester, England. It is well-known for its pop-music scene with a long list of artist originating from the city";
const london = "London is the capital and largest city of England and the United Kingdom, with a population of just under 9 million. It is well known for its museums, theatres, sport events"

return = (
<section className="allcards" id="allcards">
<div className="card">
	<img src={Glasgow} className="card-img-top" />
	<div className="card-body">
        <span>{glasgow}</span>
		<a href="https://peoplemakeglasgow.com" className="btn btn-primary">Click here</a>
	</div>
</div>

<div className="card">
	<img src={Manchester} className="card-img-top" />
	<div className="card-body">
        <span>{manchester}</span>
		<a href="https://www.visitmanchester.com" className="btn btn-primary">Click here</a>
	</div>
</div>

<div className="card">
	<img src={London} className="card-img-top" />
	<div className="card-body">
        <span>{london}</span>
		<a href="https://www.visitlondon.com" className="btn btn-primary">Click here</a>
	</div>
</div>

</section>
);
);


export default TouristInfoCards;