import styled from "styled-components";

export const Header = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(42, 1, 74, 0.5);
  padding: 15px 30px;
  z-index: 999;

  @media screen and (max-width: 767px) {
    padding: 10px 20px;
    box-shadow: 0 0 10px var(--white);
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;

  .header__logo {
    color: var(--white);
    font-weight: bold;
    font-size: 2.5rem;
    position: relative;
    top: -4px;

    span {
      &:first-child {
        text-transform: uppercase;
      }
      &:last-child {
        text-transform: lowercase;
      }
    }
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    .header__logo {
      font-size: 1.8rem;
    }
  }

  @media screen and (max-width: 767px) {
    .header__logo {
      font-size: 1.4rem;
      width: 65px;
    }
  }
`;

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  .menu__navigation {
    margin: 0 50px 0 auto;

    ul {
      display: flex;

      li + li {
        margin-left: 45px;
      }

      li {
        a {
          color: var(--white);
          font-weight: 500;
          text-transform: uppercase;
        }
      }
    }
  }

  .menu__social {
    margin-top: 3px;

    ul {
      display: flex;
      justify-content: space-between;
      align-items: center;

      li + li {
        margin-left: 10px;
      }

      li {
        background-color: var(--white);
        border-radius: 30%;
        width: 28px;
        height: 28px;
        text-align: center;
        color: var(--purple);
        transition: 0.3s ease;
        cursor: pointer;

        &:hover {
          background-color: var(--purple);
          color: var(--white);
        }

        svg {
          position: relative;
          top: 5px;
        }
      }
    }
  }

  .menu__btn {
    color: var(--white);
    display: none;
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    .menu__navigation {
      margin: 0 auto;

      ul {
        li + li {
          margin-left: 12px;
        }

        a {
          font-size: 0.9rem;
        }
      }
    }
    .menu__social {
      ul {
        li + li {
          margin-left: 12px;
        }
      }
    }
  }

  @media screen and (max-width: 767px) {
    .menu__navigation {
      position: absolute;
      top: 51px;
      left: 0;
      background-color: rgba(42, 1, 74, 0.96);
      padding: 20px;
      display: none;
      z-index: 999;
      width: 100%;

      ul {
        text-align: center;
        flex-direction: column;

        li + li {
          margin-top: 15px;
          margin-left: 0;
        }

        li {
          a {
            font-size: 1em;
            text-shadow: 0 0 10px var(--indigo);
            letter-spacing: 2px;
          }
        }
      }
    }

    .menu__social {
      width: 140px;
      margin: 0 auto;

      ul {
        li + li {
          margin-left: 12px;
        }
      }
    }

    .menu__btn {
      font-size: 1.4rem;
      position: relative;
      top: 3px;
      display: block;
    }
  }
`;
