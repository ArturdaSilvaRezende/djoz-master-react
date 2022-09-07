import styled from "styled-components";
import CountdownBg from "./img/countdown-bg.jpg";

export const Countdown = styled.section`
  position: relative;
  margin-top: 8%;
  background-image: url(${CountdownBg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
  height: 600px;

  @media screen and (min-width: 768px) and (max-width: 992px) {
    margin-top: 120px;
    height: 500px;
  }

  @media screen and (max-width: 767px) {
    margin-top: 120px;
    height: 430px;
  }
`;

export const CountdownContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--white);
  width: 100%;
  text-align: center;

  h1,
  h3,
  p,
  span {
    text-shadow: 0 0 20px var(--purple);
  }

  hgroup {
    h1 {
      font-family: "Rockville Solid Regular";
      margin-bottom: 5px;
      font-size: 5rem;
    }
    h3 {
      font-size: 2rem;
    }
  }

  .countdown__time {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin: 20px auto 30px auto;
    width: 40%;

    p {
      span {
        display: block;

        &:first-child {
          font-weight: bold;
          font-size: 4rem;
        }

        &:last-child {
          font-weight: 500;
        }
      }
    }
  }

  button {
    background-color: var(--purple);
    color: var(--white);
    padding: 10px;
    width: 140px;
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    hgroup {
      h1 {
        font-size: 4rem;
      }
      h3 {
        font-size: 1.9rem;
      }
    }

    .countdown__time {
      width: 50%;
      margin: 40px auto;

      p {
        span {
          &:first-child {
            font-size: 2.5rem;
          }
        }
      }
    }
  }

  @media screen and (min-width: 600px) and (max-width: 767px) {
    hgroup {
      h1 {
        font-size: 3rem;
      }
      h3 {
        font-size: 1.6rem;
      }
    }

    .countdown__time {
      width: 50%;
      margin: 40px auto;

      p {
        span {
          &:first-child {
            font-size: 2.5rem;
          }
        }
      }
    }
  }

  @media screen and (max-width: 599px) {
    hgroup {
      h1 {
        font-size: 2.4rem;
      }
      h3 {
        font-size: 1rem;
      }
    }

    .countdown__time {
      width: 60%;
      margin: 20px auto 0 auto;

      p {
        width: 100px;

        span {
          &:first-child {
            font-size: 1.7rem;
          }
        }
      }
    }

    button {
      margin-top: 30px;
    }
  }

  @media screen and (max-width: 320px) {
    .countdown__time {
      width: 90%;
    }
  }
`;
