import styled from "styled-components";

export const Wrapper = styled.div`
  background: rgba(0, 100, 200, 0.8);
  padding: 0 20px;
  display: flex;
  justify-content: flex-start;
`;

export const Content = styled.div`
  color: var(--white);
  font-weight: 800;
`;

export const LogoImg = styled.img`
  width: 200px;

  @media screen and (max-width: 500px) {
    width: 150px;
  }
`;
