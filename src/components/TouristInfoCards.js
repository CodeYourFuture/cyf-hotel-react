import React from "react";

function TouristInfoCards() {
  return (
    <div data-testid="header-1" className="container">
      <h2>Are you looking for Places to visit in uk, Find it here</h2>
      <article className="col1">
        <img
          src="https://www.ephotozine.com/resize/2018/25/xlrg/1616_1529882978.jpg?RTUdGk5cXyJFAQgJSEc4egtnfAYYGkVUGwBdOh80SxgRBAAhdSMKY1dhB2osTU0LIjUVDw=="
          width="200px"
          height="200px"
          alt=""
          className="article-img-top"
        />
        <div className="class-p1">
          <p>
            Glasgow is the best shopping{" "}
            <strong>city.Glasgow's city centre </strong>is home to flagship
            stores, impressive shopping centres and designer favourites all
            creators which makes for a thriving and exciting independent
            shopping scene.The city is also rich in artists and creators which
          </p>
          <a href="Booking" className="btn btn-primary">
            Booking Now
          </a>
          <br />
          <a href="https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F3e%2Fbf%2Fdf%2F3ebfdfee1cffa25785a6b15f2c2d3952.jpg&imgrefurl=https%3A%2F%2Fwww.pinterest.co.uk%2Fpin%2F489977634451969059%2F&tbnid=LaQ8_adnxmdxWM&vet=12ahUKEwiXgvemkf33AhUIdBoKHfzaBAAQMygDegUIARDIAQ..i&docid=TNxyVW7SG-BKuM&w=750&h=530&q=glasgow%20tourist%20map&ved=2ahUKEwiXgvemkf33AhUIdBoKHfzaBAAQMygDegUIARDIAQ">
            Glasgow-map
          </a>
        </div>
      </article>
      <article className="col2">
        <img
          src="https://blog.redletterdays.co.uk/wp-content/uploads/2017/01/show-brooke-2.jpg"
          width="200"
          height={200}
          alt=""
          className="article-img-top"
        />
        <div className="class-p1">
          <p>
            Greater
            <strong> Manchester</strong> where you can search for things to do
            and find out what's on, as well as. one of the most exciting places
            to visit in the UK right now where everybody is very warmly welcomed
            Manchester city centre is jam- packed with unique and restaurants,
            bars,shops, museums,
          </p>
          <a href="Booking" className="btn btn-primary">
            Booking Now
          </a>

          <br />

          <a href="https://www.google.com/search?q=manchester+map&oq=manchesster+map&aqs=chrome.1.69i57j0i13j46i13j0i13l3j46i13j0i13l3.16134j0j9&sourceid=chrome&ie=UTF-8#">
            Manchester-map
          </a>
        </div>
      </article>
      <article className="col3">
        <img
          src="https://cdn.londonandpartners.com/-/media/images/london/visit/things-to-do/sightseeing/london-attractions/tower-bridge/thames_copyright_visitlondon_antoinebuchet640x360.jpg?mw=640&hash=27AEBE2D1B7279A196CC1B4548638A9679BE107A"
          width="200px"
          height="200px"
          alt=""
          className="article-img-top"
        />
        <div className="class-p1">
          <p>
            visit London, . Find things <strong>to do in London</strong>, from
            iconic sightseeing spots and fun-filled days out top
            restaurants,stores to high street retailer plan ahead to make stores
            to high the most of your next visit .Navigate London with ease with
            this guide to the latest information
          </p>

          <a href="Booking" className="btn btn-primary">
            Booking Now
          </a>
          <br />
          <a href="https://www.google.com/search?q=london-map&oq=london-map&aqs=chrome..69i57j0i30l9.7233j0j7&sourceid=chrome&ie=UTF-8#">
            London-map
          </a>
        </div>
      </article>
    </div>
  );
}

export default TouristInfoCards;
