import Header from "../../Components/Header";
import {
  ContainerPage,
  ContainerContent,
  ContainerGroups,
  ContainerCreate,
} from "./style";
function Groups({ history }) {
  return (
    <ContainerPage>
      <Header></Header>
      <ContainerContent>
        <ContainerCreate></ContainerCreate>
        <ContainerGroups></ContainerGroups>
      </ContainerContent>
    </ContainerPage>
  );
}

export default Groups;
