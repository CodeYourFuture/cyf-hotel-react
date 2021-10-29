import React from "react";

function TouristInfoCards() {
  return (
    <div className="d-flex justify-content-center   tour_card">
      <div className="card  text-center border-info m-2">
        <img
          src="https://peoplemakeglasgow.com/imager/general/43423/St_Mungo_Mural_8dc3bdbc8660ad389ec95cdf9b15d797.jpeg"
          className="card-img-top"
        />
        <div className="card-body ">
          <h2>Glasgow</h2>
          <p>
            In recent years, many of Glasgow's lanes and buildings have
            undergone colourful makeovers by talented street artists. You can
            explore these amazing works of urban art at your own pace or on a
            guided tour by Walking Tours in Glasgow.
          </p>
          <a
            href="https://www.peoplemakeglasgow.com/"
            className="btn btn-secondary"
          >
            More Information
          </a>
        </div>
      </div>

      <div className="card  text-center ml-5 border-info m-2">
        <img
          src="https://eu-assets.simpleview-europe.com/manchester2016/imageresizer/?image=%2Fdmsimgs%2FBusy_mall1200x619_136550926.jpg&action=ProductDetailFullWidth2"
          className="card-img-top"
        />
        <div className="card-body">
          <h2>Manchester</h2>
          <p>
            Latest information on store openings and opening times: Manchester
            Arndale opening hours will be Monday-Friday 9am-8pm, Saturday
            9am-7pm and Sunday 11.30am-5.30pm. Individual store times may vary
            so please check with brands directly before your visit.
          </p>
          <a
            href="https://www.visitmanchester.com/"
            className="btn btn-secondary"
          >
            More Information
          </a>
        </div>
      </div>

      <div className="card  text-center ml-5 border-info m-2">
        <img
          src="https://cdn.londonandpartners.com/-/media/images/london/visit/things-to-do/sightseeing/london-attractions/london-eye/lastminutelondoneye640x360.jpg?mw=640&hash=369C7DBB3A75160763BFD8572303D124F316A65C"
          className="card-img-top"
        />
        <div className="card-body">
          <h2>London</h2>
          <p>
            From the modern London Eye to the historic Tower of London, the top
            10 tourist attractions in London are a must-see on any London
            sightseeing trip. Even better, many London landmarks are free to
            visit. Use the London attractions map to find them all.
          </p>
          <a href="https://www.visitlondon.com/" className="btn btn-secondary">
            More Information
          </a>
        </div>
      </div>
    </div>
  );
}

export default TouristInfoCards;
