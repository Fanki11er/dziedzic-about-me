import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 555px;
  display: flex;
  position: relative;
  margin-top: 79px;
  align-items: center;

  @media screen and (min-width: 1600px) {
    height: 700px;
    margin-top: 115px;
  }

  @media screen and (max-width: 1280px) {
    height: 500px;
  }

  @media screen and (max-width: 960px) {
    height: 400px;
  }

  @media screen and (max-width: 768px) {
    height: 300px;
    margin-top: 60px;
  }

  @media screen and (max-width: 560px) {
    width: 150%;
    min-width: ${({ theme }) => theme.minScreen};
    margin-top: 60px;
  }
`;
