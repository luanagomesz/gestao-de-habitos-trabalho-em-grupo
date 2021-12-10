import { ButtonStyled } from "./styles";

const Button = ({ children, background, backgroundHover, width, margin}) => {
  return (
    <ButtonStyled
      background={background}
      backgroundHover={backgroundHover}
      width={width}
      margin={margin}
    >
      {children}
    </ButtonStyled>
  );
};

export default Button;
