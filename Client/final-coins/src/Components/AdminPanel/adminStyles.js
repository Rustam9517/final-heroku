import styled from "styled-components";

export const AdminMain = styled.div`
  font-family: Roboto, sans-serif;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 95%;
  padding-left: 40px;
  #Advanced {
    display: none;
  }    
  @media (min-width: 320px) and (max-width: 480px){
    justify-content: center;
    padding-left: 0;
  }  
  
`;
export const AdminBlock = styled.div`
  width: 100%;
  h2 {
    font-style: normal;
    font-weight: 300;
    font-size: 50px;
    line-height: 59px;
    display: flex;
    align-items: center;
    color: #000000;
    padding-bottom: 45px;
    @media (min-width: 320px) and (max-width: 480px){
    font-size: 30px;
    padding-bottom: 20px;
    }  
  }
`;
export const AdminCoins = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;    
  @media (min-width: 320px) and (max-width: 480px){
    justify-content: center;
    flex-direction: column;
  }  
  img {
    display: inline-block;
    margin-right: 15px;
    width: 120px;    
    @media (min-width: 320px) and (max-width: 480px){
    width: 60px;  
    }  
    
  }
  h3 {
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    color: #833ae0;
    padding-bottom: 10px;    
    @media (min-width: 320px) and (max-width: 480px){
    text-align: center;
    padding-top: 10px;
    }  
    
  }
  p {
    font-size: 12px;
    line-height: 125.5%;
    color: #000000;
    width: 60%;
    text-align: left;  
    @media (min-width: 320px) and (max-width: 480px){
    width: 97%;
    text-align: center; 
    padding-bottom: 10px;   
    }  
    
  }
`;
export const CoinText = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  @media (min-width: 320px) and (max-width: 480px){
    width: 100%;
  }  
`;
export const ControlButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 320px) and (max-width: 480px){
      width: 70%;
      justify-content: space-around;
  }
  a {
    text-decoration: none;
    padding: 10px 15px;
    background: #e1e1e1;
    font-size: 14px;
    line-height: 16px;
    color: black;
    margin-left: 10px; 
     @media (min-width: 320px) and (max-width: 480px){
      margin: 0;
    }
  }
`;
export const CoinsListMain = styled.div`
  width: 100%;
  height: 400px;
  margin-top: 40px;
  padding: 20px;
`;
export const CoinContent = styled.div`
  height: 20%;
`;

export const AddButton = styled.div`
  display: flex;
  padding-top: 70px;
  padding-left: 20px;
  a {
    text-decoration: none;
    font-weight: 300;
    font-size: 14px;
    line-height: 109%;
    color: black;
    span {
      padding: 50px 55px;
      border-radius: 50%;
      border: 1px solid black;
      margin-right: 10px;
      font-size: 18px;
     @media (min-width: 320px) and (max-width: 480px){
     padding: 25px 30px;
    }
      
    }
  }
`;
