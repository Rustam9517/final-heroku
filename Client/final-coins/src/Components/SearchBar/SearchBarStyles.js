import styled from "styled-components";
export const SearchBlock = styled.div`
  width: 95%;
  position: relative;
  padding-bottom: 30px;
  p {
    font-family: Roboto, sans-serif;
    font-weight: bold;
    font-size: 14px;
    line-height: 109%;
    color: #000000;
    margin-bottom: 0;
    padding-bottom: 10px;
  }
`;
export const Search = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 30%;
  a {
    background: #833ae0;
    border: none;
    outline: none;
    padding: 10px 20px;
    color: #ffffff;
    text-decoration: none;
    @media (min-width: 320px) and (max-width: 480px){
       padding: 5px 15px;
       font-size: 13px;
    }
  }
  input {
    border: 1px solid #000000;
    outline: none;
    padding: 10px 20px;
    width: 70%;
    &::-webkit-search-cancel-button {
      position: relative;
      right: -10px;
      cursor: pointer;
      font-size: 16px;
    }
     @media (min-width: 320px) and (max-width: 480px){
       padding: 5px 15px;
       margin: 0 auto;
  }
  }
  @media (min-width: 1024px) and (max-width: 1280px) {
    width: 50%;
  }
  @media (min-width: 320px) and (max-width: 480px){
      width: 95%;
  }
`;
export const Advanced = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  padding-top: 10px;
  a {
    font-family: Roboto, sans-serif;
    font-weight: 300;
    font-size: 16px;
    line-height: 109%;
    color: black;
    text-decoration: underline;
  }
`;
export const AdvanceMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const AdvancedSearch = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 60%;
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  margin: 0 auto;
  @media (min-width: 1024px) and (max-width: 1280px) {
    width: 80%;
  }
  @media (min-width: 320px) and (max-width: 480px){
        width: 100%;
       justify-content: center;
       align-items: center;
       flex-direction: column;
    }
`;
export const Options = styled.div`
  width: 60%;
  select {
    width: 70%;
    padding: 10px 20px;
    -moz-appearance: none; /* Firefox */
    -webkit-appearance: none; /* Safari and Chrome */
    appearance: none;
    background-image: url("https://image.flaticon.com/icons/svg/625/625946.svg");
    background-size: 12px;
    background-position-x: 98%;
    background-position-y: 50%;
    background-repeat: no-repeat;
    transform: rotate(0deg);
    margin-bottom: 10px;
  }
  label{
      @media (min-width: 320px) and (max-width: 480px){
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          padding-top: 10px;
      }
  }
  @media (min-width: 320px) and (max-width: 480px){
       display: flex;
       width: 100%;
       justify-content: center;
       align-items: center;
       flex-direction: column;
    }
`;
export const RangeSearch = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  a {
    background: #833ae0;
    border: none;
    outline: none;
    padding: 10px 20px;
    color: #ffffff;
    text-decoration: none;
    @media (min-width: 320px) and (max-width: 480px){
       padding: 5px 15px;
       font-size: 13px;
    }
  }
  input {
    width: 20%;
    padding: 10px 20px;
    margin: 10px 5px;
    @media (min-width: 320px) and (max-width: 480px){
       width: 100%;
    }
  }
  label {
    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 109%;
    color: #000000;
    @media (min-width: 320px) and (max-width: 480px){
          width: 100%;
    }
  }
`;
export const Price = styled.div`
  @media (min-width: 320px) and (max-width: 480px){
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          width: 100%;
          padding: 0;
    }
`;
export const Year = styled.div`
  @media (min-width: 320px) and (max-width: 480px){
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          width: 100%;
          padding: 0;
    }   
`;
export const SearchButton = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding-left: 20%;
  @media (min-width: 320px) and (max-width: 480px){
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          padding: 0;
    }
`;
