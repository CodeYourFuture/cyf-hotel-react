import React from "react";

function TouristInfoCards() {
  return (
    <div className="cards-wrapper">
      <div className="card info-card">
        <img
          src="https://images.unsplash.com/photo-1546867042-cdba19743124?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjkxfHxnbGFzZ293fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          className="card-img-top"
          alt="Glasgow"
        />
        <div className="card-body">
          <h5 className="card-title">Glasgow</h5>
          <p className="card-text">
            Glasgow is the largest city in Scotland and there are so many things
            to do in Glasgow! The city is home to fantastic art galleries,
            historical National Trust properties, leafy green spaces, amazing
            street art, and a plethora of live music venues. Glasgow is perhaps
            not as well-known as Edinburgh to international travelers, but the
            reward of visiting here is a less crowded city where experiences
            seem less rushed and more authentic.
          </p>
          <a
            href="http://www.peoplemakeglasgow.com"
            className="btn btn-primary more-information-button"
          >
            More Information
          </a>
        </div>
      </div>
      <div className="card info-card">
        <img
          src="https://images.unsplash.com/photo-1579379500738-fc02326916d9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDE3fHxtYW5jaGVzdGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60"
          className="card-img-top"
          alt="Manchester"
        />
        <div className="card-body">
          <h5 className="card-title">Manchester</h5>
          <p className="card-text">
            Manchester is one of the most exciting places to visit in the UK
            right now where everybody and anybody is very warmly welcomed. Known
            throughout the world as the birthplace of the industrial revolution,
            Manchester has a proud history in science, politics, music, arts and
            sport. And today the city combines this heritage with a progressive
            vision to be a city that delivers surprise and delight in equal
            measures.
          </p>
          <a
            href="http://www.visitmanchester.com"
            className="btn btn-primary more-information-button"
          >
            More Information
          </a>
        </div>
      </div>
      <div className="card info-card">
        <img
          src="https://images.unsplash.com/photo-1488747279002-c8523379faaa?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bG9uZG9ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60"
          className="card-img-top"
          alt="London"
        />
        <div className="card-body">
          <h5 className="card-title">London</h5>
          <p className="card-text">
            London, the capital of England and the United Kingdom, is a
            21st-century city with history stretching back to Roman times. At
            its centre stand the imposing Houses of Parliament, the iconic ‘Big
            Ben’ clock tower and Westminster Abbey, site of British monarch
            coronations. Across the Thames River, the London Eye observation
            wheel provides panoramic views of the South Bank cultural complex,
            and the entire city.
          </p>
          <a
            href="http://www.visitlondon.com"
            className="btn btn-primary more-information-button"
          >
            More Information
          </a>
        </div>
      </div>
    </div>
  );
}
export default TouristInfoCards;
