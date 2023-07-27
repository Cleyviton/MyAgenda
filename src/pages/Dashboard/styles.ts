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

  @media (max-width: 620px) {
    justify-content: center;
    max-width: 100%;
  }
`;
