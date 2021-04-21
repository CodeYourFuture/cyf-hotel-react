import React from "react";

const TouristInfoCards = () => {
  return (
    <div className="row justify-content-around">
      <div className="col-md-3 mb-2 mx-2 mt-2 justify">
        <div className="card w-100 h-100">
          <img
            src="https://images.unsplash.com/photo-1571494146906-86de15d3817b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z2xhc2dvd3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
            className="card-img-top"
            alt="Glasgow image"
          />
          <div className="card-body d-flex flex-column align-items-center">
            <h3 className="card-title">Glasgow</h3>
            <p>
              Glasgow is a port city on the River Clyde in Scotland's western
              Lowlands. It's famed for its Victorian and art nouveau
              architecture, a rich legacy of the city's 18th–20th-century
              prosperity due to trade and shipbuilding.
            </p>
            <a
              href="https://peoplemakeglasgow.com/"
              className="btn btn-primary"
            >
              More Information
            </a>
          </div>
        </div>
      </div>
      <div className="col-md-3 mb-2 mx-2 mt-2">
        <div className="card w-100 h-100">
          <img
            src="https://images.unsplash.com/photo-1515586838455-8f8f940d6853?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFuY2hlc3RlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
            className="card-img-top"
            alt="Manchester image"
          />
          <div className="card-body d-flex flex-column align-items-center">
            <h3 className="card-title">Manchester</h3>
            <p>
              Manchester is a major city in the northwest of England with a rich
              industrial heritage. The Castlefield conservation area’s
              18th-century canal system recalls the city’s days as a textile
              powerhouse, and visitors can trace this history at the interactive
              Museum of Science & Industry.
            </p>
            <a
              href="https://www.visitmanchester.com/"
              className="btn btn-primary"
            >
              More Information
            </a>
          </div>
        </div>
      </div>
      <div className="col-md-3 mx-2 mt-2">
        <div className="card w-100 h-100">
          <img
            src="https://images.unsplash.com/photo-1513026705753-bc3fffca8bf4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGxvbmRvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
            className="card-img-top"
            alt="London image"
          />
          <div className="card-body d-flex flex-column align-items-center">
            <h3 className="card-title">London</h3>
            <p>
              London, the capital of England and the United Kingdom, is a
              21st-century city with history stretching back to Roman times. At
              its centre stand the imposing Houses of Parliament, the iconic
              ‘Big Ben’ clock tower and Westminster Abbey, site of British
              monarch coronations.
            </p>
            <a href="https://visitlondon.com/" className="btn btn-primary">
              More Information
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
