import styled from "styled-components";

export const HeaderHome = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--ligthblue);
  color: var(--white);
  height: 70px;

  @media (max-width: 900px) {
    height: 70px;

  }
  
  aside{
      margin-right:50px;
      padding:0;
  }
  button{
      margin-right:100px;
      background-color: var(--ligthblue);
      color: var(--white);
      font-size: 20px;
  }
  .Logo{
      display:flex;
      align-items:center;
      margin:100px;
  }
  .Logo img{
    height:70px;

  }
  h1{
      margin-left:10px;
      font-size:30px;
      font-weight:lighter;
  }
  `

  export const BodyHome = styled.body`

  height:85.2vh;
  padding:50px;
  
  .intros{
    width:50%;
    display:flex;
    
  }
  ul{
    list-style:none;
    display:flex;
    flex-wrap:wrap;
  }

  img{
      width:33%;
      position:absolute;
      right:90px;
      top:100px;
      z-index: -1;
    }
  
  .li1{
      display:flex;
      width:500px;
      height:380px;
      font-size:27px;
      background-color:#502155;
      color: var(--white);
      border-radius:15px;
      padding:40px;
      font-weight:bold;
      opacity:50%;
      margin:30px 0 0 200px;
      
  }
  .li2{

      width:400px;
      height:200px;
      font-size:27px;
      background-color:#F8B918;
      color: var(--white);
      border-radius:15px;
      padding:10px;
      font-weight:bold;
      opacity:60%;
      margin:0 0 0 30px;
      
      
  }
  .li3{
    width:500px;
    height:200px;
    font-size:27px;
    background-color:#F74545;
    color: var(--white);
    border-radius:15px;
    padding:10px;
    font-weight:bold;
    opacity:60%;
    margin: 20px 0 0 650px;
}
  `

  export const FooterHome = styled.footer`
  
  width: 100%;
  height:70px;
  display: flex;
  justify-content:center;
  background-color: var(--grey-50);
  flex-wrap:wrap;
  
  
  ul{
      list-style:none;
      display:flex;
      flex-direction:column;
      text-align:center;
      margin:0 60px 0 60px;
      justify-content:center;
      color: var(--white);
      font-weight:bold;
      flex-wrap:wrap;
  }
  
  `