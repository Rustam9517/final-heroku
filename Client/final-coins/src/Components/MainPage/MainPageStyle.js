import styled from "styled-components";

export const MainCoinBlock = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  width: 95%;
  margin: 0 auto;
  @media (min-width: 320px) and (max-width: 480px){
      justify-content: center;
      align-items: center;
  }
`;

export const CoinBlock = styled.div`
  padding-top: 50px;
  h3 {
    font-family: Roboto, sans-serif;
    font-weight: bolder;
    font-size: 28px;
    line-height: 100%;
    color: #000000;
    padding-bottom: 10px;
    @media (min-width: 320px) and (max-width: 480px){
      font-size: 18px;
    }
  }
  a {
    font-family: Roboto, sans-serif;
    font-weight: 300;
    font-size: 14px;
    line-height: 109%;
    color: #000000;
    text-decoration: none;
    img {
      display: inline-block;
      width: 9px;
      margin-left: 3px;
      transform: rotate(-90deg);
      padding: 0;
    }
    @media (min-width: 320px) and (max-width: 480px){
      text-align: center;
  }
  }
  img {
    display: block;
    width: 212px;
    padding-top: 15px;
    @media (min-width: 320px) and (max-width: 480px){
       width: 150px;
       margin:  0 auto;
       padding-right: 0;
  }
  }
   @media (min-width: 320px) and (max-width: 480px){
      text-align: center;
  }
`;

export const Coins = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  @media (min-width: 1024px) and (max-width: 1280px) {
    width: 100%;
  }
  @media (min-width: 320px) and (max-width: 480px){
      flex-direction: column;
      justify-content: center;
      align-items: center;
  }
`;
