import React from "react";

function TouristInfoCards() {
  return (
    <div className="headerImg">
      <div className="card">
        <img
          src="https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/27/6c/33.jpg"
          className="card-img-top"
        />
        <p>
          From independent stores to high street retailers, Glasgow is the best
          shopping city. Glasgow's city centre is home to flagship stores,
          impressive shopping centres and designer favourites all within an
          easily walkable area. The city is also rich in artists and creators
          which makes for a thriving and exciting independent shopping scene...
        </p>
        <div className="card-body">
          <a href="https://peoplemakeglasgow.com/" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://media.istockphoto.com/id/1294454411/photo/london-symbols-with-big-ben-double-decker-buses-and-red-phone-booth-in-england-uk.jpg?b=1&s=170667a&w=0&k=20&c=SR5FBt8VvpZEOIxZcTmoEf9XxU0oiSnbobD3E6ZB358="
          className="card-img-top"
        />
        <p>
          Get off the beaten track and feel like a Londoner by exploring the
          many exciting London neighbourhoods. These London areas are full of
          hidden gems, lesser-known attractions and independent shops and
          restaurants. You’ll soon find the best London areas for you – and you
          may not want to leave!...
        </p>
        <div className="card-body">
          <a href="https://www.visitlondon.com/" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://media.istockphoto.com/id/1313298677/photo/autumn-in-manchester-new-hampshire.jpg?b=1&s=170667a&w=0&k=20&c=HorrwlIcpOPXBw0RNLY06OkprjLADWAH8bNoAPQqEn8="
          className="card-img-top"
        />
        <p>
          Manchester is the only UK city to feature in Lonely Planet's Best in
          Travel 2023 list and the only UK city in National Geographic's
          influential ‘Best of the World’ list which annually sets out 25 of the
          must-see places to visit around the globe. Known throughout the world
          as the birthplace of the industrial revolution, Manchester has a proud
          history in science, politics, music, arts and sport...
        </p>
        <div className="card-body">
          <a
            href="https://www.visitmanchester.com/"
            className="btn btn-primary"
          >
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}

export default TouristInfoCards;
