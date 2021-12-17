import { createContext, useState, useContext, useEffect } from "react";
import { LoginContext } from "../Login/Login";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const GroupsContext = createContext();

export const GroupsProvider = ({ children }) => {
  const [groups, setgroups] = useState([]);
  const [page, setPage] = useState(1);
  const [searchGroup, setSearch] = useState("");
  const [GroupId, setGroupId] = useState(""); // valor a ser usado para requisições como group_id no activities e goals
  const { authorization, username } = useContext(LoginContext);
  const [next, setNext] = useState(true);

  const [userInput, setuserInput] = useState({
    name: "",
    description: "",
    category: "",
  });

  const [userGroups, setuserGroups] = useState([]);

  const request = (action) => {
    if (searchGroup.length > 0) {
      axios
        .get(
          `https://kenzie-habits.herokuapp.com/groups/?search=${searchGroup}`,
          "",
          authorization
        )
        .then((response) => {
          setgroups(response.data.results);
          setNext(response.data.next);
        });
    } else {
      axios
        .get(
          `https://kenzie-habits.herokuapp.com/groups/?page=${page}`,
          "",
          authorization
        )
        .then((response) => {
          setgroups(response.data.results);
          setNext(response.data.next);
        });
    }
  };

  const handlePage = (value) => {
    if (value === "next" && next !== null) {
      setPage(page + 1);
    }
    if (value === "previous") {
      if (page > 1) {
        setPage(page - 1);
      }
    }
  };
  const setGroup = (id) => {
    setGroupId(id);
  };

  const joinGroup = (group, id) => {
    axios
      .post(
        `https://kenzie-habits.herokuapp.com/groups/${id}/subscribe/`,
        "",
        authorization
      )
      .then((response) => {
        toast(`${username} Joined ${group}`);
      })
      .catch((err) => toast(`${username} Already is in ${group}`));
  };

  useEffect(() => {
    request();
  }, [page, searchGroup]);

  const createGroup = () => {
    axios
      .post(
        `https://kenzie-habits.herokuapp.com/groups/`,
        userInput,
        authorization
      )
      .then((response) => {
        toast(`${userInput.name} created`);
      })
      .catch((err) => toast(`error `));
  };

  const getuserGroups = () => {
    axios
      .get(
        `https://kenzie-habits.herokuapp.com/groups/subscriptions/`,
        authorization
      )
      .then((response) => {
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
        toast(`You have left ${groupName}`);
      })
      .catch((err) => toast(`error `));
  };

  const [list, setList] = useState(true);

  return (
    <GroupsContext.Provider
      value={{
        joinGroup,
        setGroup,
        request,
        setSearch,
        GroupId,
        setGroupId,
        groups,
        searchGroup,
        handlePage,
        page,
        userInput,
        setuserInput,
        list,
        setList,
        exitGroup,
        getuserGroups,
        createGroup,
        userGroups,
        setuserGroups,
      }}
    >
      {children}
    </GroupsContext.Provider>
  );
};
