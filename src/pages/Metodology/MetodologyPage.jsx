import {
  MetodologyContainer,
  MetodologyImage,
  MetodologyWrapper,
} from "./MetodologyPageStyles";
import InterviewImg from "../../assets/images/entrevista.jpg";
import ValoracionImg from "../../assets/images/valoracion.jpg";
import IntervencionImg from "../../assets/images/tratamiento.jpg";
import AltaImg from "../../assets/images/alta.jpg";
import InformacionImg from "../../assets/images/informacion.jpg";
import ProgressBar from "../../components/LoadingBar/ProgressBar";
import Footer from "../../components/Footer/Footer";

const MetodologyPage = () => {
  return (
    <MetodologyContainer>
      <MetodologyWrapper>
        <h2>¿Cómo trabajamos?</h2>
        <span>
          Antes de iniciar una adecuada intervención, realizamos un estudio
          detallado de todos los procesos alterados y puntos fuertes de cada
          paciente, para desarrollar un plan de intervención adaptado a sus
          intereses.
        </span>

        <h3>1º Entrevista. Gratuita</h3>
        <ProgressBar bgcolor={"#81a08a"} completed={20} />
        <p>Primera toma de contacto para reunir datos personales.</p>
        <MetodologyImage>
          <img src={InterviewImg} alt="Entrevista" />
        </MetodologyImage>

        <h3>2º Evaluación</h3>
        <ProgressBar bgcolor={"#81a08a"} completed={40} />
        <p>
          Este proceso es clave para valorar las dificultades de cada paciente.
          Para ello se realiza una observación clínica y se utilizan distintas
          pruebas estandarizadas, de screening, test, autorregistros… El número
          de sesiones dependerá del caso.
        </p>
        <MetodologyImage>
          <img src={ValoracionImg} alt="Entrevista" />
        </MetodologyImage>

        <h3>3º Comunicación</h3>
        <ProgressBar bgcolor={"#81a08a"} completed={60} />
        <p>
          Una vez elaborado el informe con la recogida de datos, se transmite
          toda la información y se concreta el plan de trabajo adaptado y
          personalizado.
        </p>
        <MetodologyImage>
          <img src={InformacionImg} alt="Entrevista" />
        </MetodologyImage>

        <h3>4º Intervención</h3>
        <ProgressBar bgcolor={"#81a08a"} completed={80} />
        <p>
          El plan de intervención es enfocado en base a los objetivos y
          trabajamos de manera conjunta con las familias, dando pautas semanales
          y aclarando dudas. Siempre bajo el consentimiento familiar o del
          propio paciente, nos parece primordial tener un contacto estrecho con
          los diferentes profesionales que trabajan con nuestros pacientes:
          Profesores, Fisioterapeutas, Psicólogos, Ortodoncistas, Terapeutas
          Ocupacionales… Y sobre todo, las familias siempre tienen un
          conocimiento total de la evolución y lo comunicado entre
          profesionales.
        </p>
        <MetodologyImage>
          <img src={IntervencionImg} alt="Entrevista" />
        </MetodologyImage>

        <h3>5º Seguimiento y alta</h3>
        <ProgressBar bgcolor={"#81a08a"} completed={100} />

        <p>
          Cada cierto tiempo, realizamos valoraciones de seguimiento y
          actualizamos objetivos. Cuando estos se hayan cumplido y no aparezcan
          nuevas dificultades, se hará un seguimiento para una futura alta.
        </p>
        <MetodologyImage>
          <img src={AltaImg} alt="Entrevista" />
        </MetodologyImage>
      </MetodologyWrapper>
      <Footer />
    </MetodologyContainer>
  );
};

export default MetodologyPage;
