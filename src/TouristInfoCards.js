import React from "react";


const TouristInfoCards = () => {
return (
     <ul className="d-flex justify-content-around">
     <li>
    <div className="card">
	<img className="card-img-top" src="https://peoplemakeglasgow.com/imager/general/92335/Royal-Exchange-Square_8dc3bdbc8660ad389ec95cdf9b15d797.jpg" className="card-img-top" />
	<div className="card-body">
    <h2>Glasgow</h2>
    <p>Glasgow's city centre is home to flagship stores, impressive shopping centres and designer favourites all within an easily walkable area.</p>    
		<a href="https://peoplemakeglasgow.com/" className="btn btn-primary">Go somewhere</a>
	</div>
</div>
    </li>
        <li>
        <div className="card">
	<img className="card-img-top" src="https://eu-assets.simpleview-europe.com/manchester2016/imageresizer/?image=%2Fdmsimgs%2Fmanchester_christmas_markets_cathedral_gardens_3_471520053.JPG&action=ProductDetailFullWidth2" className="card-img-top" />
	<div className="card-body">
    <h2>Manchester</h2>
    <p>Youthful, diverse, energetic and bursting with character; Manchester is one of the most exciting places to visit in the UK right now where everybody and anybody is very warmly welcomed.</p>
		<a href="https://www.visitmanchester.com/" className="btn btn-primary">Go somewhere</a>
	</div>
</div>
    </li>
        <li>
        <div className="card">
	<img className="card-img-top" src="https://cdn.londonandpartners.com/-/media/images/london/visit/whats-on/christmas/jamie-davies-a8x39eo35be-unsplash.jpg?mw=640&hash=B4BD045F5989E8D48FE70174C0E4199E000ABD27" className="card-img-top" />
	<div className="card-body">
    <h2>London</h2>
    <p>Discover the best of London with Visit London, the official guide to England’s exciting capital. Find things to do in London, from iconic sightseeing spots and fun-filled days out to top restaurants, theatre and unmissable London events.</p>
		<a href="https://www.visitlondon.com/" className="btn btn-primary">Go somewhere</a>
	</div>
</div>
     </li>
    </ul>
)
}
export default TouristInfoCards;