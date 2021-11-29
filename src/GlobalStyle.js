import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;

    ::-webkit-scrollbar {
      width: 0.8em;
    }
    
    ::-webkit-scrollbar-thumb {
      background-color: #babac0;
      border-radius: 1rem;
      border: 0.1rem solid #fff;

      &:hover {
        border: 0.22em solid #f4f4f4;
      }
    }
  }
`;
