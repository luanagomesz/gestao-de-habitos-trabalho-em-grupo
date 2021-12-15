import { ButtonStyled } from "./styles";

const Button = ({ children, background, backgroundHover, width, margin, onClick, type}) => {
  return (
    <ButtonStyled
    onClick={onClick}
      background={background}
      backgroundHover={backgroundHover}
      width={width}
      margin={margin}
      type={type}
    >
      {children}
    </ButtonStyled>
  );
};

export default Button;
