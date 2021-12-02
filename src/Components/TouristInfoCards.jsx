import React from "react";
import "../App.css";

const Card = ({ image, title, info, link }) => {
  return (
    <div className="card d-inline-flex" id="card">
      <img src={image} className="card-img-top" alt={title + " image"} />
      <div className="card-body">
        <h2 className="card-title text-center display-5 mb-3">{title + "!"}</h2>
        <p className="card-text">{info}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          More Information
        </a>
      </div>
    </div>
  );
};

const TouristInfoCards = () => (
  <div id="card-container" className="d-flex justify-content-center gap-5 m-5">
    <Card
      image="https://london.ac.uk/sites/default/files/styles/max_1300x1300/public/2018-10/london-aerial-cityscape-river-thames_1.jpg?itok=6LenFxuz"
      title="London"
      info="London, the capital of England and the United Kingdom, is a 21st-century city with history stretching back to Roman times. At its centre stand the imposing Houses of Parliament, the iconic ‘Big Ben’ clock tower and Westminster Abbey, site of British monarch coronations. Across the Thames River, the London Eye observation wheel provides panoramic views of the South Bank cultural complex, and the entire city. "
      link="https://visitlondon.com/"
    />
    <Card
      image="https://www.visitbritain.com/sites/default/files/consumer/paragraphs-bundles/image-header-with-text/glasgow_clyde_arc_vb34161123.jpg"
      title="Glasgow"
      info="Glasgow is a port city on the River Clyde in Scotland's western Lowlands. It's famed for its Victorian and art nouveau architecture, a rich legacy of the city's 18th–20th-century prosperity due to trade and shipbuilding. Today it's a national cultural hub, home to institutions including the Scottish Opera, Scottish Ballet and National Theatre of Scotland, as well as acclaimed museums and a thriving music scene."
      link="https://peoplemakeglasgow.com/"
    />
    <Card
      image="https://www.visitbritain.com/sites/default/files/consumer/paragraphs-bundles/image-header-with-text/manchester_town_hall_ve13463_1200x600_0_1_0_0.jpg"
      title="Manchester"
      info="Manchester is a major city in the northwest of England with a rich industrial heritage. The Castlefield conservation area’s 18th-century canal system recalls the city’s days as a textile powerhouse, and visitors can trace this history at the interactive Museum of Science & Industry. The revitalised Salford Quays dockyards now house the Daniel Libeskind-designed Imperial War Museum North and the Lowry cultural centre."
      link="https://www.visitmanchester.com/"
    />
  </div>
);

export default TouristInfoCards;
