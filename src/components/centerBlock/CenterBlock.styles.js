import styled from "styled-components";

export const CenterBlockHeading = styled.h2`
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 40px;
  text-align: center;
  letter-spacing: -0.8px;
  margin-top: 0;
  margin-bottom: 30px;
  @media (max-width: 650px) {
    font-size: 20px;
    margin-bottom: 10px;
  }
`;

export const CenterBlockSearchString = styled.div`
  width: 100%;
  border-bottom: 1px solid #4e4e4e;
  margin-bottom: 15px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  position: relative;
`;
export const SearchSVG = styled.svg`
  width: 17px;
  height: 17px;
  margin-right: 5px;
  stroke: #ffffff;
  fill: transparent;
`;

export const SearchText = styled.input`
  -webkit-box-flex: 100;
  -ms-flex-positive: 100;
  flex-grow: 100;
  background-color: transparent;
  border: none;
  padding: 5px 10px 5px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;

  &:focus {
    outline: none;
  }

  &::-webkit-search-cancel-button {
    -webkit-appearance: none;
  }

  @media (max-width: 650px) {
    font-size: 12px;
  }
`;

export const ClearButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  position: absolute;
  top: 5px;
  right: 80px;
`;

export const ClearButtonImg = styled.img`
  height: 25px;
  width: 25px;
  cursor: pointer;
`;

export const messageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const ErrorMessage = styled.span`
  color: red;
  margin-bottom: 10px;
`;

export const LoadingMessage = styled.span`
  color: #fff;
  margin-bottom: 10px;
`;

export const SearchButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: 1px solid rgb(78, 78, 78);
  padding: 4px 10px;
  border-radius: 5px;
  color: rgba(255, 255, 255, 0.87);

  &:hover {
    background-color: #fff;
    color: rgb(24, 24, 24);
  }

  @media (max-width: 650px) {
    font-size: 12px;
    padding: 2px 5px;
    &:hover {
      background-color: transparent;
      color: rgba(255, 255, 255, 0.87);
    }
  }
`;
