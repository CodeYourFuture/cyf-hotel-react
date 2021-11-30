import React from "react";

import PropTypes from "prop-types";

// Styles
import { Wrapper } from "./SearchButton.styles";

const SearchButton = ({ text }) => <Wrapper type="button">{text}</Wrapper>;

SearchButton.propTypes = {
  text: PropTypes.string
};

export default SearchButton;
