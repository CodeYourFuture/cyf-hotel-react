import React from "react";

const TouristInFoCards = () => {
  return (
    <div className="card-container">
      <div className="card">
        <img
          src="https://digital.ihg.com/is/image/ihg/voco-glasgow-6723092264-4x3"
          alt=""
          className="card-img-top"
        />
        <div className="card-body">
          <h2 className="card-title">Glasgow</h2>
          <p className="card-text">
            Glasgow’s newest budget hotel located in the heart of Glasgow City
            Centre at the edge of the vibrant Style Mile. A newly refurbished
            budget hotel with 42 bedrooms all ensuite. St.Enoch hotel is
            situated just 2 minutes away …
          </p>
          <a href="https://peoplemakeglasgow.com" className="btn btn-primary">
            Go Somewhere
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://t-ec.bstatic.com/data/explorer_city/max800/459/4595.jpg"
          alt=""
          className="card-img-top"
        />
        <div className="card-body">
          <h2 className="card-title">Manchester</h2>
          <p className="card-text">
            Saving Money Is Easy, Thanks To Our Affordable Rates, Hotel Deals
            And Travel Discounts. Love To Save Money When You Travel? It's Easy
            When You Plan Ahead. Book Direct and Save Media Center, Travel
            Agents, Investor Relations, Customer Support, Franchise Info ...
            Amenities: Free WiFi, Fitness Centre, Business Centre, Restaurant,
            Laundry
          </p>
          <a
            href="https://www.visitmanchester.com/"
            className="btn btn-primary"
          >
            Go Somewhere
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://th.bing.com/th/id/R.7674b48fb0a3cd947de7055e53ea8b55?rik=LGwFiM2tS8VrKw&riu=http%3a%2f%2fwww.travelweekly.com%2fuploadedImages%2fAll_TW_Art%2f2018%2f0611%2fT0611MANDARINHYDE_HR.jpg%3fn%3d4239%26width%3d1540%26height%3d866%26mode%3dcrop%26Anchor%3dMiddleCenter&ehk=Y08Tt53R%2f0GvT6j%2bBZyuAy8IM0gH5X9xo%2f1jbQIXWXw%3d&risl=&pid=ImgRaw&r=0"
          alt=""
          className="card-img-top"
        />
        <div className="card-body">
          <h2 className="card-title">London</h2>
          <p className="card-text">
            Feel at Home in London. Book a accommodation from Airbnb! AirCover -
            The Most Comprehensive Free Protection in Travel. What guests are
            saying about homes in London ... airbnb.co.uk has been visited by
            100K+ users in the past month Best prices · Verified Guest Reviews ·
            Answers about COVID-19 Types: Entire Apartments, Private Rooms,
            Chalets, Flat Shares, Luxury Rooms
          </p>
          <a href="https://www.visitlondon.com/" className="btn btn-primary">
            Go Somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default TouristInFoCards;
