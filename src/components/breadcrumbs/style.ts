import styled from "styled-components";

export const Breadcrumbs = styled.div`
  margin-top: 130px;

  div {
    background-color: var(--breadcrumbs);
    padding: 10px;
    display: flex;
    align-items: center;

    a,
    h2 {
      color: var(--white);
    }

    a {
      display: flex;
      align-items: center;

      span {
        display: block;

        &:last-child {
          margin: 0 0 3px 5px;
        }
      }
    }

    .breadcrumbs__bar {
      transform: skew(-20deg);
      border-right: 2px solid var(--white);
    }

    h2 {
      margin-left: 20px;
    }
  }

  @media screen and (max-width: 992px) {
    width: 90%;
    margin: 100px auto 50px auto;
  }
`;
