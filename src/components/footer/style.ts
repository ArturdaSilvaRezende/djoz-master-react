import styled from "styled-components";

import FooterBg from "./img/footer-bg.png";

export const Footer = styled.footer`
  background: url(${FooterBg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
  height: 549px;
  position: relative;

  .footer__copyright {
    position: absolute;
    bottom: 5px;
    left: 50%;
    transform: translateX(-50%);
    padding-bottom: 30px;
    width: 30%;

    p {
      color: var(--white);
      text-align: center;

      a {
        color: var(--secondary);
        font-weight: 500;
      }
    }
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    margin-top: -30px;

    .footer__copyright {
      width: 50%;
    }
  }

  @media screen and (min-width: 600px) and (max-width: 767px) {
    margin-top: 30px;
    background-position: left top;
    height: 850px;

    .footer__copyright {
      width: 70%;
    }
  }

  @media screen and (max-width: 599px) {
    margin-top: -40px;
    background-position: left top;
    height: 850px;

    .footer__copyright {
      width: 90%;
      bottom: 5px;
    }
  }
`;

export const Container = styled.div`
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -70%);
  display: grid;
  grid-template-columns: 28% 28% 33%;
  justify-content: space-between;
  width: 80%;

  .footer__contact {
    border-right: 1px solid var(--secondary);

    div {
      display: flex;

      & + div {
        margin-top: 30px;
      }

      p {
        &:first-child {
          background-color: var(--white);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          text-align: center;
          line-height: 50px;
          color: var(--purple);
        }
        &:last-child {
          color: var(--white);
          margin: -2px 0 0 10px;

          span {
            display: block;

            &:first-child {
              color: var(--secondary);
              font-weight: 500;
              font-size: 1.1rem;
              margin-bottom: 8px;
            }
          }
        }
      }
    }
  }

  .footer__social {
    border-right: 1px solid var(--secondary);

    h2 {
      color: var(--white);

      span {
        &:first-child {
          font-size: 2rem;
          text-transform: uppercase;
        }
        &:last-child {
          font-size: 1.7rem;
        }
      }
    }

    nav {
      margin-top: 20px;
      width: 80%;

      ul {
        display: flex;
        justify-content: space-between;

        li {
          background-color: var(--white);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          text-align: center;
          line-height: 52px;
          color: var(--purple);
          cursor: pointer;
          font-size: 1.1rem;
        }
      }
    }
  }

  .footer__newsletter {
    margin-top: 5px;

    h2 {
      color: var(--white);
      text-transform: uppercase;
      margin-bottom: 20px;
      font-size: 1.7rem;
      margin-bottom: 25px;
    }

    div {
      display: flex;

      input {
        background-color: transparent;
        border-left: 1px solid var(--secondary);
        border-top: 1px solid var(--secondary);
        border-bottom: 1px solid var(--secondary);
        border-right: solid transparent;
        padding: 10px;
        width: 90%;
        color: var(--white);
      }

      button {
        padding: 10px;
        border: none;
        background-color: var(--white);
        color: var(--purple);
        width: 50px;
      }
    }
  }

  @media screen and (min-width: 992px) and (max-width: 1024px) {
    width: 85%;
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    width: 90%;
    grid-template-columns: 31% 33% 31%;
    justify-content: space-around;
    top: 70%;
    transform: translate(-50%, -70%);

    .footer__contact {
      div {
        p {
          &:last-child {
            margin: -5px 0 0 10px;

            span {
              font-size: 1.2rem;

              &:first-child {
                margin-bottom: 5px;
              }

              &:last-child {
                font-size: 0.9rem;
              }
            }
          }
        }
      }
    }

    .footer__social {
      width: 90%;
      padding-left: 20px;

      nav {
        ul {
          justify-content: space-between;

          li {
            width: 35px;
            height: 35px;
            line-height: 35px;
          }
        }
      }
    }

    .footer__newsletter {
      h2 {
        font-size: 1.7rem;
      }
      div {
        input {
          border: 1px solid var(--secondary);
          width: 100%;
        }
      }
    }
  }

  @media screen and (max-width: 767px) {
    grid-template-columns: 100%;
    width: 80%;

    .footer__contact,
    .footer__social {
      border-right: none;
    }
  }

  @media screen and (min-width: 600px) and (max-width: 767px) {
    width: 50%;
    top: 65%;
    transform: translate(-50%, -65%);

    .footer__contact {
      border-bottom: 1px solid var(--secondary);
      padding-bottom: 30px;
    }

    .footer__social {
      margin: 30px 0;
      border-bottom: 1px solid var(--secondary);
      padding-bottom: 30px;
      text-align: center;

      h2 {
        text-align: left;
      }
    }
  }

  @media screen and (max-width: 599px) {
    top: 65%;
    transform: translate(-50%, -65%);

    .footer__contact {
      border-bottom: 1px solid var(--secondary);
      padding-bottom: 30px;

      div {
        p {
          &:first-child {
            font-size: 1.1rem;
          }
          &:last-child {
            span {
              &:first-child {
                font-size: 1.1rem;
              }
              &:last-child {
                font-size: 1rem;
              }
            }
          }
        }
      }
    }

    .footer__social {
      margin-top: 20px;
      text-align: center;
      border-bottom: 1px solid var(--secondary);
      padding-bottom: 30px;
      width: 100%;

      h2 {
        span {
          &:first-child {
            font-size: 2rem;
          }
          &:last-child {
            font-size: 1.7rem;
          }
        }
      }

      nav {
        width: 100%;
        ul {
          justify-content: space-around;

          li {
            font-size: 1.2rem;
          }
        }
      }
    }

    .footer__newsletter {
      margin-top: 20px;

      h2 {
        font-size: 1.6rem;
        text-align: center;
      }

      div {
        input {
          width: 80%;
        }
      }
    }
  }

  @media screen and (max-width: 280px) {
    .footer__social {
      width: 90%;
      margin: 20px auto;
    }

    .footer__newsletter {
      div {
        input {
          width: 90%;
        }
      }
    }
  }
`;
