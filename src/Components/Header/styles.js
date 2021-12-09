import styled from "styled-components";

const HeaderContainer = styled.div`
background-color: ${(props) => props.backgroundColor};
display: flex;
flex-direction: row;
flex-wrap: nowrap;
align-content: center;
align-items: center;
height: 124px;
width: 100%;
justify-content: space-around;

h1 {
  color: var(--white);
}

button {
  background: none;
  font-size: 40px;
  margin-left:5px;
  color: var(--white);
}
div {
  display: flex;
}

 

`;

export default HeaderContainer;
