import React from "react";

import RitaImg from "../../assets/images/Rita.jpg";
import JenniferImg from "../../assets/images/Jennifer.jpg";
import { TeamContainer, TeamImage } from "./TeamPageStyles";

const TeamPage = () => {
  return (
    <TeamContainer>
      <h2>¿Quiénes somos?</h2>
      <span>
        <strong>Metas Centro de Logopedia</strong> está dirigido por Rita
        Mondragón Nogueira y Jennifer Seoane Pintor. Además de ser logopedas con
        amplia experiencia en el campo, la constante actualización de sus
        conocimientos y técnicas les permite ofrecer a sus pacientes la mejor
        atención.
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
