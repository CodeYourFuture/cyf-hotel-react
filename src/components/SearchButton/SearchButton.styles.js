import styled from "styled-components";

export const Wrapper = styled.button`
  display: block;
  background: rgba(0, 100, 200, 0.8);
  width: 25% auto;
  min-width: 200px;
  height: 60px;
  border-radius: 30px;
  color: var(--white);
  border: 0;
  font-size: var(--fontBig);
  margin: 20px auto;
  transition: all 0.3s;
  outline: none;
  cursor: pointer;

  a {
    text-decoration: none;
    color: var(--white);
  }

  :hover {
    opacity: 0.8;
  }

  @media screen and (max-width: 950px) {
    width: 25% auto;
    min-width: 60px;
    height: 60px;
  }
`;
