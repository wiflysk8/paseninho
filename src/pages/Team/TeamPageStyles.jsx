import styled from "styled-components";

export const TeamContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    margin-top: 26%;
  }
  span {
    font-size: 1.3rem;
    font-weight: 500;
    width: 60%;
    margin-bottom: 2rem;
    line-height: 1.5;
    text-align: center;
  }

  div {
    display: flex;
    gap: 2rem;
  }
  @media screen and (max-width: 768px) {
    span {
        width: 80%;
        text-align: left;
        padding-left: 1rem;
        letter-spacing: 2px;
        }
    div {
        flex-direction: column;
    }
    
`;

export const TeamImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 30%;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 2rem;
  img {
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;