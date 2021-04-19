import React from "react";

const TouristInfoCards = () => {
  return (
    <div className="cards text-center">
      <div className="card">
        <img
          src="https://thenomadvisor.com/wp-content/uploads/2019/03/wheretostayinglasgow-780x584.jpg"
          alt="glasgow"
          className="card-img-top"
        />
        <div className="card-body">
          <p>
            Glasgow has a rich and varied architectural heritage. The city's
            wealthy past has left a legacy of some of the finest Victorian
            architecture like the iconic City Chambers which sits majestically
            overlooking George Square – the civic heart of the city. While
            Glasgow Cathedral is one of the finest examples of medieval
            architecture that remains in Scotland and adjacent to the Cathedral
            is the mesmerising Necropolis – a cemetery full of wonderful
            sculptures and fascinating stories.{" "}
          </p>
          <a href="www.peoplemakeglasgow.com" className="btn btn-primary">
            More Information
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://governmentbusiness.co.uk/sites/default/files/william-mccue-508892-unsplash_1.jpg"
          alt="Manchester"
          className="card-img-top"
        />
        <div className="card-body">
          <p>
            Whether you’re seeking culture, nightlife, history, or just good
            fun, there are plenty of things to do in Manchester.Be absorbed by
            the beautiful attractions such as the gothic architecture at John
            Rylands Library and Manchester Cathedral; take in fine art at
            Manchester Art Gallery and the Whitworth; discover history, old and
            new, at Manchester Museum and the Imperial War Museum North; see
            contemporary arts redifined at HOME; or even learn to ski at Chill
            Factore.
          </p>
          <a href="visitmanchester.com" className="btn btn-primary">
            More Information
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://content.thriveglobal.com/wp-content/uploads/2020/01/london_panorama.jpg"
          className="card-img-top"
        />
        <div className="card-body">
          <p>
            Welcome to London! Discover the best of London with Visit London,
            the official guide to England’s exciting capital. Find things to do
            in London, from iconic sightseeing spots and fun-filled days out to
            top restaurants, theatre and unmissable London events. If you’re not
            able to visit just yet, plan ahead to make the most of your next
            visit.
          </p>
          <a href="visitlondon.com" className="btn btn-primary">
            More Information
          </a>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
