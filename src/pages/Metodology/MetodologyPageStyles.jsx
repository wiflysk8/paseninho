import styled from "styled-components";

export const MetodologyContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8%;
  @media screen and (max-width: 768px) {
    margin-top: 34%;
  }
`;

export const MetodologyWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h2 {
    font-size: 2rem;
    font-weight: 900;
    margin-bottom: 2rem;
    color: #b1c2b6;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 2rem;
    color: #b1c2b6;
  }

  span {
    font-size: 1.3rem;
    font-weight: 500;
    width: 60%;
    margin-bottom: 2rem;
    line-height: 1.5;
    text-align: center;
  }

  p {
    font-size: 1.2rem;
    width: 60%;
    margin-bottom: 2rem;
    line-height: 1.5;
    text-align: center;
  }
  @media screen and (max-width: 768px) {
    span {
      width: 90%;
      text-align: left;
      padding-left: 1rem;
      letter-spacing: 2px;
      font-size: 1rem;
    }
    p {
      width: 90%;
      text-align: left;
      padding-left: 1rem;
      letter-spacing: 2px;
      margin-bottom: 3rem;
      font-size: 1rem;
    }
  }
`;

export const MetodologyImage = styled.div`
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
