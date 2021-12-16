import { ContainerContent, ContainerGroups, ContainerCreate } from "./style";
import { GroupsContext } from "../../Provider/Groups/groups";
import { useContext } from "react";
import GroupsImg from "../../assets/img/GroupsImg.png";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { useState } from "react/cjs/react.development";
import Vector from "../../assets/img/VectorDashboard.png";
function GroupsMobileContent({ history }) {
  const {
    setSearch,
    setGroupId,
    groups,
    joinGroup,
    searchGroup,
    handlePage,
    request,
    page,
    setuserInput,
    createGroup,
    userInput,
    list,
    exitGroup,
    getuserGroups,
    setList,
    userGroups,
    setuserGroups,
  } = useContext(GroupsContext);

  const [state, setState] = useState(true);

  return state === true ? (
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
                      setuserGroups(userGroups.filter((i) => i.id !== item.id));
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
      <button className="stateButton" onClick={() => setState(false)}>
        Add new Group
      </button>
      <img className="vector" src={Vector} alt="" srcset="" />
    </ContainerGroups>
  ) : (
    <ContainerCreate>
      <img src={GroupsImg} alt="" srcset="" />
      <h1>Create a new group</h1>
      <div>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setuserInput({ ...userInput, name: e.target.value })}
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
      <button className="stateButton" onClick={() => setState(true)}>
        {state === true ? "add new Group" : "View Groups"}
      </button>
      <img className="vector" src={Vector} alt="" srcset="" />
    </ContainerCreate>
  );
}

export default GroupsMobileContent;
