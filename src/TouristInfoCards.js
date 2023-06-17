import React from "react";

const TouristInfoCards = () => {
  return (
    <>
      {/* Text and image of touristcard */}
      {/* <div className="Welcome">
        <img
          src="https://images.unsplash.com/photo-1686740172488-6a680069affb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=60"
          className="welcome-image"
          alt="View-img"
          
        ></img>
        <p className="welcome-text">Explore The UK</p>
      </div> */}

      {/* TouristInfoCards - Glasgow */}
      <div className="card">
        <div className="Tourist-info">
          <img
            src="https://images.unsplash.com/photo-1633828748381-7fd633580a38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdsYXNnb3clMjBjaXR5fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
            className="card-img-top"
            alt="Glasgow-img"
            width={150}
            height={250}
          />
          <h3 className="h3">Glasgow</h3>
          <p className="para">
            Glasgow is a port city on the River Clyde in Scotland's western
            Lowlands. It's famed for its Victorian and art nouveau architecture,
            a rich legacy of the city's 18th century prosperity due to trade and
            shipbuilding.
          </p>

          <div className="card-body">
            <a className="btn btn-primary" href="peoplemakeglasgow.com">
              More Info
            </a>
          </div>

          {/* TouristInfoCards - Manchester */}
          <div className="card">
            <div className="Tourist-info">
              <img
                src="https://images.unsplash.com/photo-1623960146923-e77aee115f74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFuY2hlc3RlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
                className="card-img-top"
                alt="Manchester-img"
                width={150}
                height={250}
              />
              <h3 className="h3">Manchester</h3>
              <p className="para">
                Manchester is a major city in the northwest of England with a
                rich industrial heritage. The Castlefield conservation area’s
                18th-century canal system recalls the city’s days as a textile
                powerhouse, and visitors can trace this history at the
                interactive Museum of Science & Industry.
              </p>
              <div className="card-body">
                <a href="visitmanchester.com" className="btn btn-primary">
                  More Info
                </a>
              </div>

              {/* TouristInfoCards - London */}
              <div className="card">
                <div className="Tourist-info">
                  <img
                    src="https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bG9uZG9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
                    className="card-img-top"
                    alt="Manchester-img"
                    width={150}
                    height={250}
                  />
                  <h3 className="h3">London</h3>
                  <p className="para">
                    London, the capital of England and the United Kingdom, is a
                    21st-century city with history stretching back to Roman
                    times. At its centre stand the imposing Houses of
                    Parliament, the iconic Big Ben clock tower and Westminster
                    Abbey, site of British monarch coronations. Across the
                    Thames River, the London Eye observation wheel provides
                    panoramic views of the South Bank cultural complex, and the
                    entire city
                  </p>
                  <div className="card-body">
                    <a href="visitlondon.com" className="btn btn-primary">
                      More Info
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default TouristInfoCards;
