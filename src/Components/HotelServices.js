import React from "react";

const HotelServices = () => {
  return (
    <div id="services" className="container py-4">
      <h2 className="text-center mb-4">Our Services</h2>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card h-100 border-0 shadow service-card">
            <div className="card-body text-center">
              <i className="bi bi-wifi h1 text-primary mb-3"></i>
              <h5 className="card-title">Free Wi-Fi</h5>
              <p className="card-text">
                Stay connected with our high-speed Wi-Fi available throughout
                the hotel.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100 border-0 shadow service-card">
            <div className="card-body text-center">
              <i className="bi bi-umbrella h1 text-primary mb-3"></i>
              <h5 className="card-title">Poolside Lounge</h5>
              <p className="card-text">
                Relax and unwind by our poolside lounge area with refreshing
                drinks and snacks.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100 border-0 shadow service-card">
            <div className="card-body text-center">
              <i className="bi bi-geo-alt h1 text-primary mb-3"></i>
              <h5 className="card-title">Concierge Service</h5>
              <p className="card-text">
                Our dedicated concierge team is available 24/7 to assist you
                with all your needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelServices;
