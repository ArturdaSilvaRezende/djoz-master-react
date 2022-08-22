import styled from "styled-components";

import HeroBg from "../img/hero-bg.png";

export const HeroSection = styled.section`
  background: url(${HeroBg}) 100% 100%;
  background-attachment: fixed;
  height: 100vh;

  @media screen and (max-width: 767px) {
    background-position: center 0;
  }
`;
