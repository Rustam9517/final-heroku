import styled from "styled-components";
export const CoinsMainDiv = styled.div`
  width: 95%;
  @media (min-width: 320px) and (max-width: 480px){
      width: 100%;
    }
  #Advanced {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 0;
    @media (min-width: 320px) and (max-width: 480px){
       width: 100%!important;
       margin: 0;
    } 
  }
  #SearchBlock {
    padding-left: 40px;
    @media (min-width: 320px) and (max-width: 480px){
      padding: 0 0 0 20px;
      width: 100%;
    }
    a{
        @media (min-width: 320px) and (max-width: 480px){
          width: 20%;
          margin: 0;
        }
    }
  }
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30%;
    text-decoration: none;
    margin: 20px;
    @media (min-width: 320px) and (max-width: 480px){
      width: 100%;
      margin: 0 0 15px 0;
    }
    .coinName {
      font-family: Roboto, sans-serif;
      font-weight: bold;
      font-size: 16px;
      line-height: 19px;
      color: #833ae0;
      padding-bottom: 12px;
      @media (min-width: 320px) and (max-width: 480px){
        padding-bottom: 0;
        font-size: 13px;
      }
    }
    .coinInfo {
      font-family: Roboto, sans-serif;
      font-size: 12px;
      line-height: 125.5%;
      color: #000000;
      @media (min-width: 320px) and (max-width: 480px){
       font-size: 10px;
    }
    }
  }
`;
export const CoinListBlock = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  @media (min-width: 1024px) and (max-width: 1280px) {
    justify-content: space-around;
  }
  @media (min-width: 320px) and (max-width: 480px){
      padding-top: 20px;
       flex-wrap: nowrap;
       flex-direction: column;
       justify-content: center;
       align-items: center;
  }
`;
export const CoinSelf = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    display: inline-block;
    margin-right: 30px;
    width: 120px;
    @media (min-width: 320px) and (max-width: 480px){
       width: 70px;
       margin-right: 10px;
    }
  }
  @media (min-width: 1024px) and (max-width: 1280px) {
    width: 100%;
  }
  @media (min-width: 320px) and (max-width: 480px){
      width: 100%;
    }
`;
export const CoinInfo = styled.div`
  width: 50%;
`;
