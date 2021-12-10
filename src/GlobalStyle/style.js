import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    outline: 0;
}

:root{
    --red: #F74545;
    --orange: #F87618;
    --lightorange:#FBAA6F;
    --ligthblue:#8782D6;
    --ligthpurple:#A66A8C;
    --purple:#502155;
    --grey-100:#333333;
    --grey-50:#999999;
    --grey-0:#F5F5F5;
    --white: #ffffff;
}
body{
    background: var(---grey-0);
    color: var(---grey-100);
}
p,span, button, div, input{
    font-family: 'Lato', sans-serif;  
} 

h1,h2, h3, h4{
    font-family: 'Fredoka One', cursive;
}

button{
    cursor: pointer;
    border: none;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
}
a{  font-family: 'Lato', sans-serif;
    text-decoration: none;
}
`;

export default GlobalStyle;
