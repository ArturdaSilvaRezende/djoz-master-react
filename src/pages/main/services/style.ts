import styled from "styled-components";
import ServicesHeroBg from "../assets/img/service-left.jpg";

export const ServicesSection = styled.section`
  margin-top: 8%;
  display: flex;

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

export const ServicesHero = styled.div`
  background: url(${ServicesHeroBg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
  width: 50vw;
  height: 100vh;
  position: relative;

  @media screen and (min-width: 768px) and (max-width: 992px) {
    width: 80%;
    height: 500px;
  }

  @media screen and (min-width: 600px) and (max-width: 767px) {
    width: 100%;
    height: 30vh;
  }

  @media screen and (max-width: 599px) {
    width: 100%;
    height: 50vh;
  }
`;

export const ServicesBtnPlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  margin: 30px auto 0 auto;
  background: linear-gradient(
    to right,
    rgba(127, 0, 173, 0.7),
    rgba(93, 0, 206, 0.7)
  );
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
`;

export const ServicesItems = styled.div`
  width: 50vw;
  display: flex;
  flex-wrap: wrap;

  figure {
    padding: 15px;

    img {
      width: 20%;
      margin: 50px auto 0 auto;
    }

    &:nth-child(1) {
      background-color: var(--indigo);
      width: 50%;
    }
    &:nth-child(2) {
      background-color: var(--very-purple);
      width: 50%;
    }
    &:nth-child(3) {
      background-color: var(--very-purple);
      width: 50%;
    }
    &:nth-child(4) {
      background-color: var(--indigo);
      width: 50%;
    }

    figcaption {
      text-align: center;

      h2,
      p {
        color: var(--white);
      }

      h2 {
        margin: 20px 0;
        font-size: 1.5rem;
        font-family: "Rajdhani", sans-serif;
      }
    }
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    width: 100%;
    flex-wrap: wrap;

    figure {
      padding: 10px;

      img {
        width: 35%;
        margin: 10px auto 0 auto;
      }

      figcaption {
        h2 {
          margin: 20px 0;
          font-size: 1.3rem;
        }
        p {
          font-size: 0.9rem;
        }
      }
    }
  }

  @media screen and (min-width: 600px) and (max-width: 767px) {
    width: 100%;
    flex-wrap: wrap;

    figure {
      padding: 40px;

      img {
        width: 35%;
        margin: 0 auto;
      }

      figcaption {
        h2 {
          font-size: 1.7rem;
          margin: 20px 0;
        }
      }
    }
  }

  @media screen and (max-width: 599px) {
    flex-direction: column;
    width: 100%;

    figure {
      padding: 30px;

      img {
        width: 20%;
        margin: 0 auto;
      }

      &:nth-child(n) {
        width: 100%;
      }

      &:nth-child(3) {
        background-color: var(--indigo);
      }
      &:nth-child(4) {
        background-color: var(--very-purple);
      }

      figcaption {
        h2 {
          font-size: 1.6rem;
          margin: 15px 0;
        }
      }
    }
  }
`;
