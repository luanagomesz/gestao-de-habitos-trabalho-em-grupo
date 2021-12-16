import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { ModalContainer } from "./style.js";
import { useContext } from "react";
import { GroupsContext } from "../../Provider/Groups/groups.js";
import { LoginContext } from "../../Provider/Login/Login.js";
import * as yup from "yup";
import api from "../../Services/api";

const Modal = () => {
  const { GroupId } = useContext(GroupsContext);
  const { authorization } = useContext(LoginContext);

  const schema = yup.object().shape({
    title: yup.string(),
    difficulty: yup.string(),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = (data) => {
    const { title, difficulty } = data;
    /* const teste = {
      title: title,
      difficulty: difficulty,
      achieved: false,
      how_much_achieved: 0,
      group: 1,
    }; */
    api
      .post(
        "/goals/",
        {
          title: title,
          difficulty: difficulty,
          achieved: false,
          how_much_achieved: 0,
          group: GroupId,
        },
        authorization
      )
      .then((_) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <ModalContainer>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <div className="modalHeader">
          <h3>New Goal</h3>
        </div>
        <input
          className="addNewGoal"
          type="text"
          placeholder="Title"
          {...register("title")}
        />

        <p>How hard is it to keep this Goal?</p>
        <div className="difficultyContainer">
          <div className="difficultyItem">
            <label>
              Easy
              <input
                type="radio"
                className="difficulty"
                name="difficulty"
                value="easy"
                {...register("difficulty")}
              />
            </label>
          </div>
          <div className="difficultyItem">
            <label>
              Hard
              <input
                type="radio"
                name="difficulty"
                className="difficulty"
                value="hard"
                {...register("difficulty")}
              />
            </label>
          </div>
          <div className="difficultyItem">
            <label>
              Very Hard
              <input
                type="radio"
                name="difficulty"
                className="difficulty"
                value="very_hard"
                {...register("difficulty")}
              />
            </label>
          </div>
        </div>
        <button type="submit" className="buttonModal">
          Add
        </button>
      </form>
    </ModalContainer>
  );
};

export default Modal;
