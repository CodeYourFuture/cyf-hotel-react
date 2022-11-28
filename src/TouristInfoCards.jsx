import React from "react";

const TouristInfoCards = () => {
  return (
    <div className="Tourist-cards">
      {/*Card - 1*/}
      <div className="card">
        <img
          src="https://media.istockphoto.com/id/1211433221/photo/glasgow-city-skyline-from-kelvingrove-park.jpg?b=1&s=170667a&w=0&k=20&c=BMAtJJ63-KdKhP69A8wmPpkeMuhiIX-w29QFeQawjhc="
          className="card-img-top"
          alt="Glasgow"
        />
        <div className="card-body">
          <h3>Glasgow</h3>
          <p>
            Glasgow city in Scotland. Glasgow is a port city on the River Clyde
            in Scotland's western Lowlands. It's famed for its Victorian and art
            nouveau architecture, a rich legacy of the city's 18th–20th-century
            prosperity due to trade and shipbuilding. Today it's a national
            cultural hub, home to institutions including the Scottish Opera,
            Scottish Ballet and National Theatre of Scotland, as well as
            acclaimed museums and a thriving music scene.
          </p>
          <a
            target="_blank"
            href="https://peoplemakeglasgow.com/"
            className="btn btn-primary"
            rel="noopener noreferrer"
          >
            Read More
          </a>
        </div>
      </div>
      {/*Card - 2*/}

      <div className="card">
        <img
          src="https://t4.ftcdn.net/jpg/04/12/00/73/240_F_412007343_9eRPEGw8QHE6WfDiUdP1GUIB4zDv9Jw8.jpg"
          className="card-img-top"
          alt="Manchester"
        />
        <div className="card-body">
          <h3>Manchester</h3>
          <p>
            Manchester's unique character owes much to its pioneering past. The
            city was at the heart of the Industrial Revolution, when wealth from
            textile mills and factories helped develop Manchester and establish
            the University’s predecessor institutions, which in turn opened the
            doors of education to the British working classes. A revolutionary
            and progressive spirit infuses the history of both city and
            University. For the city, it led to new political thinking; the
            Chartist, trade union and suffragette movements can all trace their
            roots back to Manchester. For the University, it led to
            ground-breaking innovation in science and engineering that continues
            to this day, as Manchester gave the world atomic power, the first
            stored-program computers and the world’s strongest material,
            graphene. The city has an international sporting pedigree and one of
            the richest and most influential arts and music scenes. There are
            world-class events, venues and attractions to suit every lifestyle,
            with a lively, culturally diverse city centre that’s easy to enjoy
            on a student budget.
          </p>
          <a
            target="_blank"
            href="https://www.visitmanchester.com/"
            className="btn btn-primary"
            rel="noopener noreferrer"
          >
            Read More
          </a>
        </div>
      </div>
      {/*Card - 3*/}

      <div className="card">
        <img
          src="https://i.pinimg.com/564x/37/8f/73/378f738de27b9f34410fb92a3cb81d42.jpg"
          className="card-img-top"
          alt="London"
        />
        <div className="card-body">
          <h3>London</h3>
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
            target="_blank"
            href="https://www.visitlondon.com/"
            className="btn btn-primary"
            rel="noopener noreferrer"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
