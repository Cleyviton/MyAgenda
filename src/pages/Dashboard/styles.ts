import styled from "styled-components";

export const ListContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 32px;

  max-width: 70%;
  margin: 0 auto;

  width: 100%;
  margin-top: 60px;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;

    width: 100%;
    height: 40vh;

    p {
      font-size: 2rem;
    }

    .icon {
      font-size: 3.8rem;
      cursor: pointer;
      transition: 0.3s;
      &:hover {
        color: var(--color-brand-1);
      }
    }
  }

  @media (max-width: 620px) {
    justify-content: center;
    max-width: 100%;
  }
`;
