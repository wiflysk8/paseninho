import { NavLink } from "react-router-dom";
import "./SideDrawer.css";

const SideDrawer = (props) => {
  let drawerClasses = ["side-drawer"];

  if (props.show) {
    drawerClasses = ["side-drawer", "open"];
  }

  const handleHideDrawer = () => {
    props.hideDrawer();
  };

  return (
    <nav className={drawerClasses.join(" ")}>
      <ul>
        <li>
          <NavLink
            className={"NavLink"}
            to={"/"}
            style={({ isActive }) => ({
              color: isActive ? "#B1C2B6" : "#524f4ffa",
            })}
            onClick={handleHideDrawer}
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
            onClick={handleHideDrawer}
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
            onClick={handleHideDrawer}
          >
            Servicios
          </NavLink>
        </li>
        {/*   <NavLink className={"NavLink"} to={"/servicios/ninos"}>
          <span className="subSection">Niños</span>
        </NavLink>
        <NavLink className={"NavLink"} to={"/servicios/adultos"}>
          <span className="subSection">Adultos</span>
        </NavLink> */}
        <li>
          <NavLink
            className={"NavLink"}
            to={"/metodologia"}
            style={({ isActive }) => ({
              color: isActive ? "#B1C2B6" : "#524f4ffa",
            })}
            onClick={handleHideDrawer}
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
            onClick={handleHideDrawer}
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
            onClick={handleHideDrawer}
          >
            Contacto
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default SideDrawer;
