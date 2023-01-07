import { LogoContainer, MenuContainer, NavbarStyled } from "./NavbarStyles";
import logo from "../../assets/images/Metas_logo.png";
import { NavLink } from "react-router-dom";

function Navbar() {
  const title = `Metas`;
  const subtitle = "Centro de Logopedia";

  return (
    <NavbarStyled>
      <LogoContainer>
        <img src={logo} alt="logo" />
        <div>
          <span>{title}</span>
          <span>{subtitle}</span>
        </div>
      </LogoContainer>
      <MenuContainer>
        <NavLink
          className={"NavLink"}
          to={"/"}
          style={({ isActive }) => ({
            color: isActive ? "#B1C2B6" : "#524f4ffa",
          })}
        >
          Inicio
        </NavLink>

        <NavLink
          className={"NavLink"}
          to={"/equipo"}
          style={({ isActive }) => ({
            color: isActive ? "#B1C2B6" : "#524f4ffa",
          })}
        >
          Equipo
        </NavLink>

        <NavLink
          className={"NavLink"}
          to={"/servicios"}
          style={({ isActive }) => ({
            color: isActive ? "#B1C2B6" : "#524f4ffa",
          })}
        >
          Servicios
        </NavLink>

        <NavLink
          className={"NavLink"}
          to={"/metodologia"}
          style={({ isActive }) => ({
            color: isActive ? "#B1C2B6" : "#524f4ffa",
          })}
        >
          Metodología
        </NavLink>

        <NavLink
          className={"NavLink"}
          to={"/blog"}
          style={({ isActive }) => ({
            color: isActive ? "#B1C2B6" : "#524f4ffa",
          })}
        >
          Blog
        </NavLink>

        <NavLink
          className={"NavLink"}
          to={"/contacto"}
          style={({ isActive }) => ({
            color: isActive ? "#B1C2B6" : "#524f4ffa",
          })}
        >
          Contacto
        </NavLink>
      </MenuContainer>
    </NavbarStyled>
  );
}

export default Navbar;
