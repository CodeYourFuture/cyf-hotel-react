import React from "react";

function TouristInfoCards() {
  return (
    <div class="cards">
      <div className="card text-center">
        <img
          src="https://www.visitbritain.com/sites/default/files/consumer/paragraphs-bundles/image-header-with-text/glasgow_clyde_arc_vb34161123.jpg"
          className="card-img-top"
        />
        <div className="card-body">
          <a
            href="https://www.peoplemakeglasgow.com"
            className="btn btn-primary"
          >
            Visit Glasgow
          </a>
        </div>
      </div>

      <div className="card text-center">
        <img
          src="https://media.architecturaldigest.com/photos/56fd9d65ecd154e0329c1627/4:3/w_768/london-travel-guide-lede.jpg"
          className="card-img-top"
        />
        <div className="card-body">
          <a href="https://www.visitlondon.com" className="btn btn-primary">
            Visit London
          </a>
        </div>
      </div>

      <div className="card text-center">
        <img
          src="https://www.centreforcities.org/wp-content/uploads/2014/08/Manchester_x1650.jpg"
          className="card-img-top"
        />
        <div className="card-body">
          <a href="https://www.visitmanchester.com" className="btn btn-primary">
            Visit Manchester
          </a>
        </div>
      </div>
    </div>
  );
}

export default TouristInfoCards;
