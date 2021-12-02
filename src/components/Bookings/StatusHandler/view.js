import styled from "styled-components";

export const Image = styled.img`
  width: 7rem;
`;

export const Text = styled.span`
  font: italic bold 3rem "Montserrat", sans-serif;
  text-transform: uppercase;
  color: ${({ isLoad }) => (isLoad ? "orange" : "red")};
  letter-spacing: 1rem;
`;
