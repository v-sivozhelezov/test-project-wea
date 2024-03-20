import styled from "styled-components";

export const TableWeatherList = styled.ul`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  margin: 10px;
  align-items: center;
  gap: 5px;
  @media (max-width: 650px) {
    gap: 0;
    margin: 5px;
  }
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

export const TableWeatherListImg = styled.img`
  @media (max-width: 650px) {
    scale: 0.5;
  }
`;

export const TableWeatherListText = styled.p`
  @media (max-width: 549px) {
    display: none;
  }
`;
