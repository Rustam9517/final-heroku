import styled from "styled-components";

export const CoinPageMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  .front{
    margin-bottom: 30px;
  }
  @media (min-width: 320px) and (max-width: 480px){
        width: 100%;
    }  
`;
export const ImageBlock = styled.div`
  margin-right: 30px;
  img {
    width: 300px;
     @media (min-width: 320px) and (max-width: 480px){
       display: none;
    }
  }
  @media (min-width: 320px) and (max-width: 480px){
    margin-right: 0;
  }
`;
export const InformationBlock = styled.div`
  padding: 20px 30px;
  width: 50%;
  background-color: rgba(196, 196, 196, 0.5);
  @media (min-width: 320px) and (max-width: 480px){
        width: 100%;
        padding: 10px 20px;
    }
  h2{
      width: 100%;
      margin: 0 auto;
      padding-bottom: 13px;
      @media (min-width: 320px) and (max-width: 480px){
        width: 100%;
        font-size: 16px;
        padding-bottom: 15px;
    }    
  }  
  p {
    font-family: Roboto, sans-serif;
    font-size: 16px;
    line-height: 125%;
    color: #000000;
    width: 100%;
    margin: 0 auto;
    padding-bottom: 40px;
    white-space: pre-line;
    @media (min-width: 320px) and (max-width: 480px){
        width: 100%;
        font-size: 13px;
    }    
  }
  a {
    display: inline-block;
    font-family: Roboto, sans-serif;
    font-size: 15px;
    line-height: 12px;
    padding-top: 145px;
    color: black;
    @media (min-width: 320px) and (max-width: 480px){
       padding-top: 70px;
    }   
  }
  table {
    border-collapse: collapse;
    width: 100%;
    tr {
      td,
      th {
        font-family: Roboto, sans-serif;
        font-weight: bold;
        font-size: 16px;
        line-height: 105.2%;
        padding: 10px;
        @media (min-width: 320px) and (max-width: 480px){
          font-size: 13px;
        }    
      }
      th {
        text-align: left;
        border-right: 1px solid #b1abab;
      }
    }
    tr:nth-child(odd) {
      background: #ffffff;
      border-top: 1px solid #b1abab;
      border-bottom: 1px solid #b1abab;
    }
    tr:nth-child(1) {
      border-top: none;
    }
  }
`;
