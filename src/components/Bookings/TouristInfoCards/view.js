import styled from "styled-components";

export const Card = styled.div`
  width: 28.5rem;
  height: 300px;
  margin: 20px 5px 10px;
  perspective: 1000px;
  transition: all 1s;
  border: 3px solid greenyellow;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px !important;
    transform: scale(1.06);
  }
`;

export const CardImg = styled.img`
  border-radius: 20px;
`;

export const CardDesc = styled.div`
  width: 90%;
  top: 5%;
  left: 5%;
`;

export const CardInner = styled.div`
  transition: transform 1s;
  transform-style: preserve-3d;

  ${Card}:hover & {
    transform: rotateY(180deg);
  }
`;

export const CardFront = styled.div`
  width: 90%;
  height: 85%;
  backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  `;

export const CardBack = styled.div`
  width: 90%;
  height: 85%;
  backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  border-radius: 20px;
  background: linear-gradient(45deg, #4b79a1, #283e99);
  transform: rotateY(180deg);
`;
