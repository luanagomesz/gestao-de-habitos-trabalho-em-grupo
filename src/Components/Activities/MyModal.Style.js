import styled from "styled-components";

const ModalContainer = styled.div`
  width: 270px;
  height: 35vh;
  border: solid var(--grey-50) 1px;
  border-radius: 10px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  padding: 12px;

  p {
    margin-top: 1px;
    color: red;
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

  input {
    height: 50px;
    border-radius: 10px;
    border: solid var(--purple) 3px;
    margin: 0 auto;
    font-size: 1.2rem;
    margin-top: 10px;
    width:242px;
    
  }

  .ButtonAdd {
    display: flex;
    margin-bottom:15px;
    button {
      width: 500px;
      margin: 3px auto;
    }
  }

  @media (min-width: 900px) {
    width: 560px;

    input {
      width: 530px;
      margin
    }

    .ButtonAdd {
      width: 530px;
    }
  }
`;

export default ModalContainer;
