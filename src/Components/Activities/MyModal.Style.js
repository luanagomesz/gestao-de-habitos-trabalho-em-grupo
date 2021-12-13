import styled from "styled-components";

export const ModalContainer = styled.div`
  width: 270px;
  height: 350px;
  border: solid var(--grey-50) 1px;
  border-radius: 10px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  padding: 12px;

  img{
    margin-top:55px;
    width:221px;
    @media (min-width: 768px) {
      display:none;
    }
  }

  p{
    margin-top: 1px;
    color: red;
  }

  @media (min-width: 768px) {
    width: 560px;
  }

  h1 {
    font-size: 1.5rem;
  }

  .modal-header {
    min-width: 240px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    button {
      background: none;
      font-size: 30px;
    }
  }

  .frequency-container {
    margin: 0 auto;
    min-width: 230px;
    display: flex;
    justify-content: space-around;
    margin-top: 10px;
    flex-direction: row;
    align-items: center;

    button {
      font-size: 15px;
      width: 78px;
    }

    @media (min-width: 768px) {
      width: 530px;
      button {
        width: 160px;
      }
    }
  }

  input {
    min-width: 230px;
    height: 50px;
    border-radius: 5px;
    border: solid var(--grey-50) 1px;
    margin: 0 auto;
    font-size: 1.2rem;
    margin-top: 10px;
    @media (min-width: 768px) {
      width: 530px;
    }
  }
`;

export const ButtonAdd = styled.div`
  display: flex;
  button {
    width: 500px;
    margin: 15px auto;
  }

  @media (min-width: 768px) {
    width: 530px;
  }
`;
