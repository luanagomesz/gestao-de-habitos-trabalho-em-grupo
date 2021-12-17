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
  background:var(--grey-0);


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

  .modalBody{
    height:300px;

    h4{
      margin-top:7px;
    }
  }

.date{

}

.ButtonAdd {
    display: flex;
    margin-top:50px;
  
 
    button {
     width: 280px;
  }
  }


  @media (min-width: 900px) {
    width: 560px;
    display:flex;

    input {
      width: 530px;
      margin
    }

    .modal-header{

    }

    .modalBody{ 

    }

    .newActivity{
      
    }

    .addDate{
    

    }
    
    .addActivity{
   

    }

    .date{
      position:relative;

    }

    .buttonReturn{
      display:none; 
    }

    .ButtonAdd {
      width: 530px;
      button{
        margin:70px auto;
      
      }
      
    }
  }
`;

export default ModalContainer;
