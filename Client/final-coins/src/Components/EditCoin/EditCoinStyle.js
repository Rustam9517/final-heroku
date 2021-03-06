import styled from "styled-components";

export const EditMain = styled.div`
  font-family: Roboto, sans-serif;
  display: flex;
  justify-content: space-between;
  width: 95%;
  margin: 0 auto;     
  @media (min-width: 320px) and (max-width: 480px){
     flex-direction: column;
  }

  input {
    border: 1px solid #000000;
    outline: none;
    padding: 10px 20px;
    margin-bottom: 20px;
    font-weight: 300;
    font-size: 18px;
    line-height: 109%;
    color: #000000;
  }
  select{
    border: 1px solid #000000;
    outline: none;
    padding: 10px 20px;
    margin-bottom: 20px;
    font-weight: 300;
    font-size: 18px;
    line-height: 109%;
    color: #000000;
  }
  textarea {
    margin-bottom: 20px;
    font-weight: 300;
    font-size: 18px;
    line-height: 109%;
    color: #000000;
    resize: none;
  }
  a {
    background: #833ae0;
    border: none;
    outline: none;
    padding: 10px 20px;
    color: #ffffff;
    text-decoration: none;
  }
  p {
    font-weight: bold;
    font-size: 14px;
    line-height: 109%;
    color: #000000;
    padding-bottom: 6px;
  }
`;
export const EditLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 33%;
  input {
    margin-bottom: 47.5px;
  }
  @media (min-width: 320px) and (max-width: 480px){
     width: 100%;
  }
`;
export const EditMid = styled.div`
  display: flex;
  flex-direction: column;
  width: 33%;
  @media (min-width: 320px) and (max-width: 480px){
     width: 100%;
  }  
`;
export const EditRight = styled.div`
  display: flex;
  flex-direction: column;
  width: 33%;
  @media (min-width: 320px) and (max-width: 480px){
     width: 100%;
  }  
  .editButtons {
    padding-top: 380px;
    @media (min-width: 320px) and (max-width: 480px){
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 60%;
        padding-top: 20px;
        margin: 0 auto;
        padding-bottom: 20px;
    }  
    a {
      font-size: 14px;
      line-height: 16px;
      display: flex;
      align-items: center;
      text-align: center;
    }
    a:nth-child(2) {
      background-color: #e1e1e1;
      color: black;
    }
  }
`;
