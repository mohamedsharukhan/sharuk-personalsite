import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomeComponent from "./assets/pages/home_component/HomeComponent";
import AboutComponent from "./assets/pages/about-component/AboutComponent";
import ProfileComponent from "./assets/pages/profile-component/ProfileComponent";
import ResumeComponent from "./assets/pages/resum-component/ResumeComponent";
import IconsComponent from "./assets/shared_component/icons-socialmedia/IconsComponent";
import SkillsComponent from "./assets/pages/skills-component/SkillsComponent";
import PortfolioComponent from "./assets/pages/portfolio/PortfolioComponent";
import ContactComponent from "./assets/pages/contact-component/ContactComponent";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/profile" element={<ProfileComponent />} />
        <Route path="/about" element={<AboutComponent />} />
        <Route path="/resume" element={<ResumeComponent />} />
        <Route path="/skill" element={<SkillsComponent />} />
        <Route path="/project" element={<PortfolioComponent />} />
        <Route path="/contact" element={<ContactComponent />} />
        <Route path="/icon" element={<IconsComponent />} />
      </Routes>
    </>
  );
}

export default App;
