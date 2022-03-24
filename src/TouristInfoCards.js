import React from "react";

const TouristInfoCards = () => {
  return (
    <section class="tourist-card">
      <div className="card">
        <img
          className="city-img"
          src="https://images.pexels.com/photos/5759959/pexels-photo-5759959.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="glasgow city"
        />
        <h1>Glasgow</h1>
        <p>
          A fantastic City in the heart of Scotland. In egestas urna vel nisi
          sodales semper. Donec id leo a ipsum viverra sagittis pharetra et
          odio. Phasellus tincidunt porta condimentum. Aenean pretium at ipsum
          sed rhoncus. Pellentesque aliquet turpis sem, non imperdiet dolor
          malesuada a.
        </p>
        <a
          className="btn btn-primary"
          href="https://peoplemakeglasgow.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          More about Glasgow
        </a>
      </div>
      <div className="card">
        <img
          className="city-img"
          src="https://images.pexels.com/photos/3220846/pexels-photo-3220846.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="London"
        />
        <h1>London</h1>
        <p>
          Capital of England. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Maecenas volutpat rhoncus dictum. Morbi nec vehicula mauris. Sed
          vitae nunc in est fringilla commodo ut a sem. Nullam quis luctus
          mauris. Donec id blandit arcu, non tempus mauris. Phasellus interdum
          ligula nec felis.
        </p>
        <a
          className="btn btn-primary"
          target="_blank"
          rel="noopener noreferrer"
          href="https://visitlondon.com"
        >
          More about London
        </a>
      </div>
      <div className="card">
        <img
          className="city-img"
          src="https://images.pexels.com/photos/7784807/pexels-photo-7784807.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="eagle-eye shot of Manchester City"
        />
        <h1>Manchester</h1>
        <p>
          A beautiful city in the north-weat of England. Sed vitae nunc in est
          fringilla commodo ut a sem. Nullam quis luctus mauris. Donec id
          blandit arcu, non tempus mauris. Phasellus interdum ligula nec felis.
          convallis, a iaculis neque egestas. Morbi lorem ligula, sodales eget
          auctor facilisis, faucibus id augue.
        </p>
        <a
          className="btn btn-primary"
          target="_blank"
          rel="noopener noreferrer"
          href="https://visitmanchester.com"
        >
          More about Manchester
        </a>
      </div>
    </section>
  );
};
export default TouristInfoCards;
