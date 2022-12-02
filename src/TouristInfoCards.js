import React from "react";

const TouristInfoCards = () => {
  return (
    <div className="flex-container">
      {/* About Glasgow */}
      <div className="card">
        <img
          src="https://media.istockphoto.com/id/469974825/photo/squinty-bridge-glasgow.jpg?s=612x612&w=0&k=20&c=or3NNSPV7Q-t1lZ5Z6UITQZ5Q3KoF35Je5wq9-fSrvg="
          className="card-img-top"
          alt=""
        />
        <div className="card-body">
          <h1>Glasgow</h1>
          <p>
            Glasgow is a port city on the River Clyde in Scotland's western
            Lowlands. It's famed for its Victorian and art nouveau architecture,
            a rich legacy of the city's 18th-20th-century prosperity due to
            trade and shipbuilding. Today it's a national cultural hub, home to
            institutions including the Scottish Opera, Scottish Ballet and
            National Theatre of Scotland, as well as acclaimed museums and a
            thriving music scene.
          </p>
          <a href="https://peoplemakeglasgow.com/" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>

      {/* About Manchester */}
      <div className="card">
        <img
          src="https://i0.wp.com/streetphotographyberlin.com/wp-content/uploads/2016/09/Fotolia_90654616_S.jpg?resize=720%2C480"
          className="card-img-top"
          alt=""
        />
        <div className="card-body">
          <h1>Manchester</h1>
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
            href="https://www.visitmanchester.com/"
            className="btn btn-primary"
          >
            Go somewhere
          </a>
        </div>
      </div>

      {/* About London */}
      <div className="card">
        <img
          src="https://i0.wp.com/www.montcalmroyallondoncity.co.uk/blog/wp-content/uploads/2017/07/shutterstock_107597459.jpg?fit=1000%2C667&ssl=1"
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
          <a href="https://www.visitlondon.com/" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
