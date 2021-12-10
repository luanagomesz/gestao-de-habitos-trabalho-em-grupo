import styled from "styled-components";
export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    color: var(--ligthblue);
    margin: 0;
    text-align: center;
    font-weight: light;
  }
  header {
    margin: 10px 0 0 20px;
    margin-right: 10%;
    width: 90%;
  }
  svg {
      z-index:1;
    position: absolute;
    cursor: pointer;
  }
  
  @media (min-width: 900px) {
    align-items: center;
    h2 {
    
      margin-left:50%;
      margin-bottom: -50px;
      margin-top: 140px;
    }
  }
`;
export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100vw;
  img {
    width: 190px;
    opacity: 0.5;
  }
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: 180px;
  }
  input {
    padding: 8px;
    border: 2px solid var(--grey-50);
    width: 250px;
    border-radius: 5px;
    margin: 3px;
  }
  input::placeholder {
    color: #D2CCCC;
    font-size: 14px;
  }
  
  p {
    font-size: 18px;
    margin-top: 50px;
    color: var(--grey-50);
  }
  a {
    text-decoration: none;
    color: var(--ligthblue);
  }
  .vector {
    opacity: 1;
    width: 323px;
    position: absolute;
    bottom: 0;
    left: 0;
  }
  .flexContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 900px) {

    flex-direction: row-reverse;
    margin-top: 40vh;
    align-items: flex-start;
    width: 50vw;

    aside {
      justify-content: space-around;
      background-color: #E5E3FF;
      height: 100vh;
      width: 50vw;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      left: 0;
      top: 0;
    }
    form {
      position: absolute;
      left: 10;
      border: 2px solid var(--grey-50);
      width: 400px;
      height: 330px;
      padding: 60px;
      border-radius: 8px;
      justify-content: space-around;
    }
    input {
      width: 340px;
    }
    input::placeholder {
      font-size: 18px;
    }
    
    main {
      
      width: 50vw;
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      right: 0;
      top: 0;
      border-left: 1px solid var(--ligthblue);
    }
    p {
      position: absolute;
      top: 65vh;
    }
    .vector {
      display: none;
    }
    .flexContainer {
      flex-direction: row;
    }
    img {
      width: 700px;
      opacity: 1;
    }
  }
`;