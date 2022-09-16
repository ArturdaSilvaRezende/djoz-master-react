import styled from "styled-components";

export const Discography = styled.div`
  background-color: var(--light);
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  .GlobalTitle {
    width: 100%;
    text-align: center;
    margin: 6% 0;
  }

  @media screen and (max-width: 1024px) {
    width: 90%;
    margin: 0 auto;
  }
`;

export const DiscographyItems = styled.section`
  margin-top: 6%;

  .discography__container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

    figure {
      background-color: var(--white);
      border-radius: 10px;
      margin-top: 30px;

      img {
        border-radius: 10px 10px 0 0;
      }

      figcaption {
        padding: 25px;
        text-align: center;

        h2 {
          color: var(--purple);
          font-size: 1.5rem;
        }

        p {
          font-size: 1.2rem;
          margin: 10px 0;
          font-weight: 300;
        }

        div {
          button + button {
            margin-left: 10px;
          }
        }
      }
    }
  }

  .discography__pagination {
    margin-top: 80px;
    text-align: center;

    button {
      background-color: #f2f2f2;
      width: 50px;
      height: 50px;
      font-family: "Rajdhani", sans-serif;
      transition: 0.3s ease;

      & + button {
        margin-left: 10px;
      }

      &:hover {
        background-color: var(--purple);
        color: var(--white);
      }
    }
  }

  .discography__active {
    background-color: var(--purple) !important;
    color: var(--white);
  }

  @media screen and (min-width: 993px) and (max-width: 1024px) {
    .discography__container {
      figure {
        width: 33%;

        figcaption {
          div {
            button {
              img {
                width: 110px;
              }
            }
          }
        }
      }
    }
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    .discography__container {
      figure {
        width: 48%;

        figcaption {
          div {
            button {
              img {
                width: 110px;
              }
            }
          }
        }
      }
    }
  }

  @media screen and (min-width: 600px) and (max-width: 767px) {
    margin-top: 12%;

    .discography__container {
      figure {
        width: 48%;
        margin: 0 auto 35px auto;

        figcaption {
          div {
            display: flex;
          }
        }
      }
    }
  }

  @media screen and (max-width: 599px) {
    .discography__container {
      figure {
        figcaption {
          padding: 15px;

          div {
            margin-bottom: 5%;
            display: flex;
          }
        }
      }
    }

    .discography__pagination {
      button {
        width: 35px;
        height: 35px;
        font-size: 0.9rem;
      }
    }
  }

  @media screen and (max-width: 280px) {
    .discography__container {
      figure {
        figcaption {
          div {
            button {
              img {
                width: 100px;
              }
            }
          }
        }
      }
    }
  }
`;
