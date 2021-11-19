import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 20px;
  background-color: rgba(0, 100, 200, 0.9);
  color: white;
  text-align: center;

  ul {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
  }
`;

export const Content = styled.div`
  li {
    list-style: none;
  }
`;
