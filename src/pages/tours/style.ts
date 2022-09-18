import styled from "styled-components";

export const Tours = styled.div`
  background-color: var(--light);
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  .countdown {
    margin-top: 4%;
  }

  @media screen and (max-width: 1024px) {
    width: 90%;
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    .countdown {
      margin-top: -10px;
    }
  }
`;

export const ToursItem = styled.section`
  margin-top: 10%;

  .toursItems__box + .toursItems__box {
    margin-top: 10%;
  }

  .toursItems__box {
    display: flex;
    justify-content: space-between;

    &:nth-child(2) {
      figure {
        margin-left: 5%;
      }
    }

    .toursItems__description {
      width: 50%;

      h1 {
        text-transform: uppercase;
        font-weight: 500;
        font-size: 2.5rem;
      }

      .toursItems__date {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 25px 0;
        border-bottom: 2px solid var(--purple);
        padding-bottom: 20px;

        div {
          p {
            & + p {
              margin-top: 15px;
            }
            svg {
              color: var(--purple);
              padding-top: 2px;
              margin-right: 5px;
            }
          }
        }

        button {
          padding: 10px;
          background-color: var(--purple);
          color: var(--white);
        }
      }

      p {
        font-weight: 500;
        font-family: "Rajdhani", sans-serif;

        & + p {
          margin-top: 20px;
        }
      }

      button {
        border: 2px solid var(--purple);
        padding: 10px;
        width: 150px;
        margin-top: 25px;
      }
    }

    figure {
      width: 40%;
      position: relative;
      z-index: 1;

      &:after {
        position: absolute;
        top: -50px;
        left: 10px;
        width: calc(100% - 50px);
        height: 100%;
        border: 20px solid rgba(9, 53, 247, 0.1);
        content: "";
        z-index: -1;
      }

      img {
        position: relative;
        left: -50px;
      }
    }
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    margin-top: 15%;

    .toursItems__box {
      align-items: center;

      &:nth-child(2) {
        figure {
          margin-left: 8%;
        }
      }

      .toursItems__description {
        width: 53%;

        h1 {
          font-size: 2rem;
        }
      }

      figure {
        width: 35%;

        img {
        }
      }
    }
  }

  @media screen and (max-width: 767px) {
    .toursItems__box {
      flex-direction: column;

      &:nth-child(2) {
        .toursItems__description {
          order: 1;
        }

        figure {
          order: 2;
        }
      }

      .toursItems__description {
        width: 100%;
      }

      figure {
        width: 60%;
      }
    }
  }

  @media screen and (min-width: 600px) and (max-width: 767px) {
    .toursItems__box {
      &:nth-child(2) {
        figure {
          margin: 20% auto 0 auto;
        }
      }

      .toursItems__description {
        .toursItems__date {
          div {
            p {
              font-size: 1.1rem;
            }
          }
        }
      }

      figure {
        margin: 20% auto 0 auto;
      }
    }
  }

  @media screen and (max-width: 599px) {
    .toursItems__box + .toursItems__box {
      margin-top: 100px;
    }

    .toursItems__box {
      &:nth-child(2) {
        figure {
          margin: 100px auto 0 auto;
        }
      }

      .toursItems__description {
        h1 {
          font-size: 2rem;
        }

        .toursItems__date {
          flex-direction: column;
          align-items: flex-start;
        }
      }

      figure {
        margin: 100px auto 0 auto;

        img {
          left: -35px;
        }
      }
    }
  }
`;
