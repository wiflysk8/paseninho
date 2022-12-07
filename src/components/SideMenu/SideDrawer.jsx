import { NavLink } from "react-router-dom";
import "./SideDrawer.css";

const sideDrawer = (props) => {
  let drawerClasses = ["side-drawer"];

  const handleShow = () => {
    props.show(false);
  };

  if (props.show) {
    drawerClasses = ["side-drawer", "open"];
  }

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
            onClick={handleShow}
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
            onClick={handleShow}
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
            onClick={handleShow}
          >
            Servicios
          </NavLink>
        </li>
        <li>
          <NavLink
            className={"NavLink"}
            to={"/metodologia"}
            style={({ isActive }) => ({
              color: isActive ? "#B1C2B6" : "#524f4ffa",
            })}
            onClick={handleShow}
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
            onClick={handleShow}
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
            onClick={handleShow}
          >
            Contacto
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default sideDrawer;
