import styled from "styled-components";

export const CenterBlockContainer = styled.div`
  max-width: 1120px;
  margin-top: 20px;
  height: 100vh;
  justify-content: center;
  align-items: center;
  margin-left: calc(50% - (1120px / 2));
  margin-right: calc(50% - (1120px / 2));
  @media (max-width: 1160px) {
    margin: 20px;
  }
`;
