import { yupResolver } from "@hookform/resolvers/yup";
import jwt_decode from "jwt-decode";
import { useForm } from "react-hook-form";
import { ModalContainer } from "./style.js";
import * as yup from "yup";
import api from "../../Services/api";

//usar o yup resolver para substituir o uso de states
//passar o valor da category por props
//passar uma props sinalizando o tipo do modal
//titleModal

const Modal = ({ category, toggle, setToggle }) => {
  /* const token = JSON.parse(localStorage.getItem("authToken:token")); */
  let token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjM5OTQwMTc3LCJqdGkiOiI0Njg2YWI2YjVmYzk0ODI4YjRiM2RkYTUxMTVhZDI3NSIsInVzZXJfaWQiOjIzN30.PQB0kwEho-QYbbWaFGtwt7o5uGV2oeScKE5W30aS9mk";

  let decoded = jwt_decode(token);

  const schema = yup.object().shape({
    title: yup.string(),
    difficulty: yup.string(),
    frequency: yup.string(),
  });

  const {
    register,
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = (data, category) => {
    const { title, difficulty, frequency } = data;
    const teste = {
      title: title,
      category: category,
      difficulty: difficulty,
      frequency: frequency,
      achieved: false,
      how_much_achieved: 0,
      user: decoded.user_id,
    };
    /* api
      .post(
        "/habits",
        {
          title: title,
          category: category,
          difficulty: difficulty,
          frequency: frequency,
          achieved: false,
          how_much_achieved: 0,
          user: decoded.user_id,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((response) => {
        console.log(response)
        setToggle(false)
      })
      .catch((err) => console.log(err)); */
    console.log(teste);
  };

  return (
    <ModalContainer>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <div className="modalHeader">
          <h3>New Habit</h3>
        </div>
        <input
          className="addNewHabit"
          type="text"
          placeholder="New habit"
          {...register("title")}
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
      </form>
    </ModalContainer>
  );
};

export default Modal;
