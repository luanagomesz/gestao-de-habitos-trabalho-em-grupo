import Button from "../Button";
import { ListContainer } from "./style";

const List = ({ title, spanText, topic }) => {
  return (
    <ListContainer>
      <div className="list-header">
        <h1>{title}</h1>
      </div>

      {/* essa section vai ser criada com o map da lista de Goals/habits ou activities */}
      <section className="info-container">
        <p>{topic}</p>
        <div className="info-container-text">
          <span>{spanText}</span>
          <span>{spanText}</span>
        </div>
      </section>

      <Button background={"red"} width={"100px"}></Button>
    </ListContainer>
  );
};

export default List;
