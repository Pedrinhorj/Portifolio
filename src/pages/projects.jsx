import React from "react";
import styled from "styled-components";
import telaLogin from "../assets/images/tela-login.jpg";
import narfnilk from "../assets/images/logo-title-option2.png";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import "../assets/css/projects.css";

const Divbody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3em;
`;

const Main = styled.main`
  display: flex;
  justify-content: center;
  gap: 5em;
  margin-bottom: 4em;
`;

const Div = styled.div`
  border-radius: 10px;
  width: 18em;
`;

const DivNone = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SubDiv = styled.div`
  display: flex;
  gap: 20px;
`;

const Img = styled.img`
  width: 18em;
  height: 15em;
`;

const Projects = () => {
  return (
    <Divbody>
      <h1 style={{ marginTop: "1.3em" }}>Meus principais projetos</h1>

      <h5>Aqui se encontram os meus principais projetos</h5>

      <Main>
        <Div className="div1">
          <Img src={telaLogin} alt="" />
          <DivNone className="none">
            <h4>Login e senha</h4>
            <SubDiv>
              <FaExternalLinkAlt />
              <FaLink />
            </SubDiv>
            <p>
              Um projeto simples visando apenas mostrar o funcionamento e design
              de uma tela de login
            </p>
          </DivNone>
        </Div>
        <Div>
          <Img src={narfnilk} alt="" />
          <h4>NARFNILK</h4>
          <SubDiv>
            <FaExternalLinkAlt />
            <FaLink />
          </SubDiv>
          <p>Um projeto de uma empresa audio visual</p>
        </Div>
      </Main>
    </Divbody>
  );
};

export default Projects;
