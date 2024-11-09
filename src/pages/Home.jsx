import React from "react";
import WithLabel from "../components/Progress/HTMl/WithLabel";
import WithLabelCSS from "../components/Progress/CSS/CSS";
import WithLabelJS from "../components/Progress/JAVASCRIPT/javascript";
import WithLabelReact from "../components/Progress/REACT.JS/react";
import WithLabelBoot from "../components/Progress/Bootstrap/WithLabelBoot";
import UncontrolledExemple from "../components/carrossel/Carrossel";
import styled from "styled-components";
import Accordion from "../components/acordion/acordion";

const H1 = styled.h1`
  font-family: "Oswald";
  color: white;
  width: 10em;
  text-align: center;
  position: relative;
  left: 3em;
  top: 3em;
`;

export default function () {
  return (
    <div>
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
            Recém-formado em Análise e Desenvolvimento de Sistemas, com sólidos
            conhecimentos em HTML, CSS e JavaScript, além de experiência prática
            em React e Node.js. Buscando uma oportunidade para aplicar e
            expandir meus conhecimentos em ambientes de desenvolvimento web.
            Tenho uma paixão por criar interfaces de usuário intuitivas e
            funcionais, bem como por desenvolver aplicações robustas e
            escaláveis. Hábil em resolver problemas e em aprender rapidamente
            novas tecnologias, estou pronto para contribuir em projetos
            desafiadores e crescer junto à equipe.
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
          <article className="competencias">
            <Accordion />
          </article>
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
    </div>
  );
}
