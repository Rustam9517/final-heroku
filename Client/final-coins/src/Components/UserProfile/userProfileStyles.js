import styled from "styled-components";

export const UserProfileMain = styled.div`
  display: flex;
  justify-content: space-around;
  width: 95%;
  @media (min-width: 1024px) and (max-width: 1280px) {
    justify-content: space-between;
    margin: 0 auto;
  }
  h2 {
    width: 100%;
    text-align: center;
    padding-bottom: 30px;
  }
  @media (min-width: 320px) and (max-width: 480px){
     flex-direction: column;
  }
`;
export const UserAvatar = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  padding-bottom: 30px;
  @media (min-width: 320px) and (max-width: 480px){
      justify-content: center;
      align-items: center;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  @media (min-width: 320px) and (max-width: 480px){
     justify-content: center;
  }
  h2{
    text-align: left;
    @media (min-width: 320px) and (max-width: 480px){
     text-align: center;
    }
  }
  p {
       width: 100%;
      font-family: Roboto, sans-serif;
      font-weight: 500;
      font-size: 12px;
      line-height: 109%;
      /* or 15px */
      color: #c0c0c0;
      text-align: left;
      margin: 0 !important;
      @media (min-width: 320px) and (max-width: 480px){
        width: 90%;
      }  
  }  
  label {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    margin-bottom: 10px;
    @media (min-width: 320px) and (max-width: 480px){
      justify-content: center;
    }    
    input {
      width: 60%;
      padding: 10px 0;
      border: none;
      background-color: transparent;
      text-align: left;
    }
    button {
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      width: 70px;
      background: #833ae0;
      margin-left: 10px;
      border: none;
      outline: none;
      padding: 10px 15px;
      color: #ffffff;
      border-radius: 6px;
      font-size: 15px;
    }
  }
`;

export const UserProfPic = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #833ae0;
  width: 112px;
  height: 112px;
  margin: 5px;
  p {
    font-size: 30px;
    color: white;
  }
`;
export const CoinHistoryList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 30%;
  @media (min-width: 1024px) and (max-width: 1280px) {
    width: 60%;
  }
  @media (min-width: 320px) and (max-width: 480px){
    width: 100%;
  }  
  a {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    text-decoration: none;
    margin-bottom: 20px;
    .coinName {
      font-family: Roboto, sans-serif;
      font-weight: bold;
      font-size: 16px;
      line-height: 19px;
      color: #833ae0;
      padding-bottom: 12px;
    }
    .coinInfo {
      font-family: Roboto, sans-serif;
      font-size: 12px;
      line-height: 125.5%;
      color: #000000;
    }
  }
`;
export const CoinBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60%;
  margin: 0 auto;
  img {
    display: inline-block;
    margin-right: 10px;
    width: 120px;
    @media (min-width: 320px) and (max-width: 480px){
      width: 60px;
    }  
  }
  @media (min-width: 320px) and (max-width: 480px){
    width: 100%;
  }  
`;
export const CoinInfoBlock = styled.div`
  width: 100%;
`;
export const UserTotal = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  width: 35%;
  @media (min-width: 1024px) and (max-width: 1280px) {
    width: 40%;
  }
  @media (min-width: 320px) and (max-width: 480px){
     width: 100%;
     justify-content: center;
     align-items: center;
  }
`;
