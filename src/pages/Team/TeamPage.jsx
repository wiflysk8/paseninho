import React from "react";

import RitaImg from "../../assets/images/Rita.jpg";
import JenniferImg from "../../assets/images/Jennifer.jpg";
import { TeamContainer, TeamImage } from "./TeamPageStyles";

const TeamPage = () => {
  return (
    <TeamContainer>
      <span>
        Paseniño Centro de Logopedia está dirigido por Jennifer Seoane Pintor y
        Rita Mondragón Nogueira. Además de ser logopedas con amplia experiencia
        en el campo, la constante actualización de sus conocimientos y técnicas
        les permite ofrecer a sus pacientes la mejor atención posible. Gracias a
        su experiencia y dedicación, Jennifer y Rita están listas para ayudaros.
      </span>
      <div>
        <TeamImage>
          <img src={RitaImg} alt="Rita" />
          <p>Rita Mondragón</p>
        </TeamImage>
        <TeamImage>
          <img src={JenniferImg} alt="Jennifer" />
          <p>Jennifer Seoane</p>
        </TeamImage>
      </div>
    </TeamContainer>
  );
};

export default TeamPage;
