import { ButtonAdd, ModalContainer } from "./MyModal.Style";
import { MdOutlineExitToApp } from "react-icons/md";
import Button from "../Button";
import * as yup from "yup";
import axios from "axios";
import { useContext, useState } from "react";
import { ActivitiesContext } from "../../Provider/Activities/activities";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form/dist/index.cjs";

const MyModal = ({ history }) => {
  const { openModal, setOpenModal, level, setLevel } =
    useContext(ActivitiesContext);

  const ActivitySchema = yup.object().shape({
    title: yup.string().required("Type it your new activity"),
    realization_time: yup
      .string()
      .required("Put a deadline to finish the activity"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ActivitySchema),
  });

  // const [token] = useState(JSON.parse(localStorage.getItem("@ :token")))
  // const [user] = useState(JSON.parse(localStorage.getItem("@ :user")))
  const onSubmitActivity = (data) => {
    axios
      .post("https://kenzie-habits.herokuapp.com/activities/", data, {
        headers: {
          // Authorization: `Bearer ${token}`
        },
      })
      .then((response) => {
        const { token, user } = response.data;
        setOpenModal(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <ModalContainer>
      <div className="modal-header">
        <h1>New Activity</h1>
        <button onClick={() => setOpenModal(false)}>
          <MdOutlineExitToApp />
        </button>
      </div>
      <form onSubmit={handleSubmit(onSubmitActivity)}>
        <input
          type="text"
          placeholder="Your new activity"
          {...register("title")}
        />
        <p>{errors.title?.message}</p>
        <h4>What is the date to complete this activity?</h4>
        <input
          className="dateInput"
          type="date"
          {...register("realization_time")}
        />
        <p>{errors.realization_time?.message}</p>
        <div className="frequency-container">
          <Button onClick={() => setLevel("easy")} background={"var(--purple)"}>
            Easy
          </Button>
          <Button onClick={() => setLevel("hard")} background={"var(--purple)"}>
            Hard
          </Button>
          <Button
            onClick={() => setLevel("very-hard")}
            background={"var(--purple)"}
          >
            Very Hard
          </Button>
        </div>
        <ButtonAdd>
          <Button type="submit" background={"var(--purple)"} width={"230px"}>
            Add
          </Button>
        </ButtonAdd>
      </form>
    </ModalContainer>
  );
};

export default MyModal;
