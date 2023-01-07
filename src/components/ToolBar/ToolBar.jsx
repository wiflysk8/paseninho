import React from "react";
import SideMenu from "../SideMenu/SideMenu";
import "./ToolBar.css";
import logo from "../../assets/images/Metas_logo.jpg";
import { NavLink } from "react-router-dom";

const toolbar = (props) => (
  <header className="toolbar">
    <nav className="toolbar_navigator">
      <div className="toggle-btn">
        <SideMenu click={props.drawerToggleClickHandler} />
      </div>
      <div className="toolbar_logo">
        <img src={logo} alt="Metas Logo" className="logo_image" />
      </div>
      <div className="spacer" />
      <div className="toolbar_navigation-items">
        <ul>
          <li>
            <NavLink
              className={"NavLink"}
              to={"/"}
              style={({ isActive }) => ({
                color: isActive ? "#B1C2B6" : "#524f4ffa",
              })}
            >
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink
              className={"NavLink"}
              to={"/equipo"}
              style={({ isActive }) => ({
                color: isActive ? "#B1C2B6" : "#524f4ffa",
              })}
            >
              Equipo
            </NavLink>
          </li>
          <li>
            <NavLink
              className={"NavLink"}
              to={"/servicios"}
              style={({ isActive }) => ({
                color: isActive ? "#B1C2B6" : "#524f4ffa",
              })}
            >
              <div class="dropdown">
                <div class="dropbtn">Servicios</div>
                <div class="dropdown-content">
                  <NavLink className={"NavLink"} to={"/servicios/ninos"}>
                    Niños
                  </NavLink>
                  <NavLink className={"NavLink"} to={"/servicios/adultos"}>
                    Adultos
                  </NavLink>
                </div>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={"NavLink"}
              to={"/metodologia"}
              style={({ isActive }) => ({
                color: isActive ? "#B1C2B6" : "#524f4ffa",
              })}
            >
              Metodología
            </NavLink>
          </li>
          <li>
            <NavLink
              className={"NavLink"}
              to={"/blog"}
              style={({ isActive }) => ({
                color: isActive ? "#B1C2B6" : "#524f4ffa",
              })}
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              className={"NavLink"}
              to={"/contacto"}
              style={({ isActive }) => ({
                color: isActive ? "#B1C2B6" : "#524f4ffa",
              })}
            >
              Contacto
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default toolbar;
