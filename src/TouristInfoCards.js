import React from "react";

const TouristInfoCard = () => {
  return (
    <div className="welcome">
      <img
        src="https://cache.marriott.com/content/dam/marriott-renditions/LONCH/lonch-suite-0167-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=572px:*"
        className="welcome-img"
        alt="hotel-img"
      ></img>
      <p class="welcome-text">Explore The World With Us!!!</p>
      <div class="card">
        <div>
          <img
            src="https://peoplemakeglasgow.com/imager/general/45177/East-End-Glasgow-Cathedral-Image-Block_8dc3bdbc8660ad389ec95cdf9b15d797.jpg"
            className="card-img-top"
            alt="glasgow-pic"
          ></img>
          <div class="card-body">
            <h5 class="card-title">Glasgow</h5>
            <p class="card-text">
              You’re guaranteed to find accommodation in Glasgow which suits
              your taste and budget. Whether you’re looking for something
              uniquely Glaswegian, a trendy hotel, a vibrant hostel or a
              comfortable city centre apartment, you can be assured of a warm
              welcome.
            </p>
            <a
              href="https://peoplemakeglasgow.com/"
              className="btn btn-primary"
            >
              MORE INFO
            </a>
          </div>
        </div>
        <div>
          <img
            src="https://eu-assets.simpleview-europe.com/manchester2016/imageresizer/?image=%2Fdbimgs%2FManOne-03%284%29.jpg&action=Background_Overlay"
            className="card-img-top"
            alt="glasgow-pic"
          ></img>
          <div class="card-body">
            <h5 class="card-title">Manchester</h5>
            <p class="card-text">
              Manchester city centre is jam-packed with unique and eclectic
              restaurants, bars, shops, museums, galleries, hotels and places to
              stay whilst the surrounding Greater Manchester boroughs offer a
              patch-work of visitor experiences including quaint market towns,
              traditional pubs and beautiful green spaces and waterways to be
              explored on foot or bike. The city region is easily navigated,
              with great transport links both in and around Greater Manchester..
            </p>
            <a
              href="https://www.visitmanchester.com/"
              className="btn btn-primary"
            >
              MORE INFO
            </a>
          </div>
        </div>
        <div>
          <img
            src="https://cdn-lnp.dataweavers.io/-/media/images/london/visit/things-to-do/sightseeing/london-attractions/coca-cola-london-eye/the-london-eye-2-640x360.jpg?rev=95097c3d2aab47109d7b0e944c804d1b?mw=640&hash=EA6D4D5963997B5F368154E65A7FA187"
            className="card-img-top"
            alt="glasgow-pic"
          ></img>
          <div class="card-body">
            <h5 class="card-title">London</h5>
            <p class="card-text">
              Welcome to London! Discover the best of London with Visit London,
              the official guide to England’s exciting capital. Find things to
              do in London, from iconic sightseeing spots and fun-filled days
              out to top restaurants, theatre and unmissable London events. If
              you’re not able to visit just yet, plan ahead to make the most of
              your next visit.
            </p>
            <a href="https://www.visitlondon.com/" className="btn btn-primary">
              MORE INFO
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCard;
