import styled from "styled-components";

export const CurrentWeatherContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  gap: 5px;
  @media (max-width: 549px) {
    margin-bottom: 15px;
    gap: 0;
  }
`;

export const CurrentWeatherHeading = styled.h2`
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 40px;
  text-align: center;
  letter-spacing: -0.8px;
  margin-top: 0;
  @media (max-width: 549px) {
    font-size: 20px;
  }
`;

export const CurrentWeatherImg = styled.img`
  @media (max-width: 650px) {
    width: 45px;
  }
`;

export const TableWeatherList = styled.ul`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  margin: 10px;
  align-items: center;
  gap: 5px;
`;

export const TableWeatherListHeader = styled.li`
  text-align: left;
`;

export const TableWeatherListItem = styled.li`
  text-align: center;
`;

export const ListItemBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
