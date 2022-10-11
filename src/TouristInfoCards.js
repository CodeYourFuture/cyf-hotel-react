import React from "react";

const TouristInfoCards = prop => {
  return (
    <div className="cardsContainer">
      <div className="card">
        <img
          src="http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQsLkgnpO7TQnLYH3SvohTmj_1QnWt1MSJwHtDorwWtgjnwUdZoA_uejreL1I1R5wEJ"
          alt=""
          className="card-img-top"
        />
        <div className="card-body">
          <h2>Glasgow</h2>
          <p>
            Glasgow is a port city on the River Clyde in Scotland's western
            Lowlands. It's famed for its Victorian and art nouveau architecture,
            a rich legacy of the city's 18th–20th-century prosperity due to
            trade and shipbuilding. Today it's a national cultural hub, home to
            institutions including the Scottish Opera, Scottish Ballet and
            National Theatre of Scotland, as well as acclaimed museums and a
            thriving music scene.
          </p>
          <a
            className="btn btn_primary"
            href="https://peoplemakeglasgow.com/"
            target="_blank"
          >
            Read More
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSVBJjj5IPMptDI-uErNK_2_fZmS1CyAXlx1x66y1WegvU1_-BQDwA7yfkFb-f3TPmF"
          alt="Photo of Manchester"
          className="card-img-top"
        />
        <div className="card-body">
          <h2>Manchester</h2>
          <p>
            Manchester is a major city in the northwest of England with a rich
            industrial heritage. The Castlefield conservation area’s
            18th-century canal system recalls the city’s days as a textile
            powerhouse, and visitors can trace this history at the interactive
            Museum of Science & Industry. The revitalised Salford Quays
            dockyards now house the Daniel Libeskind-designed Imperial War
            Museum North and the Lowry cultural centre.
          </p>
          <a
            className="btn btn_primary"
            href="https://www.visitmanchester.com/"
            target="_blank"
          >
            Read More
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcTF9OtLxnbxSpLFzyhzXERKiAbnHlG25WfRzxRTNcRiTk0lHvsOXNKH9KNAOvTWi_sS"
          alt="Image of London"
          className="card-img-top"
        />
        <div className="card-body">
          <h2>London</h2>
          <p>
            London, the capital of England and the United Kingdom, is a
            21st-century city with history stretching back to Roman times. At
            its centre stand the imposing Houses of Parliament, the iconic ‘Big
            Ben’ clock tower and Westminster Abbey, site of British monarch
            coronations. Across the Thames River, the London Eye observation
            wheel provides panoramic views of the South Bank cultural complex,
            and the entire city.
          </p>
          <a
            className="btn btn_primary"
            href="https://visitlondon.com/"
            target="_blank"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};
export default TouristInfoCards;
