import styled from "styled-components";

export const ModalContainer = styled.div`
  width: 270px;
  height: 330px;
  border: solid var(--grey-50) 1px;
  border-radius: 10px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  margin-top: 80px;
  padding: 12px;

  h1 {
    font-size: 1.5rem;
  }

  .modal-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .frequency-container {
    width: 230px;
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  }

  .frequency {
    width: 70px;
    height: 40px;
    background-color: var(--red);
    border-radius: 5px;
    color: var(--white);
    font-size: 14px;
  }

  input {
    width: 230px;
    height: 40px;
    border-radius: 5px;
    border: solid var(--grey-50) 1px;
    margin: 0 auto;
    font-size: 1.2rem;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  p {
    margin-top: 10px;
  }

  .add {
    width: 230px;
    height: 40px;
    margin-top: 10px;
    background-color: var(--red);
    color: var(--white);
    border-radius: 5px;
  }
`;
