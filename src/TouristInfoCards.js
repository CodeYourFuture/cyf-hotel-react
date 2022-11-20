import React from "react";
import "./App.css";

function City(props) {
  return (
    <div className="card">
      <img src={props.imgLink} className="card-img-top" alt="" />
      <h2 className="Card-Title">{props.name}</h2>
      <p className="Card-Summary">{props.desc}</p>
      <div className="card-body">
        <a
          href={props.infoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          More Information
        </a>
      </div>
    </div>
  );
}

const TouristInfoCards = () => {
  return (
    <div className="InfoCards">
      <City
        name={"Glasgow"}
        desc={
          "Glasgow is the most populous city in Scotland and the fourth-most populous city in the United Kingdom, as well as being the 27th largest city by population in Europe.In 2020, it had an estimated population of635,640."
        }
        imgLink={
          "https://images.unsplash.com/photo-1571494146906-86de15d3817b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1088&q=80"
        }
        infoLink={"https://peoplemakeglasgow.com/"}
      />
      <City
        name={"Manchester"}
        desc={
          "Manchester is a city in Greater Manchester, England. It had a population of 552,000 in 2021. It is bordered by the Cheshire Plain to the south, the Pennines to the north and east, and the neighbouring city of Salfordto the west."
        }
        imgLink={
          "https://images.unsplash.com/photo-1515586838455-8f8f940d6853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuY2hlc3RlciUyMHVrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        }
        infoLink={"https://visitmanchester.com/"}
      />
      <City
        name={"London"}
        desc={
          "London is the capital and largest city of England and the United Kingdom, with a population of just under 9 million. It stands on the River Thames in south-east England at the head of a 50-mile (80 km) estuary down to the North Sea, and has been a major settlement for two millennia."
        }
        imgLink={
          "https://images.unsplash.com/photo-1602521519774-a530743d6ff2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8TG9uZG9uJTIwdWt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        }
        infoLink={"https://visitlondon.com/"}
      />
    </div>
  );
};

export default TouristInfoCards;
