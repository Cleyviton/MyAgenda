import styled from "styled-components";

export const StyledCard = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 3px;

  width: 200px;
  height: max-content;

  padding: 20px 15px 10px 15px;

  border-radius: 10px;

  background-color: var(--color-gray-900);
  transition: 0.3s;
  cursor: pointer;

  .name {
    font-size: 2rem;
  }

  .email {
    font-size: 1.5rem;
  }

  .phone {
    font-size: 1.5rem;
  }

  div {
    display: flex;
    gap: 15px;

    margin-top: 20px;

    button {
      font-size: 1.35rem;
      color: var(--color-gray-300);

      border: 1px solid transparent;
      border-radius: 6px;

      padding: 3px 8px;

      background-color: transparent;
      transition: 0.3s;
    }

    .btnEditar {
      background-color: var(--color-brand-1);

      &:hover {
        background-color: var(--color-brand-2);
      }
    }

    .btnExcluir {
      background-color: var(--color-red-1);

      &:hover {
        background-color: red;
      }
    }
  }

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 620px) {
    width: 80%;
  }
`;
