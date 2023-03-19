import React from "react";
function TouristInfoCards(){
    return(
<div className="hero">
<div className="card">
	<img src="https://media.gettyimages.com/id/519375418/photo/a-riverside-view-of-a-city-at-night.jpg?s=612x612&w=gi&k=20&c=kjPapbNGRgXeamKKU6IGuUZvI16DeTwUB051WYFmFkg=" className="card-img-top" />
	<div className="card-body">
		<a href="https://peoplemakeglasgow.com/" className="btn btn-primary">Go Glasgow</a>
	</div>
</div>
<div className="card">
	<img src="https://media.istockphoto.com/id/1421131677/photo/manchester-united-kingdom-aerial-shot-of-modern-buildings-with-lots-of-counstruction-in-the.jpg?s=612x612&w=0&k=20&c=UIURKJcYchfPOko1-G7Mmt38pl-Rl8r9-dFK3gOR-bc=" className="card-img-top" />
	<div className="card-body">
		<a href="https://visitmanchester.com/" className="btn btn-primary">Go Manchester</a>
	</div>
</div>
<div className="card">
	<img src="https://thumbs.dreamstime.com/b/london-big-ben-houses-parliament-uk-49652572.jpg" className="card-img-top" />
	<div className="card-body">
		<a href="https://visitlondon.com/" className="btn btn-primary">Go London</a>
	</div>
</div>
</div>
    );
}
export default TouristInfoCards;