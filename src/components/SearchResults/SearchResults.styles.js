import styled from "styled-components";

export const Wrapper = styled.div`
  overflow-x: auto;
`;

export const Content = styled.div`
  width: 100%;

  table {
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
    border: 10px outset rgba(200, 0, 0, 0.1);

    th,
    td {
      text-align: left;
      padding: 8px;
    }

    tr:nth-child(even) {
      background-color: rgba(0, 100, 200, 0.2);
    }

    .tr.active {
      background-color: rgba(200, 0, 0, 0.1);
    }
  }
`;
