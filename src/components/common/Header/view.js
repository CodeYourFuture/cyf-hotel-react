import styled, { css, keyframes } from "styled-components";

const logoSpin = keyframes({
  from: {
    transform: "rotateY(0deg)",
  },
  to: {
    transform: "rotateY(360deg)",
  },
});

export const Heading = styled.div({
  backgroundColor: "#222",
  height: 60,
  color: "white",
  fontSize: "0.7em",
  fontWeight: "bold",
});

export const Logo = styled.img({
  animation: css`${logoSpin} infinite 20s ease-in-out`,
  width: 120,
  padding: "0 35px",
});

export const Title = styled.div({
  fontSize: "2em",
});

export const PrideMonth = styled.div({
  width: "100vw",
  height: "0.5rem",
  background:
    "linear-gradient(90deg, rgb(100, 91, 83) 0%, rgb(235, 82, 82) 18.23%,rgb(247, 143, 47) 34.37%,rgb(244, 193, 81) 48.96%,rgb(82, 187, 118) 66.15%,rgb(38, 165, 215) 82.29%,rgb(224, 105, 183) 100%)",
});
