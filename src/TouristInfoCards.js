import React from "react";

const TouristInfoCards = () => {
  return (
    <div className="d-flex flex-column align-items-center flex-md-row justify-content-around  align-items-md-start">
      <div className="card mb-2">
        <img
          src="https://images.pexels.com/photos/5455196/pexels-photo-5455196.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt="#"
          className="card-img-top"
        />
        <div className="card-body">
          <h3 className="text-center">Paris</h3>
          <p>
            Paris is famous for its cafe culture, the Eiffel Tower, the Louvre,
            Notre Dame, the Moulin Rouge, pastries, and fashion. Paris is known
            for having beauty, elegance, and for being a boldly romantic city.
            ... From that point on the city became known as La Ville-Lumière
            ('The City of Light').
          </p>
          <a href="https://en.parisinfo.com/" className="btn btn-secondary">
            More information
          </a>
        </div>
      </div>
      <div className="card mb-2">
        <img
          src="https://images.pexels.com/photos/3673785/pexels-photo-3673785.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt="#"
          className="card-img-top"
        />
        <div className="card-body">
          <h3 className="text-center">London</h3>
          <p>
            One of the world's most visited cities, London has something for
            everyone: from history and culture to fine food and exceedingly good
            times. With such diversity, London's cultural dynamism makes it
            among the world's most international cities. It's a city of ideas an
            innovator of art and culture.
          </p>
          <a href="https://www.visitlondon.com/" className="btn btn-secondary">
            More information
          </a>
        </div>
      </div>
      <div className="card mb-2">
        <img
          src="https://images.pexels.com/photos/190482/pexels-photo-190482.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt="#"
          className="card-img-top"
        />
        <div className="card-body">
          <h3 className="text-center">Kuala Lumpur</h3>
          <p>
            Kuala Lumpur is the capital city of Malaysia, boasting gleaming
            skyscrapers, colonial architecture, charming locals, and a myriad of
            natural attractions. Divided into numerous districts, its main hub
            is called the Golden Triangle which comprises Bukit Bintang, KLCC
            and Chinatown.
          </p>
          <a
            href="http://www.visitkl.gov.my/visitklv2/index.php?r=column/cone&id=3"
            className="btn btn-secondary"
          >
            More information
          </a>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
