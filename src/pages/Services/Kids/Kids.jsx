import React from "react";
import {
  ContentColumn,
  ContentContainer,
  StyledServices,
} from "../ServicesPageStyles";

const Kids = () => {
  return (
    <StyledServices>
      <h4>ÁREAS DE INTERVENCIÓN EN NIÑOS</h4>
      <ContentContainer>
        <ContentColumn>
          <h3>LENGUAJE</h3>
          <div>
            <ul>
              <li>
                Trastorno del Desarrollo del Lenguaje (TDL)
                <br />
                <span style={{ fontSize: "12px" }}>
                  Anteriormente denominado Trastono Específico del Lenguaje
                  (TEL)
                </span>
              </li>
              <li>Retraso del Lenguaje</li>
              <li>Mutismo Selectivo</li>
              <li>Afasia</li>
            </ul>
          </div>

          <h3>HABLA</h3>
          <div>
            <ul>
              <li>Trastorno de los Sonidos del Habla (TSH) :</li>
              <li style={{ listStyle: "inside" }}>Dislalia</li>
              <li style={{ listStyle: "inside" }}>Disartria</li>
              <li style={{ listStyle: "inside" }}>Disfemia (Tartamudez)</li>
              <li style={{ listStyle: "inside" }}>Taquilalia</li>
            </ul>
          </div>

          <h3>COMUNICACIÓN</h3>
          <div>
            <ul>
              <li>Habilidades sociales</li>
              <li>Sistemas aumentativos y alternativos</li>
            </ul>
          </div>
        </ContentColumn>

        <ContentColumn>
          <h3>LECTURA Y ESCRITURA</h3>
          <div>
            <ul>
              <li>Dificultades en la adquisición de la lecto-escritura</li>
              <li>Dislexia</li>
              <li>Disgrafía</li>
              <li>Disortografía</li>
              <li>Discalculia</li>
            </ul>
          </div>

          <h3>DEGLUCIÓN ATÍPICA</h3>
          <div>
            <ul>
              <li>Dificultades en alguna de las fases deglutorias:</li>
              <li style={{ listStyle: "inside" }}>
                Alteraciones en la respiración
              </li>
              <li style={{ listStyle: "inside" }}>
                Alteraciones en la masticación
              </li>
              <li style={{ listStyle: "inside" }}>
                Alteraciones en la deglución
              </li>
              <li>Inconpetencia velar</li>
              <li>Malos hábitos: succiones, uso de chupete, mordisqueo.</li>
            </ul>
          </div>

          <h3>AUDICIÓN</h3>
          <div>
            <ul>
              <li>Hipoacusia</li>
              <li>Implante coclear</li>
            </ul>
          </div>

          <h3>VOZ</h3>
          <div>
            <ul>
              <li>Disfonía</li>
              <li>Higiene vocal</li>
            </ul>
          </div>
        </ContentColumn>
      </ContentContainer>
    </StyledServices>
  );
};

export default Kids;
