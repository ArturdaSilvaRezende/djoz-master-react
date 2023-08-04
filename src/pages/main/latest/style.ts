import styled from "styled-components";

export const LatestTracks = styled.section`
  margin-top: 10%;

  .latest__title {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

    button {
      border: 2px solid var(--purple);
      width: 200px;
      padding: 10px;
      text-transform: uppercase;
    }
  }

  .latest__contents {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

    .latest__contents--pic {
      margin-top: 6%;
      background-color: #e9e9e9da;

      img {
        position: relative;
        width: 90%;
        margin-left: auto;
        top: -40px;
      }
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    .latest__title {
      padding: 0 30px;
    }
    .latest__contents {
      padding: 0 20px;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    margin-top: 12%;

    .latest__contents {
      .latest__contents--pic {
        margin-top: 12%;

        img {
          width: 95%;
        }
      }
    }
  }

  @media screen and (max-width: 767px) {
    margin-top: 80px;
    text-align: center;

    .latest__title {
      flex-direction: column;

      button {
        margin: 30px auto 0 auto;
      }
    }

    .latest__contents {
      flex-direction: column;

      .latest__contents--pic {
        margin-top: 80px;

        img {
          width: 100%;
          top: 0;
        }
      }
    }
  }

  @media screen and (min-width: 600px) and (max-width: 767px) {
    .latest__contents {
      .latest__contents--pic {
        width: 50%;
        margin: 40px auto 0 auto;
      }
    }
  }
`;

export const LatestMusic = styled.div`
  margin-top: 6%;
  overflow-y: auto;
  height: 450px;
  width: 50vw;

  ::-webkit-scrollbar {
    width: 7px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px var(--purple);
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--purple);
    border-radius: 10px;
  }

  .latest__musics {
    h3 {
      margin: 20px 0 10px 15px;
      color: var(--purple);
    }

    audio {
      background-color: var(--purple);
      padding: 5px;
      border-radius: 10px;
      width: 95%;
      margin: 0 auto;

      &::-webkit-media-controls-panel {
        background-color: var(--white);
      }

      &::-webkit-media-controls-timeline {
        background-color: #000;
        display: flex;
        flex: 1 1;
        height: 4px;
        padding: 0px;
        border: initial;
        margin: 0 20px;
      }
    }
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    margin-top: 12%;
    height: 35vh;
  }

  @media screen and (min-width: 600px) and (max-width: 767px) {
    height: 34vh !important;
  }

  @media screen and (max-width: 767px) {
    width: 90%;
    margin: 60px auto 0 auto;
    height: 54vh;
    text-align: left;
  }
`;

export const LatestYoutube = styled.div`
  margin-top: 10%;

  .GlobalTitle {
    text-align: center;
  }

  @media screen and (max-width: 992px) {
    .GlobalTitle {
      width: 90%;
      margin: 0 auto;
    }
  }

  @media screen and (max-width: 599px) {
    .GlobalTitle {
      margin: 60px auto;
    }
  }
`;

export const YoutubeItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 120px auto 30px auto;

  figure {
    width: 32%;
    background-color: var(--white);
    box-shadow: 0 10px 10px var(--secondary);
    position: relative;

    img {
      width: 100%;
    }

    figcaption {
      text-align: center;
      padding: 10px;

      p {
        &:first-child {
          font-weight: 700;
          font-size: 1rem;
        }

        &:last-child {
          margin: 10px 0;
          color: var(--purple);
          font-weight: 500;
        }
      }
    }

    .youtubeFeed__btn {
      background-color: var(--purple);
      border-radius: 50%;
      width: 60px;
      height: 60px;
      position: absolute;
      top: 40%;
      left: 50%;
      transform: translate(-50%, -40%);

      button {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: var(--white);
        color: var(--purple);
        display: block;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        font-size: 1rem;

        svg {
          margin: 4px 0 0 3px;
        }
      }
    }

    .youtubeFeed__container {
      position: absolute;
      inset: 0;
      background-color: rgba(0, 0, 0, 0.8);

      .youtubeFeed__video {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        video {
          width: 25vw;
          height: 200px;
          position: relative;
        }

        button {
          position: absolute;
          color: var(--white);
          font-size: 2rem;
          top: -10px;
          left: -10px;

          svg {
            background-color: var(--indigo);
            border-radius: 50%;
          }
        }
      }
    }
  }

  @media screen and (min-width: 992px) and (max-width: 1024px) {
    padding: 0 15px;
    justify-content: space-around;

    figure {
      width: 30%;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    margin: 60px auto 30px auto;
    width: 90%;

    figure {
      width: 30%;

      figcaption {
        p {
          &:last-child {
            font-size: 0.9rem;
          }
        }
      }

      .youtubeFeed__container {
        .youtubeFeed__video {
          video {
            width: 23vw;
            height: 200px;
            position: relative;
            top: -20px;
          }

          button {
            top: 10px;
          }
        }
      }
    }
  }

  @media screen and (max-width: 767px) {
    flex-direction: column;

    figure {
      & + figure {
        margin-top: 50px;
      }
    }
  }

  @media screen and (min-width: 600px) and (max-width: 767px) {
    margin: 60px auto 30px auto;

    figure {
      width: 70%;
      margin: 0 auto;

      .youtubeFeed__container {
        .youtubeFeed__video {
          video {
            width: 65vw;
            height: 200px;
          }
          button {
            top: -10px;
          }
        }
      }
    }
  }

  @media screen and (max-width: 599px) {
    margin: 40px auto 30px auto;

    figure {
      width: 90%;
      margin: 0 auto;

      .youtubeFeed__container {
        .youtubeFeed__video {
          width: 90%;

          video {
            width: 80vw;
            height: 200px;
          }
        }
      }
    }
  }
`;
