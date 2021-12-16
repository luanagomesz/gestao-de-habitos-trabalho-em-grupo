import Header from "../../Components/Header";
import {
  ContainerPage,
  ContainerContent,
  ContainerGroups,
  ContainerCreate,
} from "./style";
import searchImg from "../../assets/img/PesquisaGroups.png";
import GroupsImg from "../../assets/img/GroupsImg.png";
import { LoginContext } from "../../Provider/Login/Login";
import { useContext, useEffect, useState } from "react";
import { GroupsContext } from "../../Provider/Groups/groups";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { set } from "react-hook-form";

function Groups({ history }) {
  const { authorization, username } = useContext(LoginContext);
  const {
    setSearch,
    setGroupId,
    groups,
    joinGroup,
    searchGroup,
    handlePage,
    request,
    page,
  } = useContext(GroupsContext);

  const [userInput, setuserInput] = useState({
    name: "",
    description: "",
    category: "",
  });

  const createGroup = () => {
    axios
      .post(
        `https://kenzie-habits.herokuapp.com/groups/`,
        userInput,
        authorization
      )
      .then((response) => {
        console.log(response);

        toast(`${userInput.name} created`);
      })
      .catch((err) => toast(`error `));
  };

  const [userGroups, setuserGroups] = useState([]);

  const getuserGroups = () => {
    axios
      .get(
        `https://kenzie-habits.herokuapp.com/groups/subscriptions/`,
        authorization
      )
      .then((response) => {
        console.log(response);
        setuserGroups(response.data);
      })
      .catch((err) => toast(`error `));
  };

  const exitGroup = (groupName, id) => {
    axios
      .delete(
        `https://kenzie-habits.herokuapp.com/groups/${id}/unsubscribe/`,
        authorization
      )
      .then((response) => {
        console.log(id);
        console.log(response);
        toast(`You have left ${groupName}`);
      })
      .catch((err) => toast(`error `));
  };

  const [list, setList] = useState(true);
  return (
    <ContainerPage>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Header
        backgroundColor={"var(--purple)"}
        page1={"Dashboard"}
        page2={"Habits"}
        history1={"dashboard"}
        history2={"habits"}
      ></Header>
      <ContainerContent>
        <ContainerCreate>
          <img src={GroupsImg} alt="" srcset="" />
          <h1>Create a new group</h1>
          <div>
            <input
              type="text"
              placeholder="Name"
              onChange={(e) =>
                setuserInput({ ...userInput, name: e.target.value })
              }
            />

            <input
              type="text"
              placeholder="Category"
              onChange={(e) =>
                setuserInput({ ...userInput, category: e.target.value })
              }
            />

            <textarea
              placeholder="Description"
              onChange={(e) =>
                setuserInput({ ...userInput, description: e.target.value })
              }
            />
            <button
              onClick={() => {
                createGroup();
                request();
              }}
            >
              Create
            </button>
          </div>
        </ContainerCreate>
        <ContainerGroups>
          <h1>Groups</h1>
          <div className="containerLista">
            <div className="search">
              <input
                value={searchGroup}
                type="text"
                onChange={(e) => setSearch(e.target.value)}
              />
              <button
                onClick={() => {
                  getuserGroups();
                  if (list === true) {
                    setList(false);
                  } else {
                    setList(true);
                  }
                }}
              >
                {list === true ? `My groups` : "all groups "}
              </button>
            </div>

            <div className="lista">
              <div className="description">
                <p>Name</p> <p>Category</p>
              </div>
              {groups.length > 0 && list === true
                ? groups.map((item) => (
                    <div
                      className="groups"
                      id={item.id}
                      key={item.id}
                      creator={item.creator.id}
                    >
                      <p>{item.name}</p>
                      <p className="category">{item.category}</p>
                      <button
                        onClick={() => {
                          setGroupId(item.id);
                          history.push("/Activities");
                        }}
                      >
                        Activities
                      </button>
                      <button
                        onClick={() => {
                          setGroupId(item.id);
                          history.push("/Goals");
                        }}
                      >
                        Goals
                      </button>
                      <button
                        onClick={() => {
                          joinGroup(item.name, item.id);
                        }}
                      >
                        Join group
                      </button>
                    </div>
                  ))
                : userGroups.map((item) => (
                    <div className="groups">
                      <p>{item.name}</p>
                      <p className="category">{item.category}</p>
                      <button
                        onClick={() => {
                          setGroupId(item.id);
                          history.push("/Activities");
                        }}
                      >
                        Activities
                      </button>
                      <button
                        onClick={() => {
                          setGroupId(item.id);
                          history.push("/Goals");
                        }}
                      >
                        Goals
                      </button>
                      <button
                        onClick={() => {
                          exitGroup(item.name, item.id);
                          setuserGroups(
                            userGroups.filter((i) => i.id !== item.id)
                          );
                        }}
                      >
                        Exit group
                      </button>
                    </div>
                  ))}
            </div>
            <div className="page">
              <FiArrowLeft
                display={list === true ? "block" : "none"}
                className="icon"
                onClick={() => {
                  setSearch("");
                  handlePage("previous");
                }}
              />
              <FiArrowRight
                display={list === true ? "block" : "none"}
                className="icon"
                onClick={() => {
                  setSearch("");
                  handlePage("next");
                }}
              />
              <p display={list === true ? "block" : "none"}>{page}</p>
            </div>
          </div>
        </ContainerGroups>
      </ContainerContent>
    </ContainerPage>
  );
}

export default Groups;
