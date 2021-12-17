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

const MyModal = ({ history }) => {
  const { setOpenModal, activity, setActivity } =
    useContext(ActivitiesContext);
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
    const { title, realization_time } = data;
    api
      .post(
        "/activities/",
        {
          title: title,
          realization_time: realization_time,
          group: GroupId,
        },
        authorization
      )
      .then((response) => {
        setOpenModal(false);
        setActivity([...activity, response.data]);
      })
      .catch((err) => console.log(err));
  };

  return (
    <ModalContainer>
      <div className="modal-header">
        <h2>New Activity</h2>
        <button className="buttonReturn" onClick={() => setOpenModal(false)}>
          <IoIosArrowBack />
        </button>
      </div>
      <div className="modalBody">
        <form onSubmit={handleSubmit(onSubmitActivity)}>
          <div className="newActivity">
            <h4>Add a new Activity</h4>
            <input
              className="addActivity"
              type="text"
              placeholder="Your new activity"
              {...register("title")}
            />
            <p>{errors.title?.message}</p>
          </div>
          <div className="addDate">
            <span>
              <h4>Date to complete this activity:</h4>
              <input
                className="date"
                type="datetime-local"
                {...register("realization_time")}
              />
            </span>

            <p>{errors.realization_time?.message}</p>
          </div>
          <div className="ButtonAdd">
            <Button type="submit" background={"var(--purple)"} width={"230px"}>
              Add
            </Button>
          </div>
        </form>
      </div>
    </ModalContainer>
  );
};

export default MyModal;
