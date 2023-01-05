import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledServices = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h2 {
    font-size: 2rem;
    font-weight: 900;
    margin-bottom: 4rem;
    color: #b1c2b6;
    text-align: center;
  }

  p {
    font-size: 1.3rem;
    font-weight: 500;
    width: 60%;
    margin-bottom: 2rem;
    line-height: 1.5;
    text-align: center;
  }

  @media screen and (max-width: 768px) {
    margin-top: 34%;
    h2 {
      font-size: 1.2rem;
    }
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;
  gap: 1rem;

  span {
    font-size: 1.3rem;
    tex-align: center;
  }
  span:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    width: 80%;
    align-self: center;
  }
`;

export const ImagesWrapper = styled.div`
  display: flex;
  gap: 2rem;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 1rem;
  margin: 0 100px;

  @media screen and (max-width: 768px) {
    width: 100%;
    align-self: center;
    flex-direction: column;
  }
`;

export const ContentColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  position: relative;
  gap: 1rem;
  align-self: flex-start;
  h3 {
    font-size: 1rem;
    font-weight: 900;
    letter-spacing: 12px;
    background-color: #f5f5f5;
    padding: 0.2rem 0;
    width: 60%;
    text-align: center;
    margin-bottom: 1rem;
  }
  ul {
    display: list-item;
  }
  li {
    flex-direction: column;
    margin-bottom: 1rem;
    list-style: square;
    display: list-item;
  }
  div {
    margin-bottom: 3rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media screen and (max-width: 768px) {
    width: 100vw;
    div {
      width: 84%;
    }
    h3 {
      letter-spacing: 3px;
      text-align: center;
      padding: 0.2rem 2rem;

      padding: 4px 3.5rem;
    }
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #b1c2b6;
  font-size: 1.3rem;
  font-weight: 500;
  text-align: center;
  width: 100%;
  height: 100%;

  &:hover {
    text-decoration: underline;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
`;
