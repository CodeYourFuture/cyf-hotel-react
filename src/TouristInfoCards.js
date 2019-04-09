import React from "react";

const TouristInfoCards = () => {
  return (
    <div className="row-cards">
      <div class="card" style={{ width: 18 + "rem" }}>
        <img
          src="https://www.saga.co.uk/contentlibrary/saga/publishing/verticals/travel/city-guides/glasgow-cathedral.jpg"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">Visit Glasgow</h5>

                  <a href="https://www.peoplemakeglasgow.com" class="btn btn-btn btn-danger">
            More info
          </a>
        </div>
      </div>

      <div class="card" style={{ width: 18 + "rem" }}>
        <img
          src="http://www.whileimyoung.com/wp-content/uploads/2017/11/67264FF2-026B-4012-A345-97E8537DE5A1.jpg"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">Visit Manchester</h5>

          <a href="https://www.visitmanchester.com " class="btn btn-danger">
            More info
          </a>
        </div>
      </div>

      <div class="card" style={{ width: 18 + "rem" }}>
        <img
          src="https://previews.123rf.com/images/jovannig/jovannig1412/jovannig141200505/34758322-london-skyline-with-st-paul-cathedral-magnificence-at-sunset-.jpg"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">Visit London</h5>

          <a href="https://www.visitlondon.com" class="btn btn-danger">
            More info
          </a>
        </div>
      </div>
    </div>

    /* 
    <div class="card">
      <div class="card-body">
              <a href="https://www.peoplemakeglasgow.com" class="card-link">
          Card link
        </a>
              <a href="https://www.visitmanchester.com " class="card-link">
          Another link
        </a>
              <a href="https://www.visitlondon.com" class="card-link">
          Another link
        </a>
      </div>
    </div> */
  );
};

export default TouristInfoCards;
