import React from "react";
import styled from "styled-components";

const Img = styled.img`
  width: 22em;
  height: 32em;
`;

export default function ExampleCarouselImage({ src, alt }) {
  return <Img src={src} alt={alt} />;
}
