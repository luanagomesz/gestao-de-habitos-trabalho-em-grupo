import styled from "styled-components";

const ModalContainer = styled.div`
  width: 305px;
  height: auto;
  border: solid var(--grey-50) 1px;
  border-radius: 10px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  padding: 12px;


  input {
    height: 40px;
    border-radius: 10px;
    border: solid var(--purple) 3px;
    margin: 0 auto;
    font-size: 1.2rem;
    margin-top: 10px;
    width:280px;
  }
  p {
    margin-top: 1px;
    color: red;
  }
  .modalBody{
    height:28vh;

    h4{
      margin-top:7px;
    }
  }

  .ButtonAdd {
    display: flex;
  
 
    button {
     width: 280px;
  }
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
