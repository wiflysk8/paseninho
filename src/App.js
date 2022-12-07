import { BrowserRouter } from "react-router-dom";
import "./App.css";

import NavbarResponsive from "./components/NavbarResponsive/NavbarResponsive";
import RoutesFile from "./core/Routes";

function App() {
  return (
    <BrowserRouter>
      <NavbarResponsive />
      <RoutesFile />
    </BrowserRouter>
  );
}

export default App;
