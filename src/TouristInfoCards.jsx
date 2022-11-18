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
            an Art Lover: explore the beauty and architectural details of the
            Charles Rennie Mackintosh-designed House for an Art Lover at your
            own pace with your very own audio headset guide. Find out more at
            houseforanartlover.co.uk. Mackintosh at the Willow: taking place
            every day at 10am and 11am, enjoy a guided tour of the beautifully
            restored Mackintosh at the Willow tearooms – another Charles Rennie
            Mackintosh gem in the city. And why not stay for a tasty treat
            afterwards? Visit mackintoshatthewillow.com to book.
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
            popular attractions and tourist spots. You can also view maps
            online, as well as viewing travel information, weather, and useful
            apps and downloads. Free Wi-Fi is available throughout the city, and
            information about the Green Tourism scheme can be found here. If you
            are planning individual or group travel programmes, please contact
            us directly for free, professional and practical advice. We have a
            dedicated team who can provide information and assistance.
          </p>
          <a href="visitmanchester.com" className="btn btn-primary visit-city">
            See more about London
          </a>
        </div>
      </div>

      <div className="card">
        <img
          src="https://www.business.london/-/media/images/london/visit/things-to-do/sightseeing/london-attractions/coca-cola-london-eye/the-london-eye-2-640x360.jpg?mw=640&hash=F7D574072DAD523443450DF57E3B91530064E4EE"
          className="card-img-top"
          alt=""
        />
        <div className="card-body">
          <h1>London</h1>
          <p>
            Whatever brings you to Manchester, Visit Manchester is here to make
            sure that you get the most out of your trip. When you’re in the
            city, make sure to drop by our Visitor Information Centre. Here you
            can get tourist information on how to best shape your visit, as well
            as maps, merchandise and discounted tickets to some of the most
            popular attractions and tourist spots. You can also view maps
            online, as well as viewing travel information, weather, and useful
            apps and downloads. Free Wi-Fi is available throughout the city, and
            information about the Green Tourism scheme can be found here. If you
            are planning individual or group travel programmes, please contact
            us directly for free, professional and practical advice. We have a
            dedicated team who can provide information and assistance.
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
