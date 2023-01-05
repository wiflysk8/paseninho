import { Route, Routes } from "react-router-dom";
import BlogPage from "../pages/Blog/BlogPage";
import ContactPage from "../pages/Contact/ContactPage";
import HomePage from "../pages/Home/HomePage";
import MetodologyPage from "../pages/Metodology/MetodologyPage";
import Adults from "../pages/Services/Adults/Adults";
import Kids from "../pages/Services/Kids/Kids";
import ServicesPage from "../pages/Services/ServicesPage";
import TeamPage from "../pages/Team/TeamPage";

const RoutesFile = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/equipo" element={<TeamPage />} />
      <Route path="/servicios" element={<ServicesPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/contacto" element={<ContactPage />} />
      <Route path="/metodologia" element={<MetodologyPage />} />
      <Route path="/servicios/ninos" element={<Kids />} />
      <Route path="/servicios/adultos" element={<Adults />} />
    </Routes>
  );
};

export default RoutesFile;
