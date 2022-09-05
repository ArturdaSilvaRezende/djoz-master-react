import styled from "styled-components";

export const ModalGlobal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  display: none;

  video {
    position: relative;
    border-radius: 7px;
    object-fit: cover;
    width: 50vw;
  }

  button {
    position: absolute;
    top: -20px;
    right: -15px;
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
      top: -40px;
      right: -20px;
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
    }
    button {
      font-size: 2rem;
      top: -40px;
    }
  }

  @media screen and (max-width: 599px) {
    video {
      height: 30vh;
    }

    button {
      font-size: 1.5rem;
      top: -30px;
    }
  }
`;
