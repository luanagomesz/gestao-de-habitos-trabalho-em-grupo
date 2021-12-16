import { ModalContainer } from "./style.js";
import { LoginContext } from "../../Provider/Login/Login.js";
import { HabitsContext } from "../../Provider/Habits/habits";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import api from "../../Services/api";
import { AiOutlineClose } from "react-icons/ai";
const ModalHabits = ({ category, setToggle, setToggleMenu, setToggleList }) => {
  const { authorization } = useContext(LoginContext);
  const { habitsControl, setHabitsControl } = useContext(HabitsContext);
  const userId = window.localStorage.getItem("id");

  console.log(authorization);

  const schema = yup.object().shape({
    title: yup.string(),
    difficulty: yup.string(),
    frequency: yup.string(),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = (data) => {
    const { title, difficulty, frequency } = data;
    api
      .post(
        "/habits/",
        {
          title: title,
          category: category,
          difficulty: difficulty,
          frequency: frequency,
          achieved: false,
          how_much_achieved: 0,
          user: userId,
        },
        authorization
      )
      .then((response) => {
        console.log(response.data);
        setToggle(false);
      })
      .catch((err) => console.log(err));
    setHabitsControl(!habitsControl);
  };

  useEffect(() => {
    if (window.innerWidth > 900) {
      setToggleList(true);
    }
  });

  return (
    <ModalContainer>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <div className="modalHeader">
          <h3>New Habit</h3>
          <AiOutlineClose className="close" onClick={() => setToggle(false)} />
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

export default ModalHabits;
