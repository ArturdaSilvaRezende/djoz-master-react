import styled from "styled-components";

export const Contact = styled.div`
  background-color: var(--light);
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  @media screen and (max-width: 1024px) {
    width: 90%;
  }
`;

export const ContactContents = styled.section`
  margin-top: 60px;
  display: flex;
  background-color: var(--white);
  padding: 10px 30px;

  @media screen and (min-width: 768px) and (max-width: 992px) {
    padding: 10px 15px;
  }

  @media screen and (max-width: 767px) {
    flex-direction: column;
    padding: 10px;
  }
`;

export const ContactInfo = styled.div`
  width: 45%;

  h2 {
    font-size: 2rem;
    font-weight: 500;
    text-align: center;
  }

  h3 {
    font-weight: 500;
    font-size: 1.2rem;
  }

  .info__message {
    margin: 20px 0;
    font-size: 1.1rem;
    text-align: center;
  }

  .info__item {
    display: flex;
    align-items: center;

    & + .info__item {
      margin-top: 10px;
    }

    .info__icon {
      height: 70px;
      width: 70px;
      background: #f5f5f5;
      border-radius: 50%;
      line-height: 70px;
      text-align: center;
      font-size: 1.2rem;
      color: var(--very-purple);
    }

    .info__description {
      margin: 0 0 10px 20px;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    width: 50%;

    .info__message {
      font-size: 1rem;
      width: 70%;
      margin: 20px auto;
    }

    .info__item {
      .info__icon {
        height: 40px;
        width: 40px;
        line-height: 40px;
        font-size: 1.1rem;
      }

      .info__description {
        p {
          span {
            display: block;
          }
        }

        .info__description--width {
          width: 70%;
        }
      }
    }
  }

  @media screen and (max-width: 767px) {
    width: 100%;
    margin-bottom: 40px;
    border-bottom: 2px solid var(--purple);
    padding: 20px 0;
  }

  @media screen and (max-width: 599px) {
    .info__item {
      .info__icon {
        height: 40px;
        width: 40px;
        line-height: 40px;
        font-size: 1rem;
      }

      p {
        font-size: 0.9rem;
      }
    }
  }
`;

export const ContactForm = styled.form`
  width: 55%;

  h2 {
    font-size: 2rem;
    font-weight: 500;
    text-align: center;
  }

  p {
    margin: 20px 0;
    font-size: 1.1rem;
    text-align: center;
    padding-bottom: 20px;
  }

  .form__item--margin {
    div + div {
      margin-left: 10px;
    }
  }

  .form__item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;

    div {
      width: 100%;
      display: flex;
      flex-direction: column;

      label {
        margin: 0 15px 5px 0;
        color: var(--secondary);
      }

      .required-field,
      .email-validation {
        color: var(--danger);
      }

      input {
        padding: 7px 10px;
        width: 100%;
        border: 1px solid #b5b5b5;
        outline: none;
        border-radius: 5px;
        color: var(--secondary);

        &::placeholder {
          color: #b5b5b5;
        }
      }

      textarea {
        border: 1px solid #b5b5b5;
        padding: 15px 10px;
        font-family: Arial, Helvetica, sans-serif;
        outline: none;
        color: var(--secondary);
        resize: none;

        &::placeholder {
          color: #b5b5b5;
        }
      }
    }
  }

  button {
    padding: 12px;
    background-color: var(--purple);
    color: var(--white);
    margin: 30px 0;
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    width: 65%;

    p {
      font-size: 1rem;
      width: 70%;
      margin: 20px auto;
    }
  }

  @media screen and (max-width: 767px) {
    width: 100%;

    p {
      font-size: 1rem;
      width: 70%;
      margin: 20px auto;
    }
  }

  @media screen and (max-width: 599px) {
    p {
      width: 90%;
    }
  }
`;
