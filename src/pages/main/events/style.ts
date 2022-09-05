import styled from "styled-components";

export const EventsSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;

  .events__arrow {
    text-align: center;
    font-size: 50px;
    color: var(--very-purple);
    margin-top: -25px;

    @keyframes moveArrow {
      0% {
        top: -13px;
      }
      100% {
        top: 0;
      }
    }

    svg {
      position: relative;
      animation: moveArrow 0.5s ease-in 2s infinite alternate;
    }
  }

  .events__about {
    margin-top: 6%;
    display: flex;
    align-items: center;

    figcaption {
      margin-left: 20px;

      h2 {
        font-size: 2.4rem;
        text-transform: uppercase;
      }

      p {
        margin: 20px 0;
        text-align: justify;
        line-height: 1.7;
        width: 90%;
      }

      button {
        text-align: center;
        background-color: var(--indigo);
        color: var(--white);
        width: 120px;
        padding: 7px;
        display: block;
      }
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    margin-top: 10%;

    .events__arrow {
      margin-top: -110px;
    }

    .events__about {
      padding: 0 25px;

      img {
        width: 50vw;
        margin: 0 auto;
      }

      figcaption {
        h2 {
          font-size: 2.2rem;
        }
        p {
          width: 100%;
        }
      }
    }
  }

  @media screen and (max-width: 767px) {
    .events__arrow {
      font-size: 40px;
    }

    .events__about {
      flex-direction: column;
      margin-top: 60px;

      img {
        width: 90%;
        margin: 0 auto;
      }

      figcaption {
        h2 {
          font-size: 2rem;
          margin-top: 20px;
          text-align: center;
        }

        p {
          text-align: center;
          width: 100%;
          margin: 20px 0 20px -10px;
        }

        button {
          margin: 0 auto;
        }
      }
    }
  }
`;

export const EventsCarousel = styled.div`
  padding: 0 25px;

  .events__title {
    margin: 50px 0 30px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    h1 {
      font-size: 2.5rem;
      text-transform: uppercase;
    }

    div {
      position: absolute;
      top: 30px;
      right: 0;
      display: flex;

      button {
        font-size: 2rem;
        color: var(--secondary);

        &:after {
          content: "";
        }
        &:first-child {
          position: relative;
          left: -10px;
        }
        &:last-child {
          position: relative;
        }
      }
    }
  }

  .mySwiper {
    figure {
      background-color: var(--white);
      border-bottom: 2px solid var(--indigo);
      padding-bottom: 10px;

      figcaption {
        p {
          &:first-child {
            text-align: center;
            background-color: var(--indigo);
            color: var(--white);
            font-weight: 700;
            width: 120px;
            padding: 7px;
            margin: 0 auto;
            position: relative;
            top: -20px;
          }
          &:last-child {
            color: var(--secondary);
            margin-top: 10px;
            text-align: center;
            font-size: 1.2rem;

            svg {
              color: var(--indigo);
              margin-right: 5px;
            }
          }
        }
        h2 {
          text-transform: uppercase;
          font-size: 1.5rem;
          text-align: center;
        }
      }
    }
  }

  @media screen and (max-width: 599px) {
    .events__title {
      h1 {
        font-size: 1.4rem;
      }

      div {
        button {
          top: -15px;
        }
      }
    }
  }
`;
