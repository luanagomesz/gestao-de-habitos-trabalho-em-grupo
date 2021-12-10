import styled from "styled-components";

export const ListContainer = styled.div`
  width: 270px;
  min-height: 270px;
  background-color: var(--grey-0);
  border: none;
  border-radius: 10px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  padding: 12px;

  @media (min-width: 768px) {
    width: 560px;
  }

  p {
    min-width: 246px;
    background-color: var(--red);
    height: 30px;
    margin-top: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    padding: 5px;
    color: var(--white);
  }

  .info-container {
    min-width: 246px;
    margin-bottom: 10px;
  }

  .info-container-text {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }

  span {
    min-width: 130px;
    color: var(--grey-100);
    font-weight: bold;

    @media (min-width: 768px) {
    }
  }

  /* @media (min-width: 768px) {
    width: 560px;
  }

  h1 {
    font-size: 1.5rem;
  }

  svg {
    width: 30px;
    height: 30px;
  }

  .modal-header {
    min-width: 240px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .frequency-container {
    margin: 0 auto;
    min-width: 230px;
    display: flex;
    justify-content: space-between;
    margin-top: 10px;

    @media (min-width: 768px) {
      width: 530px;
    }
  }

  .frequency {
    min-width: 73px;
    height: 40px;
    background-color: var(--red);
    border-radius: 5px;
    color: var(--white);
    font-size: 14px;

    @media (min-width: 768px) {
      width: 150px;
    }
  }

  input {
    min-width: 230px;
    height: 40px;
    border-radius: 5px;
    border: solid var(--grey-50) 1px;
    margin: 0 auto;
    font-size: 1.2rem;
    margin-top: 10px;
    margin-bottom: 10px;

    @media (min-width: 768px) {
      width: 530px;
    }
  }

  p {
    margin-top: 10px;
  }

  .add {
    min-width: 230px;
    height: 40px;
    background-color: var(--red);
    color: var(--white);
    border-radius: 5px;
    margin: 0 auto;
    margin-top: 10px;

    @media (min-width: 768px) {
      width: 530px;
    }
  } */
`;
