import styled from "styled-components";

export const StyledHeader = styled.header`
  padding: 20px 0;
  background-color: var(--color-gray-900);
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 70%;
    margin: 0 auto;

    p {
      font-size: 1.8rem;
    }
    span {
      font-size: 1.5rem;
    }
  }

  .profile {
    transition: 0.3s;
    color: var(--color-brand-1);
    &:hover {
      color: var(--color-brand-2);
    }
  }

  div > div {
    display: flex;
    align-items: center;
    gap: 10px;

    > div {
      display: flex;
      flex-direction: column;
      gap: 5px;
    }
  }
  .box--icons {
    display: flex;
    gap: 20px;
  }

  .iconBtn {
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      color: var(--color-brand-1);
    }
  }
  .delete {
    &:hover {
      color: red;
    }
  }

  .hamburguer {
    display: none;
    cursor: pointer;
  }

  @media (max-width: 620px) {
    padding: 20px;
    .container {
      max-width: 100%;
    }

    .box--icons {
      flex-direction: column;
      .hamburguer {
        display: block;
      }
    }

    .hidden {
      display: none;
    }
  }
`;
