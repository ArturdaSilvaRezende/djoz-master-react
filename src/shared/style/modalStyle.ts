import styled from "styled-components";

export const ModalGlobal = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: none;
  background-color: rgba(0, 0, 0, 0.8);
  height: 100vh;

  video {
    position: absolute;
    left: 50%;
    top: 50%;
    border-radius: 7px;
    object-fit: cover;
    width: 50vw;
    height: 45vh;
    transform: translate(-50%, -50%);
  }

  button {
    position: absolute;
    right: 20%;
    top: 26%;
    transform: translate(-50%, -50%);
    color: var(--white);
    font-size: 2rem;

    svg {
      background-color: var(--indigo);
      border-radius: 50%;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    video {
      width: 70vw;
      height: 300px;
    }
    button {
      font-size: 2.5rem;
      right: 6%;
      top: 34%;
      transform: translate(-50%, -50%);
    }
  }

  @media screen and (max-width: 767px) {
    video {
      width: 90vw;
    }
  }

  @media screen and (min-width: 600px) and (max-width: 767px) {
    video {
      height: 300px;
      width: 80vw;
    }
    button {
      font-size: 2rem;
      right: 2%;
      top: 34%;
      transform: translate(-50%, -50%);
    }
  }

  @media screen and (max-width: 599px) {
    video {
      height: 30vh;
      width: 75vw;
    }

    button {
      font-size: 1.5rem;
      right: 2%;
      top: 34%;
      transform: translate(-50%, -50%);
    }
  }
`;
