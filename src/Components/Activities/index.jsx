import ActivityPage from "./style";
import Yoga from "../../assets/img/Yoga.png";
import { BsClipboardPlus } from "react-icons/bs";
import Header from "../Header";
import { useContext, useState, useEffect } from "react";
import { ActivitiesContext } from "../../Provider/Activities/activities";
import MyModal from "./MyModal";
import Vetor from "../../assets/img/Vector-activities.png";
import { LoginContext } from "../../Provider/Login/Login";
import Button from "../Button";
import { GroupsContext } from "../../Provider/Groups/groups";
import api from "../../Services/api";


function Activities() {
  const { openModal, setOpenModal, activity, setActivity } =
    useContext(ActivitiesContext);

  const { authorization, username } = useContext(LoginContext);
  const { GroupId } = useContext(GroupsContext);

  useEffect(() => {
     api
      .get(`/activities/?group=${GroupId}`, authorization)
      .then((response) => {
        setActivity(response.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  
  return (
    <>
      <Header backgroundColor={"var(--ligthblue)"} />
      <ActivityPage>
        <div className="Yoga">
          <img src={Yoga} alt="yoga-girl" />
        </div>
        <div className="PrincipalContainer">
          <div className="PrincipalHeader">
            <h2>Activities</h2>
            <button onClick={() => setOpenModal(true)}>
              <BsClipboardPlus />
            </button>
          </div>

          <div className="PrincipalBody">
             { activity.length > 0 ? 
             (activity.map((item, index) => (
              <div className="Modules" key={index}>
                <span>
                  <p>{item.title}</p>
                </span>
                <span>
                  <p>{item.realization_time}</p>
                </span>
              </div>
            ))) : ("")
          }
              
          </div>
          <div className="ButtonCreate">
            <Button
              onClick={() => setOpenModal(true)}
              background={"var(--purple)"}
              width={"230px"}
            >
              Add a new activity
            </Button>
          </div>
        </div>

        {openModal ? (
          <MyModal
            title={"New Activity"}
            text={"How hard is it to keep this Goal?"}
          />
        ) : (
          <img className="Wave" src={Vetor} alt="vetor" />
        )}
      </ActivityPage>
    </>
  );
}

export default Activities;
