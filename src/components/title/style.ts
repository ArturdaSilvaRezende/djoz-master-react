import styled from "styled-components";

export const GlobalTitle = styled.div`
  position: relative;
  width: 100%;

  h1 {
    font-family: "Rajdhani", sans-serif;
    font-size: 2.5rem;
    color: var(--dark);
    font-weight: 700;
    text-transform: uppercase;
    text-shadow: 0 0 5px var(--purple);
    position: relative;
    top: 10px;
  }

  p {
    font-size: 5rem;
    color: hsl(0, 0%, 90%);
    font-family: "Rockville Solid Regular";
    position: absolute;
    left: 0;
    top: -45px;
    width: 100%;
    z-index: -1;
    font-weight: 700;
    letter-spacing: 5px;
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    width: 80%;

    h1 {
      font-size: 2rem;
      top: 10px;
      left: 25px;
    }

    p {
      top: -10px;
      font-size: 2.2em;
      letter-spacing: 12px;
    }
  }

  @media screen and (min-width: 600px) and (max-width: 767px) {
    width: 100%;

    h1 {
      font-size: 2.5rem;
    }

    p {
      font-size: 4.5rem;
      top: -40px;
      letter-spacing: 5px;
    }
  }

  @media screen and (max-width: 599px) {
    width: 100%;
    text-align: center;

    h1 {
      font-size: 1.8rem;
      left: 0;
      top: 0;
    }

    p {
      font-size: 2.7rem;
      top: -25px;
      letter-spacing: 5px;
    }
  }
`;
