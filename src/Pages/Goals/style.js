import styled from "styled-components";

export const GoalsContainer = styled.div`
  display: flex;
  flex-direction: column;

  img {
    width: 250px;
  }
  .img-container {
    width: 50%;
    height: 100vh;
    background-color: var(--white);

    @media (min-width: 900px) {
      background-color: #fbece2;
    }
  }

  .modal-container {
    width: 50%;
  }
`;
