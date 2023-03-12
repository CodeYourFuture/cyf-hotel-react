import React from "react";

{/* <div className="card">
	<img src="..." className="card-img-top" />
	<div className="card-body">
		<a href="#" className="btn btn-primary">Go somewhere</a>
	</div>
</div>
``` */}

const TouristInfoCards = () => {
  return (
    <div className="card-deck">
      <div className="card">
        <img
          src="https://www.greatbritishbucketlist.com/wp-content/uploads/2021/04/glasgow-4.jpg"
          alt="Glasgow"
        />
        <h1>Glasgo</h1>
        <div className="card-body">
            <p>A lively city in Scotland, famous for its art, music, and friendly locals, with a rich history and stunning architecture.</p>
          <a
            href="https://peoplemakeglasgow.com/"
            className="btn btn-primary"
          >
            More information
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/3d/31/60/manchester-town-hall.jpg?w=700&h=-1&s=1"
          alt="Manchester"
        />
        <h1>Manchester</h1>
        <div className="card-body">
            <p>A historic and vibrant city in northwest England, renowned for its music, football, and culture.</p>
          <a
            href="https://visitmanchester.com/"
            className="btn btn-primary"
          >
            More information
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://www.history.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTYyNDg1MjE3MTI1Mjc5Mzk4/topic-london-gettyimages-760251843-promo.jpg"
          alt="London"
        />
        <h1>London</h1>
        <div className="card-body">
            <p>The capital of England and a global cultural hub, renowned for its iconic landmarks, diverse neighborhoods and museums.</p>
          <a href="https://visitlondon.com/" className="btn btn-primary">
            More information
          </a>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards