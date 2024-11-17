import UncontrolledExemple from "../components/carrossel/Carrossel";
import styled from "styled-components";
import "../animation.css";
import Subcontainer2 from "../components/animationmain";
import SubContainer from "../components/animationmain2";
import Animationmain3 from "../components/animationmain3";
import "../assets/css/mediaquery.css";

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
        <H1 className="h1-title">
          Olá, seja bem vindo ao meu portifólio profissional e pessoal
        </H1>

        <UncontrolledExemple />
      </section>

      <section className="container2">
        <Subcontainer2 />
        <SubContainer />
      </section>
      <section className="container3">
        <Animationmain3 />
      </section>
    </div>
  );
}
