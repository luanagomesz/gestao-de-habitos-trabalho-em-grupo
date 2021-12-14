import styled from "styled-components";

const ActivityPage = styled.div`
  display: flex;
  flex-direction:column;
  align-items: center;

  aside {
    display: none;
    
  }

  .PrincipalContainer {
    display: flex;
    width: 270px;
    height: 330px;
    border: solid var(--grey-50) 1px;
    border-radius: 10px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    padding: 12px;
  }
  .PrincipalHeader {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin: 7px -5px;

    h2 {
      margin-top: 15px;
    }
    button {
      background: none;
      font-size: 30px;
    }
  }

  .PrincipalBody {
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    align-items: center;
    justify-content: center;
  }

  .Modules {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 15px;

    p {
      background-color: var(--purple);
      color: var(--white);
      padding: 5px;
      border-radius: 10px;
      min-width: 230px;
      height: 35px;
    }

    div {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      flex-wrap: nowrap;
      h4 {
        margin: 5px 5px 5px 5px;
      }
    }
  }
  .Wave {
    opacity: 1;
    width: 100vw;
    position: absolute;
    bottom: 0;
    left: 0;
  }
  .Yoga {
    display: flex;
    margin-top: 126px;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
  }

  @media (min-width: 900px) {
    display: flex;
    flex-direction:row-reverse;
   
      aside {
      display: block;
      position:absolute;
      width:300px;
      top:25vw;
      right:50vh;
    }

    .PrincipalContainer {
      width: 700px;
      margin-bottom: 82px;
      
    }
    
    .PrincipalBody {
      width: 560px;
      align-items: flex-start;
      
    }
    .Modules {
      p {
        width: 10px;
        margin:10px 0;
      }
      h4 {
        display:none;
       
      }
    }

    .Wave {
      display: none;
    }
  }
`;

export default ActivityPage;
