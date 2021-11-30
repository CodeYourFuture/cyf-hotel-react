import React from "react";

import PropTypes from "prop-types";

// Styles
import { Wrapper } from "./SearchButton.styles";

const SearchButton = ({ text, functionality }) => (
  <Wrapper type="button" onClick={functionality}>
    {text}
  </Wrapper>
);

SearchButton.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  functionality: PropTypes.func
};

export default SearchButton;
