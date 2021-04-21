import React from "react";
function TouristInfoCards() {
  return (
    <div className="row ml-5 mt-2">
      <div className="col-sm-4">
        <div className="card">
          <img
            src="https://policyscotland.gla.ac.uk/wp-content/uploads/2020/07/Glasgow-scaled-2560x1280.jpg"
            className="card-img-top"
          />
          <div className="card-body">
            <h5 className="card-title">Glasgow</h5>
            <p className="card-text">
              Hosted the 2014 Commonwealth Games and the first European
              Championships in 2018; and is also well known in the sporting
              world for football (particularly the Old Firm rivalry between
              Celtic and Rangers), rugby, athletics, tennis, golf and swimming.
            </p>
            <a
              href="https://peoplemakeglasgow.com"
              className="btn btn-primary"
              target="_blank"
            >
              More Information
            </a>
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="card">
          <img
            src="https://s27389.pcdn.co/wp-content/uploads/2019/07/manchester-digital-tech.jpeg"
            className="card-img-top"
          />
          <div className="card-body">
            <h5 className="card-title">Manchester</h5>
            <p className="card-text">
              Manchester city centre is jam-packed with unique and eclectic
              restaurants, shops, museums, galleries, hotels and places to stay
              whilst the surrounding Greater Manchester boroughs offer a
              patch-work of visitor experiences including quaint market towns,
              and beautiful green spaces and waterways to be explored on foot or
              bike.
            </p>
            <a
              href="https://visitmanchester.com"
              className="btn btn-primary"
              target="_blank"
            >
              More Information
            </a>
          </div>
        </div>
      </div>
      <div class="col-sm-4">
        <div className="card">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Palace_of_Westminster_from_the_dome_on_Methodist_Central_Hall_%28cropped%29.jpg/1000px-Palace_of_Westminster_from_the_dome_on_Methodist_Central_Hall_%28cropped%29.jpg"
            className="card-img-top"
          />
          <div className="card-body">
            <h5 className="card-title">London</h5>
            <p className="card-text">
              London, the capital of England and the United Kingdom, is a
              21st-century city with history stretching back to Roman times. At
              its centre stand the imposing Houses of Parliament, the iconic
              ‘Big Ben’ clock tower and Westminster Abbey, site of British
              monarch coronations. Across the Thames River, the London Eye
              observation wheel provides panoramic views of the South Bank
              cultural complex, and the entire city.
            </p>
            <a
              href="https://visitlondon.com"
              className="btn btn-primary"
              target="_blank"
            >
              More Information
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TouristInfoCards;
