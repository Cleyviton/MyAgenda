import { styled } from "styled-components";

export const StyledModal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  p {
    font-size: 1.7rem;
    text-align: center;
  }

  button {
    font-size: 1.35rem;
    color: var(--color-gray-300);

    padding: 5px;

    border: 1px solid transparent;
    border-radius: 6px;

    background-color: var(--color-brand-2);
    transition: 0.2s;
    &:hover {
      background-color: red;
    }
  }
`;
