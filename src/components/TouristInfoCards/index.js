import React from "react";
import PropTypes from "prop-types";

// Styles
import { Wrapper, Image } from "./TouristInfoCards.styles";
import SearchButton from "../SearchButton";

const TouristInfoCards = ({ imageUrl, cityName, description, link }) => (
  <Wrapper>
    <Image src={imageUrl} alt="city-thumb" />
    <h3>{cityName}</h3>
    <p>{description}</p>
    <SearchButton
      key={cityName}
      text={
        <a href={link} target="_blank" rel="noopener noreferrer">
          Visit {cityName}
        </a>
      }
    />
  </Wrapper>
);

TouristInfoCards.propTypes = {
  imageUrl: PropTypes.string,
  cityName: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string
};

export default TouristInfoCards;
