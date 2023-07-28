import styled from "styled-components";

export const Container = styled.div`
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  position: fixed;

  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    background-color: var(--color-gray-900);
    padding: 20px;
    box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.25);
    width: 100%;
    max-width: 280px;
    border-radius: 6px;
  }
`;

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

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;

  p {
    font-size: 1.8rem;
    text-align: center;

    margin-bottom: 5px;
  }

  label {
    font-size: 1.5rem;
  }

  input {
    padding: 5px 8px;
    border: 2px solid transparent;
    border-radius: 4px;
  }

  button {
    font-size: 1.35rem;
    color: var(--color-gray-300);

    border: 1px solid transparent;
    border-radius: 6px;

    margin-top: 10px;
    padding: 8px 0;

    background-color: transparent;
    transition: 0.3s;

    background-color: var(--color-brand-1);

    &:hover {
      background-color: var(--color-brand-2);
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
