import { useHistory } from "react-router-dom";
import { ContainerMenu } from "./style";
const MenuMobile = ({
  page1,
  page2,
  page3,
  history1,
  history2,
  history3,
  backgroundColor,
}) => {
  const history = useHistory();

  return (
    <ContainerMenu backgroundColor={backgroundColor}>
      <p onClick={() => history.push(`/${history1}`)}>{page1}</p>
      <p onClick={() => history.push(`/${history2}`)}>{page2}</p>
      <p onClick={() => history.push(`/${history3}`)}>{page3}</p>
    </ContainerMenu>
  );
};

export default MenuMobile;
