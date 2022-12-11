import React from "react";

const TouristInfoCards = () => {
  return (
    <div class="card">
      <div class="card-body">
        <img
          src="https://media.istockphoto.com/id/469974825/photo/squinty-bridge-glasgow.jpg?s=612x612&w=is&k=20&c=3TuaFgweDqkc0mCWZgXeYiO-Z12TWOXl9F2hPics2Hc="
          class="card-img-Glasgow"
          alt="Glasgow-images"
        />
        <h1 class="card-title">Glasgow</h1>
        <p class="card-text">
          It is the most beautiful city in the Uk to visit, The real traditional
          cities still preserve. the sea coast is the most beatiful one{" "}
        </p>
        <a
          href="http://peoplemakeglasgow.com/"
          class="btn btn-primary"
          target="_blank"
        >
          More Information
        </a>
      </div>
      <div class="card-body">
        <img
          src="https://media.istockphoto.com/id/178490368/photo/media-city.jpg?s=612x612&w=is&k=20&c=h1rqQCd22ohr92PTwt0ts6eyP-EfYydXLLZEdaAzHEU="
          alt="Manchester-image"
        />
        <h1 class="card-title">Manchester</h1>
        <p class="card-text">
          Center of the UK industries in the 19th Centry. Vibrante night. People
          are welcoming and accomoditive. The old-trafford is just working
          distance from the city center
        </p>
        <a
          href="https://www.visitmanchester.com/"
          class="btn btn-primary"
          target="_blank"
        >
          More Information
        </a>
      </div>
      <div class="card-body">
        <img src="https://media.istockphoto.com/id/526834951/photo/night-skyline-of-city-of-london-with-high-buildings-in-view.jpg?s=612x612&w=is&k=20&c=T777TtL3NYpQO1M7KlbFvqKtvNPjpwE1yYf_kcmNsA4=" />
        <h1 class="card-title">London</h1>
        <p class="card-text">
          Multicultural city to visit and the hosting city of the royal family{" "}
        </p>
        <a
          href="https://www.visitmanchester.com/"
          class="btn btn-primary"
          target="_blank"
        >
          More Information
        </a>
      </div>
    </div>
  );
};

export default TouristInfoCards;
