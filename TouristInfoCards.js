import React from "react";

function TouristInfoCards() {
	return (
		<div className="cards">
			<div className="card">
				<img
					src="https://www.shoosmiths.co.uk/-/media/images/locations/glasgow.jpg"
					className="card-img-top"
					alt="glasgow"
				/>
				<div className="card-body">
					<p>
						Glasgow is a port city on the River Clyde in Scotland's western
						Lowlands
					</p>
					<a href="http://peoplemakeglasgow.com" className="btn btn-primary">
						Find out more
					</a>
				</div>
			</div>

			<div className="card">
				<img
					src="https://www.visitbritain.com/sites/default/files/consumer/paragraphs-bundles/image-header-with-text/manchester_town_hall_ve13463_1200x600_0_1_0_0.jpg"
					className="card-img-top"
					alt="glasgow"
				/>
				<div className="card-body">
					<p>Manchester is a major city in the northwest of England</p>
					<a href="http://visitmanchester.com" className="btn btn-primary">
						Find out more
					</a>
				</div>
			</div>

			<div className="card">
				<img
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTt_NNXLErKi_fwgdd1L6s7JWI0MMi3QHD5-A&usqp=CAU"
					className="card-img-top"
					alt="glasgow"
				/>
				<div className="card-body">
					<p>London the capital of England and the United Kingdom.</p>
					<a href="http://visitlondon.com" className="btn btn-primary">
						Find out more
					</a>
				</div>
			</div>
		</div>
	);
}

export default TouristInfoCards;
