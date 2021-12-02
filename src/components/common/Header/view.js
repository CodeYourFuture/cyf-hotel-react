import styled, { keyframes } from "styled-components";

const logoSpin = keyframes`
  from {
    transform: rotateY(0deg);
  }

  to {
    transform: rotateY(360deg);
  }
`;

export const Heading = styled.div`
  background-color: #333;
  height: 4.2rem;
  font-size: 0.7em;
`;

export const Logo = styled.img`
  animation: ${logoSpin} infinite 20s linear;
  width: 120px;
  padding: 2rem;
`;

export const Title = styled.div`
  font-size: 2em;
`;

export const PrideMonth = styled.div`
  height: 0.6rem;
  background: linear-gradient(
    90deg,
    rgb(100, 91, 83) 0%,
    rgb(235, 82, 82) 18.23%,
    rgb(247, 143, 47) 34.37%,
    rgb(244, 193, 81) 48.96%,
    rgb(82, 187, 118) 66.15%,
    rgb(38, 165, 215) 82.29%,
    rgb(224, 105, 183) 100%
  );
`;
