import styled from "styled-components";

export const CarouselWrapper = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
