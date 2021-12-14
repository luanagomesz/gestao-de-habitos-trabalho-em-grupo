import { IoIosArrowForward } from "react-icons/io";
import { yupResolver } from "@hookform/resolvers/yup";
/* import { Redirect } from "react-router"; */
import { useForm } from "react-hook-form";
import { ModalContainer } from "./style.js";
import * as yup from "yup";
import api from "../../Services/api";

//usar o yup resolver para substituir o uso de states
//passar o valor da category por props
//passar uma props sinalizando o tipo do modal
//titleModal

const Modal = ({ category = "workout", toggle, setToggle }) => {
  


  const schema = yup.object().shape({
    title: yup.string(),
    category: yup.string(),
    frequency: yup.string().nullable().required("campo obrigatorio"),
    difficulty: yup.string().nullable().required("campo obrigatorio"),
    achieved: yup.string().default(false),
    how_much_achieved: yup.string().default(120),
    user: yup.string()
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = ({
    title,
    category,
    difficulty,
    frequency
  }) => {
   
    console.log(title);

    api
      .post("/habits", {title: title, category: category, difficulty: difficulty, frequency: frequency, achieved: false, how_much_achieved: 0, user: userId.user_id})
      .then((_) => {
        setToggle(false);
      })
      .catch((err) => console.log(err));
  };

  const functionTeste = () => {
    console.log("oi")
  }

  return (
    <ModalContainer>
      {/* <form onSubmit={handleSubmit(functionTeste)}>
        <div className="modalHeader">
          <h4>New Habit</h4> 
          <span>
            <IoIosArrowForward />
          </span>
        </div>
        <input
          className="addNewHabit"
          type="text"
          placeholder="add a new habit"
          {...register("habit")}
        />

        <p>How often?</p>

        <div className="frequencyContainer">
          <div className="frequencyItem">
            <label for="daily">
              Daily
              <input
                type="radio"
                className="frequency"
                name="frequency"
                id="daily"
                value="daily"
                {...register("frequency")}
              />
            </label>
          </div>
          <div className="frequencyItem">
            <label for="weekly">
              Weekly
              <input
                type="radio"
                className="frequency"
                name="frequency"
                id="weekly"
                value="weekly"
                {...register("frequency")}
              />
            </label>
          </div>
          <div className="frequencyItem">
            <label for="monthly">
              Monthly
              <input
                type="radio"
                className="frequency"
                name="frequency"
                id="monthly"
                value="monthly"
                {...register("frequency")}
              />
            </label>
          </div>
        </div>
        <p>How is the difficulty?</p>
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
      </form> */}
      <form onSubmit={handleSubmit(functionTeste)}> 
        <input name="title" {...register("title")}/>
        <button type="submit">add</button>
      </form>
    </ModalContainer>
  );
};

export default Modal;
