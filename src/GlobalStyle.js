import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle({
  "*": {
    userSelect: "none",
    MozUserSelect: "none",
    WebkitUserSelect: "none",
  },
});
