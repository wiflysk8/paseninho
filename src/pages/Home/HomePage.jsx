import React from "react";
import {
  StyledDescription,
  StyledHome,
  StyledImageContainer,
} from "./HomePageStyle";
import Background from "../../assets/images/bgquote.png";
import DemoCarousel from "../../components/ImageCarousel/ImageCarousel";

const HomePage = () => {
  return (
    <>
      <StyledHome>
        <StyledImageContainer>
          <img src={Background} alt="background flower" />
        </StyledImageContainer>
        <StyledDescription>
          <p>
            <strong>Metas Centro de Logopedia </strong>
            nace de las ganas de brindar un servicio especializado en los
            trastornos de la comunicación, habla, lenguaje, deglución y voz.
          </p>
          <p>
            La creación de Paeniño surge tras muchos años de gran esfuerzo y
            dedicación por parte de sus fundadoras, quienes han trabajado
            incansablemente para hacer realidad su sueño, ofrecer un servicio de
            calidad en el ámbito de la logopedia.
          </p>
          <p>
            Con su pasión y determinación, han logrado crear un centro que se ha
            ganado la <strong>confianza</strong> y el
            <strong> reconocimiento</strong> de pacientes y familias.
          </p>
        </StyledDescription>
        <DemoCarousel />
      </StyledHome>
    </>
  );
};

export default HomePage;
