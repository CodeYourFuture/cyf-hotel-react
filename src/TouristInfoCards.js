import React from "react";

const Card = () => {
  return (
    <div className="card-container d-flex justify-content-around my-3">
      <div className="card">
        <img
          src="https://www.thescottishsun.co.uk/wp-content/uploads/sites/2/2020/02/NINTCHDBPICT000505653397.jpg"
          alt="People Make Glasgow"
          className="card-img-top"
        />
        <div className="card-body">
          <p>
            Glasgow is the most populous city in Scotland and the fourth-most
            populous city in the United Kingdom, as well as being the 27th
            largest city by population in Europe. In 2020, it had an estimated
            population of 635,640. Historically part of Lanarkshire, the city
            now forms the Glasgow City council area, one of the 32 council areas
            of Scotland, and is governed by Glasgow City Council. Glasgow is
            situated on the River Clyde in the country's West Central Lowlands.
            It is the fifth-most visited city in the United Kingdom.
          </p>
          <a
            href="https://peoplemakeglasgow.com/"
            className="btn btn-primary"
            target="_blank"
          >
            More Information
          </a>
        </div>
      </div>
      {/* Manchester */}
      <div className="card">
        <img
          src="https://manchestersightseeingtours.com/wp-content/uploads/Cityscape-from-No1-Peters-Square-Manchester-07-%C2%A9-Marketing-Manchester-and-Rich-J-Jones-1-320x235.jpg"
          alt="Discover Manchester"
          className="card-img-top"
        />
        <div className="card-body">
          <p>
            Welcome to the official tourism site of Greater Manchester where you
            can search for things to do in Manchester and find out what's on, as
            well as getting inspiration for your visit to this fantastic city
            region. Youthful, diverse, energetic and bursting with character;
            Manchester is one of the most exciting places to visit in the UK
            right now where everybody and anybody is very warmly welcomed.
          </p>
          <a
            href="https://www.visitmanchester.com/"
            className="btn btn-primary"
            target="_blank"
          >
            More Information
          </a>
        </div>
      </div>
      {/* London */}
      <div className="card">
        <img
          src="https://capcaweb.net/wp-content/uploads/2016/05/London.jpg"
          alt="Discover London"
          className="card-img-top"
        />
        <div className="card-body">
          <p>
            Welcome to London! Discover the best of London with Visit London,
            the official guide to England’s exciting capital. Find things to do
            in London, from iconic sightseeing spots and fun-filled days out to
            top restaurants, theatre and unmissable London events. If you’re not
            able to visit just yet, plan ahead to make the most of your next
            visit.
          </p>
          <a href="visitlondon.com" className="btn btn-primary" target="_blank">
            More Information
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
