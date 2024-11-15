import "./App.css";
import "./animation.css";
import Naver from "./components/nav";
import { TiSocialLinkedin } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import { TiSocialFacebookCircular } from "react-icons/ti";
import Projects from "./pages/projects";
import Hobbies from "./pages/Hobbies";
import Contato from "./pages/Contato";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <header>
        <Naver />
      </header>
      <main>
        <Routes>
          <Route path="/Portifolio" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/hobbies" element={<Hobbies />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </main>
      <footer>
        <h3>Redes Sociais</h3>
        <div className="icones">
          <a
            href="https://www.linkedin.com/in/pedro-arthur-721b442b3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TiSocialLinkedin className="icon" />
          </a>
          <a
            href="https://www.instagram.com/arth1636/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SlSocialInstagram className="icon" />
          </a>

          <a
            href="https://www.facebook.com/pedrinho.stark.1/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TiSocialFacebookCircular className="icon" />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
