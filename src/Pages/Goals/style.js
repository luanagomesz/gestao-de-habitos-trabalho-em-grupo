import styled from "styled-components";

export const GoalsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 900px) {
    flex-direction: row;
    align-items: center;

    .footer {
      position: absolute;

      @media (min-width: 900px) {
        display: none;
      }
    }
  }

  h1 {
    color: var(--red);
    margin: 10px;
  }
  .modal-container {
    width: 50%;
  }

  .modal-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

    .img-container {
      display: none;

      @media (min-width: 900px) {
        display: block;
      }
    }

    .list-container {
      text-align: center;
  

      @media (min-width: 900px) {
        width: 50%;
        height: 100vh;
        background-color: #fbece2;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    }

    ul {
      overflow-y: auto;
      width: 300px;
      height: 420px;
      background-color: #f5f5f5;
      padding: 10px;
      border-radius: 10px;
      margin-bottom: 20px;

      @media (min-width:900px){
        width: 500px;
    
      }
    
    }
  }
  img {
    width: 250px;
  }

  .btn-add{
    width: 322px;
    height: 50px;
    background-color: var(--red);
    border-radius: 10px;
    color: var(--white);

    @media (min-width: 900px){
      display: none;
    }
  }
`;
