import React from "react";
import {
  ImageContainer,
  ImagesWrapper,
  StyledLink,
  StyledServices,
} from "./ServicesPageStyles";
import kidsImg from "../../assets/images/kids.jpg";
import adultsImg from "../../assets/images/adults.jpg";

const ServicesPage = () => {
  return (
    <StyledServices>
      <h2>Servicios</h2>
      <p>Nuestros servicios están orientados tanto a niños como a adultos.</p>
      <ImagesWrapper>
        <ImageContainer>
          <StyledLink to={"/servicios/ninos"}>
            <img src={kidsImg} alt="Imagen de unos niños" />

            <span>Niños</span>
          </StyledLink>
        </ImageContainer>
        <ImageContainer>
          <StyledLink to={"/servicios/adultos"}>
            <img src={adultsImg} alt="Imagen de unos niños" />
            <span>Adultos</span>
          </StyledLink>
        </ImageContainer>
      </ImagesWrapper>
    </StyledServices>
  );
};

export default ServicesPage;
