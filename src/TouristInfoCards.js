import React from "react";
const TouristInfoCards = () => {
  return (
    <div>
      <div class="container text-center">
        <div class="row">
          <div class="col">
            <div class="card">
              <img
                src="http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcTF9OtLxnbxSpLFzyhzXERKiAbnHlG25WfRzxRTNcRiTk0lHvsOXNKH9KNAOvTWi_sS"
                class="card-img-top"
                alt=""
              />
              <div class="card-body">
                <h3 class="card-title">London</h3>
                <p class="">
                  London, the capital of England and the United Kingdom, is a
                  21st-century city with history stretching back to Roman times.
                  At its centre stand the imposing Houses of Parliament.
                </p>
                <a href="https://www.visitlondon.com/" class="btn btn-primary">
                  visit London
                </a>
              </div>
            </div>
          </div>
          <div class="col">
            {" "}
            <div class="card">
              <img
                src="http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQsLkgnpO7TQnLYH3SvohTmj_1QnWt1MSJwHtDorwWtgjnwUdZoA_uejreL1I1R5wEJ"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h3 class="card-title">Glasgow</h3>
                <p class="">
                  Glasgow is a port city on the River Clyde in Scotland's
                  western Lowlands. It's famed for its Victorian and art nouveau
                  architecture, a rich legacy of the city's 18th–20th-century
                </p>
                <a
                  href="https://peoplemakeglasgow.com/"
                  class="btn btn-primary"
                >
                  Visit Glasgow
                </a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img
                src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTE9busioBZvvfzlJcmQIww7I91t7CuZh_6aOel4QsdHSDM10vTg4RbNPqbOQ&s=19"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h3 class="card-title">Manchester</h3>
                <p class="">
                  Manchester is a major city in the northwest of England with a
                  rich industrial heritage. The Castlefield conservation area’s
                  18th-century canal system recalls the city’s days as a textile
                  powerhouse.
                </p>
                <a
                  href="https://www.visitmanchester.com/"
                  class="btn btn-primary"
                >
                  visit Manchester
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TouristInfoCards;
