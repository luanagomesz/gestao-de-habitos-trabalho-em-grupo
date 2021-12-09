import { ButtonStyled } from "./styles";

const Button = ({ children, background, backgroundHover, width }) => {
  return (
    <ButtonStyled 
      background={background}
      backgroundHover={backgroundHover}
      width={width}
    >
      {children}
    </ButtonStyled>
  );
};

export default Button;
