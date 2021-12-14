import { ButtonAdd, ModalContainer } from "./MyModal.Style";
import { MdOutlineExitToApp } from "react-icons/md";
import Button from "../Button";
import * as yup from "yup";
import axios from "axios";
import { useContext, useState } from "react";
import { ActivitiesContext } from "../../Provider/Activities/activities";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const MyModal = ({ history }) => {
  const { openModal, setOpenModal } = useContext(ActivitiesContext);

  const ActivitySchema = yup.object().shape({
    title: yup.string().required("Type it your new activity"),
    realization_time: yup
      .string()
      .required("Put a deadline to finish the activity"),
      difficulty: yup.string().nullable().required("Select the difficulty level of the activity"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ActivitySchema),
  });

   const [token] = useState(JSON.parse(localStorage.getItem("authToken:token")))
   const [user] = useState(JSON.parse(localStorage.getItem("authToken:user")))

  const onSubmitActivity = ({ title, realization_time, difficulty }) => {
    const data = { title, realization_time, difficulty};
    axios
      .post("https://kenzie-habits.herokuapp.com/activities/", data, {
        headers: {
          // Authorization: `Bearer ${token}`
        },
      })
      .then((response) => { setOpenModal(false);
               
      })
      .catch((err) => console.log(err));
  };


  return (<>
 
    <ModalContainer>
     
      <div className="modal-header">
        <h1>New Activity</h1>
        <button onClick={() => setOpenModal(false)}>
          <MdOutlineExitToApp />
        </button>
      </div>
      <form onSubmit={handleSubmit(onSubmitActivity)}>
        <input
          className="title"
          type="text"
          placeholder="Your new activity"
          {...register("title")}
        />
        <p>{errors.title?.message}</p>
        <h4>How hard is it to keep this Activity?</h4>
        <div className="difficulty" >
          <span className="level">
            <label for="easy">
              <input id ="easy" type="radio" name="level" value="easy" {...register("difficulty")}/>  Easy
            </label>
          </span>
          <span className="level">
            <label for="hard">
              <input id ="hard" type="radio" name="level" value="hard" {...register("difficulty")}/>  Hard
            </label>
          </span>

          <span className="level">
            <label for="veryHard" className='level__veryHard'>
              <input id="veryHard"type="radio" name="level" value="veryHard" {...register("difficulty")}/>  Very Hard
            </label>
          </span>
        </div>
        <p>{errors.difficulty?.message}</p>
        <h4>What is the date to complete this activity?</h4>
        <input
          className="dateInput"
          type="date"
          {...register("realization_time")}
        />
        <p>{errors.realization_time?.message}</p>
        <ButtonAdd>
          <Button type="submit" background={"var(--purple)"} width={"230px"}>
            Add
          </Button>
        </ButtonAdd>
      </form>
    </ModalContainer>
    </>
  );
};

export default MyModal;
