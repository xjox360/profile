import { useState } from "react";

import back from "./back.png";
import x from "./x.png";
import letras from "./letras.png";
import menu from "./Images/menu.png";
import "./App.css";
import Sidebar from "./components/Sidebar";
import ProjectsScreen from "./screens/ProjectsScreen";
import AboutSiteScreen from "./screens/AboutSiteScreen";
import AboutMeScreen from "./screens/AboutMeScreen";
import BackgroundScreen from "./screens/BackgroundScreen";
import ExperienceScreen from "./screens/ExperienceScreen.js";

function App() {
  const year = new Date().getFullYear();
  const [route, setRoute] = useState("projects");
  const [origin, setOrigin] = useState(null);
  const [show, setShow] = useState(true);

  const showSide = (e) => {
    const move = e.changedTouches[0].clientX - origin;
    if (move > 0) {
      setShow(true);
    }
    if (move < 0) {
      setShow(false);
    }
  };

  return (
    <div className="bigContainer">
      <header className="App-header">
        <div className="logo-container">
          <img src={back} className="App-logo-static" alt="logo" />

          <img src={x} className="App-logo-static" alt="logo" />
          <img src={letras} className="App-logo-static" alt="logo" />
        </div>
      </header>
      <main>
        <section
          className={`leftAside ${show ? "show" : "hide"}`}
          onTouchMove={(e) => showSide(e)}
        >
          <Sidebar action={setRoute}></Sidebar>
          <div
            className="sideButton"
            onTouchStart={(e) => {
              setOrigin(e.changedTouches[0].clientX);
              setShow(true);
            }}
          >
            <img src={menu} alt="menu"></img>
          </div>
        </section>
        <section className="mainContainer">
          {route === "projects" && <ProjectsScreen></ProjectsScreen>}
          {route === "aboutMe" && <AboutMeScreen></AboutMeScreen>}
          {route === "background" && <BackgroundScreen></BackgroundScreen>}
          {route === "experience" && <ExperienceScreen></ExperienceScreen>}
          {route === "aboutSite" && <AboutSiteScreen></AboutSiteScreen>}
        </section>
      </main>
      <footer>
        <h3>Copyright {year} © </h3>
      </footer>
    </div>
  );
}

export default App;
