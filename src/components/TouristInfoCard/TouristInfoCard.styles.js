import styled from "styled-components";

export const Wrapper = styled.div`
  color: var(--white);
  background: rgba(200, 0, 0, 0.7);
  border-radius: 20px;
  margin: 5px 5px 5px 5px;
  text-align: center;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  width: 30%;

  h3 {
    margin: 10px 0 0 0;
    width: 80%;
  }

  p {
    margin: 5px 0;
    width: 80%;
  }

  @media screen and (max-width: 780px) {
    width: 40%;
  }

  @media screen and (max-width: 550px) {
    width: 60%;
  }
`;

export const Image = styled.img`
  width: 90%;
  height: 200px;
  object-fit: cover;
  border-radius: 15px;
`;
