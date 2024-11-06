import React from "react";
import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "./ExampleCarouselImage";
import "bootstrap/dist/css/bootstrap.min.css";
import Image1 from "../../assets/images/Leonardo_Phoenix_A_man_working_with_programming_on_a_computer_0.jpg";
import Image2 from "../../assets/images/Leonardo_Phoenix_A_web_development_workshop_with_various_tools_1.jpg";
import Image3 from "../../assets/images/Leonardo_Phoenix_an_image_divided_one_part_with_react_codes_an_0.jpg";
import "../../assets/css/carrossel.css";
import styled from "styled-components";

const P = styled.p`
  text-shadow: black 1px 1px 1px;
  font-size: 1.2em;
`;

const H3 = styled.h3`
  text-shadow: black 1px 1px 1px;
  font-size: 2em;
`;

function UncontrolledExample() {
  return (
    <Carousel className="container">
      <Carousel.Item>
        <ExampleCarouselImage src={Image1} text="First slide" />
        <Carousel.Caption>
          <H3>Imersão no Código</H3>
          <P>
            Com dedicação e esforço constantes, cada desafio se torna uma
            oportunidade de crescimento. Programar é mais do que um trabalho; é
            minha verdadeira vocação.
          </P>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage src={Image2} text="Second slide" />
        <Carousel.Caption>
          <H3> A Era Multidispositivo</H3>
          <P>
            Explorando novas interfaces e designs, a tecnologia nos conecta de
            maneiras que nunca imaginamos. Cada tela é uma oportunidade de
            inovação.
          </P>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage src={Image3} text="Third slide" />
        <Carousel.Caption>
          <H3>Minha trajetória como Dev</H3>
          <P>
            Do front-end ao back-end, construindo experiências digitais. Cada
            linha de código é um passo na evolução de um desenvolvedor
            apaixonado
          </P>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
