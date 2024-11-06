import Naver from "./components/nav";
import UncontrolledExemple from "./components/carrossel/Carrossel";
import "./App.css";
import WithLabel from "./components/Progress/HTMl/WithLabel";
import WithLabelCSS from "./components/Progress/CSS/CSS";
import WithLabelJS from "./components/Progress/JAVASCRIPT/javascript";
import WithLabelReact from "./components/Progress/REACT.JS/react";
import WithLabelBoot from "./components/Progress/Bootstrap/WithLabelBoot";
import styled from "styled-components";
import { TiSocialLinkedin } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import { TiSocialFacebookCircular } from "react-icons/ti";
import Projects from "./pages/projects";
import Hobbies from "./pages/Hobbies";
import Skills from "./pages/Skills";
import Contato from "./pages/Contato";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";

const H1 = styled.h1`
  font-family: "Oswald";
  color: white;
  width: 10em;
  text-align: center;
  position: relative;
  left: 3em;
  top: 3em;
`;

function App() {
  return (
    <div>
      <header>
        <Naver />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/hobbies" element={<Hobbies />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
        <section className="container1">
          <H1>Olá, seja bem vindo ao meu portifólio profissional e pessoal</H1>

          <UncontrolledExemple />
        </section>

        <section className="container2">
          <h1>Quem sou eu?</h1>

          <article className="subcontainer2">
            <h3>Pedro Arthur</h3>
            <h4>Desenvolvedor Front-End</h4>

            <p>
              Recém-formado em Análise e Desenvolvimento de Sistemas, com
              sólidos conhecimentos em HTML, CSS e JavaScript, além de
              experiência prática em React e Node.js. Buscando uma oportunidade
              para aplicar e expandir meus conhecimentos em ambientes de
              desenvolvimento web. Tenho uma paixão por criar interfaces de
              usuário intuitivas e funcionais, bem como por desenvolver
              aplicações robustas e escaláveis. Hábil em resolver problemas e em
              aprender rapidamente novas tecnologias, estou pronto para
              contribuir em projetos desafiadores e crescer junto à equipe.
            </p>
          </article>
          <div className="subcontainer">
            <article>
              <h1> Sumário</h1>
              <h2>Pedro Arthur Santos Macedo</h2>
              <p>Arrial do Cabo, RJ</p>
              <p>(22)998876969</p>
              <p>pedroarthrj@gmail.com</p>
              <p>nascimento: 23/10/2000</p>
            </article>

            <article>
              <h1>Educação</h1>
              <h4>TECNÓLOGO EM ANALISE E DESENVOLVIMENTO DE SISTEMAS</h4>
              <p>Unopar: Cabo frio, RJ</p>
            </article>
          </div>
        </section>

        <section className="container3">
          <h2>Linguagens e competencias</h2>
          <div className="subcontainer1">
            <article className="competencias">algo mais</article>
            <article className="languages">
              <div className="HTML">
                <label htmlFor="">HTML5</label>
                <WithLabel />
              </div>

              <div className="CSS">
                <label htmlFor="">CSS</label>
                <WithLabelCSS />
              </div>

              <div className="javascript">
                <label htmlFor="">JavaScript</label>
                <WithLabelJS />
              </div>

              <div className="react">
                <label htmlFor="">React.js</label>
                <WithLabelReact />
              </div>

              <div className="bootstrap">
                <label htmlFor="">bootstrap</label>
                <WithLabelBoot />
              </div>
            </article>
          </div>
        </section>
      </main>
      <footer>
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
      </footer>
    </div>
  );
}

export default App;
