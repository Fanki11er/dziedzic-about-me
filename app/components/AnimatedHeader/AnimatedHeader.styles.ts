import styled from "styled-components";
//!! FIX !!
export const HeaderWrapper = styled.div`
  width: 100%;
  min-width: 340px;
  height: 105px;
  margin: 0 0 40px 90px;
  opacity: 0;

  #second-main-header,
  #second-small-header {
    opacity: 0;
    display: none;
  }

  @media screen and (max-width: 768px) {
    margin: 0 0 40px 30px;
  }
  @media screen and (max-width: 560px) {
    min-width: 200px;
  }
`;

export const SmallHeader = styled.h2`
  position: absolute;
  top: 0;
  left: 0;
  color: ${({ theme }) => theme.colors.veryLightBlue};
  margin: 10px 0 20px 10px;

  span {
    color: ${({ theme }) => theme.colors.orange};
  }

  @media screen and (max-width: 1024px) {
  }

  @media screen and (max-width: 960px) {
    font-size: calc(${({ theme }) => theme.fontSizes.S} - 0.3rem);
    margin: 20px 0 10px 8px;
  }

  @media screen and (max-width: 768px) {
    font-size: calc(${({ theme }) => theme.fontSizes.S} - 0.3rem);
    margin: 15px 0 10px 8px;
  }
`;

export const SecondSmallHeder = styled(SmallHeader)`
  top: initial;
  bottom: -80px;
  left: 290px;

  @media screen and (min-width: 1600px) {
    bottom: -80px;
    left: 200px;
  }

  @media screen and (max-width: 1280px) {
    bottom: -55px;
    left: 150px;
  }

  @media screen and (max-width: 960px) {
    bottom: -20px;
    left: 80px;
  }

  @media screen and (max-width: 768px) {
    left: 85px;
  }

  @media screen and (max-width: 768px) {
    bottom: -20px;
  }
`;

export const MainHeader = styled.div`
  position: absolute;
  bottom: -15px;
  left: 0;
  color: ${({ theme }) => theme.colors.veryLightBlue};
  font-size: ${({ theme }) => theme.fontSizes.L};
  font-weight: bold;
  margin: 0 0 20px 0;
  line-height: 40px;

  span {
    color: ${({ theme }) => theme.colors.orange};
    margin-left: 5px;
  }

  @media screen and (min-width: 1600px) {
    line-height: 55px;
    margin: 20px 0 0 0;
  }

  @media screen and (max-width: 960px) {
    font-size: calc(${({ theme }) => theme.fontSizes.M} - 0.3rem);
    margin: 5px 0 35px 0;
    line-height: 30px;
  }

  @media screen and (max-width: 768px) {
    margin: 0px 0 25px 0;
    line-height: 25px;
  }

  @media screen and (max-width: 560px) {
    margin: 5px 0 20px 0;

    bottom: -5px;
  }
`;
