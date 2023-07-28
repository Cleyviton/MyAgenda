import { styled } from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;

  background-color: var(--color-gray-900);
  padding: 20px;
  box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.25);
  width: 100%;
  max-width: 500px;
  border-radius: 6px;

  p {
    font-size: 2.7rem;
    text-align: center;
    margin-bottom: 10px;
  }

  label {
    font-size: 1.5rem;
  }

  input {
    padding: 10px;
    border: 2px solid transparent;
    border-radius: 4px;
  }

  span {
    font-size: 1.7rem;
    text-align: center;
    margin: 5px 0;
  }

  button {
    font-size: 1.6rem;
    color: var(--color-gray-300);

    border: 1px solid transparent;
    border-radius: 6px;

    margin-top: 15px;
    padding: 8px 0;

    background-color: transparent;
    transition: 0.3s;

    background-color: var(--color-brand-1);

    &:hover {
      background-color: var(--color-brand-2);
    }
  }

  .button {
    margin: 0;

    background-color: var(--color-gray-800);

    &:hover {
      background-color: rgba(0, 0, 0, 0.5);
    }
  }

  .error {
    color: red;
    border-color: red;

    &::placeholder {
      color: red;
    }
  }
`;
