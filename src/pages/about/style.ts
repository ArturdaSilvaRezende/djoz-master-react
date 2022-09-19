import styled from "styled-components";

import SkillVideoBg from "./img/skill-video.jpg";

export const About = styled.div`
  background-color: var(--light);
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  .GlobalTitle {
    margin-top: 3%;
    text-align: center;
  }

  @media screen and (max-width: 1024px) {
    width: 90%;
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    .GlobalTitle {
      margin-top: 5%;

      h1 {
        font-size: 1.4rem;
      }

      p {
        width: 100%;
        margin-left: 30px;
      }
    }
  }
`;

// ============ skills

export const SkillsSection = styled.section`
  display: flex;
  margin-top: 5%;

  .GlobalTitle {
    h1 {
      color: var(--white);
    }
    p {
      color: #f2f2f2;
      opacity: 0.2;
    }
  }

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

export const Skills = styled.div`
  background-color: var(--very-purple);
  width: 50%;
  padding: 20px;

  p,
  span {
    color: var(--white);
    font-weight: 500;
  }

  .skills__description {
    margin: 60px 0 30px 0;
    text-align: center;
    line-height: 1.5;
  }

  .skills {
    & + .skills {
      margin-top: 15px;

      &:last-child {
        margin-bottom: 10%;
      }
    }

    p {
      display: flex;
      justify-content: space-between;
    }

    div {
      margin-top: 15px;
      background-color: #333;

      span {
        display: block;
        background-color: var(--white);
        height: 4px;
      }
    }

    .skills__perform {
      span {
        width: 95%;
      }
    }

    .skills__useMidi {
      span {
        width: 85%;
      }
    }

    .skills__remix {
      span {
        width: 98%;
      }
    }
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    padding: 15px;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
  }

  @media screen and (min-width: 600px) and (max-width: 767px) {
    padding: 20px 30px;
    width: 90%;
    margin: 0 auto;

    .skills__description {
      margin: 50px auto 30px auto;
      text-align: center;
      width: 70%;
    }
  }

  @media screen and (max-width: 599px) {
    padding: 20px;

    .skills__description {
      margin: 50px auto;
      width: 90%;
      text-align: center;
    }
  }
`;

export const SkillsVideo = styled.div`
  background: url(${SkillVideoBg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
  width: 50%;
  position: relative;

  div {
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(117, 31, 221, 0.3);
    border-radius: 50%;
    width: 100px;
    height: 100px;

    button {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: var(--white);
      color: var(--purple);
      display: block;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      font-size: 1.3rem;

      svg {
        margin: 4px 0 0 3px;
      }
    }
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    width: 50%;
  }

  @media screen and (min-width: 600px) and (max-width: 767px) {
    width: 90%;
    margin: 0 auto;
    height: 40vh;
  }

  @media screen and (max-width: 599px) {
    width: 100%;
    height: 60vh;
  }
`;

// ============ description

export const AboutDescription = styled.figure`
  margin-top: 10%;
  display: flex;
  align-items: center;
  width: 100%;

  img {
    width: 100%;
  }

  figcaption {
    h2 {
      text-align: center;
      margin: 40px auto 30px auto;
      font-size: 2rem;
      width: 60%;
    }

    p {
      line-height: 1.5;
      width: 90%;
      margin: 25px auto;
      text-align: center;
    }

    img {
      width: 40%;
      margin: 0 auto;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    width: 90%;
    margin: 12% auto 0 auto;

    img {
      width: 50%;
      margin-bottom: 30px;
    }

    figcaption {
      width: 50%;

      h2 {
        font-size: 1.5rem;
        width: 85%;
      }

      p {
        width: 93%;
      }

      img {
        width: 60%;
      }
    }
  }

  @media screen and (max-width: 767px) {
    flex-direction: column;
    margin-top: 70px;
  }

  @media screen and (min-width: 600px) and (max-width: 767px) {
    img {
      width: 60%;
    }
  }

  @media screen and (max-width: 599px) {
    img {
      width: 80%;
    }

    figcaption {
      h2 {
        font-size: 1.4rem;
        width: 70%;
      }

      p {
        width: 90%;
      }

      img {
        width: 60%;
      }
    }
  }
`;

// ============ pic

export const AboutPic = styled.section`
  margin-top: 10%;
  display: flex;

  figure {
    display: flex;
    gap: 5px;
    width: 50%;
  }

  .aboutpic__left {
    div {
      img {
        height: 37.5vh;

        & + img {
          margin-top: 5px;
        }
      }
    }

    .aboutpic__featured-image {
      max-width: 370px;
      margin-right: 5px;
    }
  }

  .aboutpic__right {
    display: flex;
    flex-direction: column;

    div {
      display: flex;

      img {
        height: 37.5vh;
      }
    }

    .aboutpic__top {
      img {
        &:first-child {
          width: 70%;
          margin-right: 5px;
        }
        &:last-child {
          width: 30%;
        }
      }
    }

    .aboutpic__bottom {
      img {
        &:first-child {
          width: 30%;
          margin-right: 5px;
        }
        &:last-child {
          width: 70%;
        }
      }
    }
  }

  @media screen and (max-width: 1024px) {
    width: 90%;
    margin: 10% auto;
  }

  @media screen and (min-width: 993px) and (max-width: 1024px) {
    .aboutpic__left {
      .aboutpic__featured-image {
        width: 50%;
      }
    }
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    .aboutpic__left {
      div {
        img {
          height: 15vh;
        }
      }

      .aboutpic__featured-image {
        width: 50%;
      }
    }

    .aboutpic__right {
      div {
        img {
          height: 15vh;
        }
      }
    }
  }

  @media screen and (min-width: 600px) and (max-width: 767px) {
    .aboutpic__left {
      div {
        img {
          height: 12vh;
        }
      }
      .aboutpic__featured-image {
        width: 50%;
      }
    }

    .aboutpic__right {
      div {
        img {
          height: 12vh;
        }
      }
    }
  }

  @media screen and (max-width: 599px) {
    flex-direction: column;

    figure {
      width: 100%;
      flex-direction: column;
      gap: 0;
    }

    .aboutpic__left {
      .aboutpic__featured-image {
        margin: 5px 0 5px 0;
      }
    }

    .aboutpic__right {
      div {
        flex-direction: column;

        img {
          margin-right: 0;
        }
      }

      .aboutpic__top,
      .aboutpic__bottom {
        img {
          margin-bottom: 5px;

          &:first-child {
            width: 100%;
          }
          &:last-child {
            width: 100%;
          }
        }
      }
    }
  }
`;

// ============ services

export const AboutServices = styled.section`
  .GlobalTitle {
    margin-top: 10%;
  }

  .aboutServices {
    margin-top: 10%;
    display: flex;

    figure {
      background-color: var(--white);
      position: relative;

      & + figure {
        margin-left: 20px;
      }

      div {
        background-color: var(--purple);
        position: absolute;
        top: 57%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 50%;
        width: 70px;
        height: 70px;

        img {
          width: 28px;
          margin: 0 auto;
          position: relative;
          top: 20px;
        }
      }

      figcaption {
        padding-bottom: 15px;

        h3 {
          font-family: "Rajdhani", sans-serif;
          font-weight: 700;
          font-size: 2rem;
          text-align: center;
          margin: 30px 0;
        }

        p {
          text-align: center;
        }
      }
    }
  }

  @media screen and (max-width: 1024px) {
    width: 90%;
    margin: 0 auto;
  }

  @media screen and (min-width: 993px) and (max-width: 1024px) {
    .aboutServices {
      figure {
        div {
          top: 50%;
        }
      }
    }
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    .GlobalTitle {
      width: 100%;

      h1 {
        font-size: 2rem;
      }
      p {
        top: -15px;
        left: 0;
        letter-spacing: 10px;
      }
    }

    .aboutServices {
      figure {
        div {
          top: 40%;
          width: 50px;
          height: 50px;

          img {
            width: 23px;
            top: 14px;
          }
        }

        figcaption {
          h3 {
            font-size: 1.3rem;
          }
          p {
            width: 90%;
            margin: 0 auto;
          }
        }
      }
    }
  }

  @media screen and (max-width: 767px) {
    .aboutServices {
      flex-direction: column;

      figure {
        & + figure {
          margin-left: 0;
          margin-top: 40px;
        }

        figcaption {
          padding-bottom: 10%;
          p {
            width: auto;
          }
        }
      }
    }
  }

  @media screen and (min-width: 600px) and (max-width: 767px) {
    .aboutServices {
      figure {
        width: 60%;
        margin: 0 auto;

        & + figure {
          margin: 30px auto 0 auto;
        }

        div {
          top: 50%;
        }
      }
    }
  }

  @media screen and (min-width: 321px) and (max-width: 599px) {
    .aboutServices {
      figure {
        div {
          top: 50%;
        }
      }
    }
  }

  @media screen and (max-width: 320px) {
    .aboutServices {
      figure {
        div {
          top: 46%;
        }
      }
    }
  }
`;
