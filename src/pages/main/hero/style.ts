import styled from "styled-components";

import HeroBg from "../assets/img/hero-bg.png";

export const HeroSection = styled.section`
  background: url(${HeroBg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
  position: relative;
  padding-top: 400px;
  padding-bottom: 500px;

  .heroSection__description {
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;

    p {
      &:nth-child(1) {
        color: var(--white);
        text-transform: uppercase;
        font-weight: 500;
        font-size: 1.5rem;
        letter-spacing: 6px;
        text-align: center;
      }

      &:nth-child(2) {
        color: var(--white);
        font-family: "Rockville Solid Regular";
        display: flex;
        justify-content: center;
        font-size: 6rem;
      }

      &:nth-child(3) {
        color: var(--white);
        font-weight: 500;
        line-height: 1.7;
        font-size: 1.1rem;
        text-align: center;
        width: 50%;
        margin: 0 auto;
      }
    }

    .heroSection__btn {
      position: relative;
      margin: 30px auto 0 auto;
      background-color: rgba(255, 255, 255, 0.3);
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
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    .heroSection__description {
      top: 54%;

      p {
        &:nth-child(1) {
          font-size: 2.5rem;
        }

        &:nth-child(2) {
          align-items: center;
          width: 100%;
          margin: 15px auto;
          font-size: 6.5rem;
        }

        &:nth-child(3) {
          width: 60%;
          font-size: 1.3rem;
        }
      }

      .heroSection__btn {
        width: 125px;
        height: 125px;

        button {
          width: 85px;
          height: 85px;
          line-height: 17px;
          font-size: 1.7rem;

          svg {
            margin: 3px 0 0 5px;
          }
        }
      }
    }
  }

  @media screen and (max-width: 767px) {
    .heroSection__description {
      top: 50%;

      p {
        &:nth-child(2) {
          text-align: center;
          width: 90%;
          margin: 15px auto;
          flex-direction: column;

          span {
            &:last-child {
              margin-top: -25px;
            }
          }
        }

        &:nth-child(3) {
          width: 80%;
        }
      }

      .heroSection__btn {
        width: 65px;
        height: 65px;

        button {
          width: 35px;
          height: 35px;
          line-height: 17px;

          svg {
            margin: 3px 0 0 3px;
          }
        }
      }
    }
  }

  @media screen and (min-width: 600px) and (max-width: 767px) {
    .heroSection__description {
      p {
        &:nth-child(1) {
          font-size: 2rem;
        }
        &:nth-child(2) {
          font-size: 5rem;
        }
        &:nth-child(3) {
          font-size: 1.5rem;
        }
      }
    }

    .heroSection__btn {
      width: 95px !important;
      height: 95px !important;

      button {
        width: 65px !important;
        height: 65px !important;
      }
    }
  }

  @media screen and (min-width: 321px) and (max-width: 599px) {
    padding: 350px 0 300px 0;

    .heroSection__description {
      p {
        &:nth-child(1) {
          font-size: 1.2rem;
        }
        &:nth-child(2) {
          font-size: 3.5rem;
        }
        &:nth-child(3) {
          font-size: 1rem;
        }
      }

      .heroSection__btn {
        button {
          font-size: 1rem;
        }
      }
    }
  }

  @media screen and (max-width: 320px) {
    padding: 300px 0 300px 0;

    .heroSection__description {
      top: 54%;

      p {
        &:nth-child(1) {
          font-size: 1rem;
        }
        &:nth-child(2) {
          font-size: 2.5rem;
        }
        &:nth-child(3) {
          font-size: 0.8rem;
        }
      }
    }
  }
`;
