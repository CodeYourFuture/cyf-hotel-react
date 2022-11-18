import React from "react";

function TouristInfoCards() {
  return (
    <div className="card-container">
      <div className="card">
        <img
          src="https://peoplemakeglasgow.com/imager/general/62605/Tours-in-Glasgow-University-of-Glasgow-Content-Block_8dc3bdbc8660ad389ec95cdf9b15d797.jpg"
          classNamr="card-img-top"
          alt=""
        />

        <div className="card-body">
          <h1>Glasgow</h1>
          <p>
            Discover the beauty of Glasgow’s architecture, the magic of Charles
            Rennie Mackintosh and much more at one of the city’s fantastic
            attraction tours: University of Glasgow: the iconic grounds of the
            University of Glasgow campus in the west end are beautiful to
            explore. Visit the University of Glasgow website to take a
            self-guided tour and discover Glasgow’s very own Hogwarts! House for
            an Art Lover
          </p>
          <a
            href="peoplemakeglasgow.com"
            className="btn btn-primary visit-city"
          >
            See more about Glasgow
          </a>
        </div>
      </div>

      <div className="card">
        <img
          src="https://themanc.com/wp-content/uploads/2021/10/DDCCD1FC-B7A7-4939-9EE1-8BD9274D8CCB.jpeg"
          className="card-img-top"
          alt=""
        />
        <div className="card-body">
          <h1>Manchester</h1>
          <p>
            Whatever brings you to Manchester, Visit Manchester is here to make
            sure that you get the most out of your trip. When you’re in the
            city, make sure to drop by our Visitor Information Centre. Here you
            can get tourist information on how to best shape your visit, as well
            as maps, merchandise and discounted tickets to some of the most
            popular attractions and tourist spots. We have a team who can
            provide information.
          </p>
          <a href="visitmanchester.com" className="btn btn-primary visit-city">
            See more about London
          </a>
        </div>
      </div>

      <div className="card">
        <img
          src="https://www.thestar.com/content/dam/thestar/life/travel/2022/07/08/an-insiders-guide-to-london-england-where-to-find-inspiring-art-cool-shops-and-classic-sunday-roast/london_england_credit_tomas_marek_istock.jpg"
          className="card-img-top"
          alt=""
        />
        <div className="card-body">
          <h1>London</h1>
          <p>
            London, the capital of England and the United Kingdom, is a
            21st-century city with history stretching back to Roman times. At
            its centre stand the imposing Houses of Parliament, the iconic ‘Big
            Ben’ clock tower and Westminster Abbey, site of British monarch
            coronations. Across the Thames River, the London Eye observation
            wheel provides panoramic views of the South Bank cultural complex,
            and the entire city.
          </p>
          <a href="visitlondon.com" className="btn btn-primary visit-city">
            See more about Manchester
          </a>
        </div>
      </div>
    </div>
  );
}

export default TouristInfoCards;
