import ModalContainer from "./MyModal.Style";
import { IoIosArrowBack } from "react-icons/io";
import Button from "../Button";
import * as yup from "yup";
import { useContext } from "react";
import { ActivitiesContext } from "../../Provider/Activities/activities";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import api from "../../Services/api";
import { LoginContext } from "../../Provider/Login/Login";
import { GroupsContext } from "../../Provider/Groups/groups";
import axios from "axios";

const MyModal = ({ history }) => {
  const { setOpenModal } = useContext(ActivitiesContext);
  const { authorization } = useContext(LoginContext);
  const { GroupId } = useContext(GroupsContext);

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

  const onSubmitActivity = (data) => {
    console.log(data);
    console.log(GroupId);
    const { title, realization_time } = data;
  
    axios
      .post(
        "https://kenzie-habits.herokuapp.com/activities/",
        {
          title: title,
          realization_time: realization_time,
          group: GroupId,
        },
        authorization
      )
      .then((response) => {
        console.log(response);
        setOpenModal(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <ModalContainer>
      <div className="modal-header">
        <h2>New Activity</h2>
        <button onClick={() => setOpenModal(false)}>
          <IoIosArrowBack />
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
        <input type="date" {...register("realization_time")} />
        <p>{errors.realization_time?.message}</p>
        <div className="ButtonAdd">
          <Button type="submit" background={"var(--purple)"} width={"230px"}>
            Add
          </Button>
        </div>
      </form>
    </ModalContainer>
  );
};

export default MyModal;
