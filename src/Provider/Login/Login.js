import { createContext, useEffect, useState } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";

export const LoginContext = createContext();
export const LoginProvider = ({ children }) => {
  const history = useHistory();
  const [authorization, setAuthorization] = useState({});
  const [token, setToken] = useState("");
  const [username, setUserName] = useState("");
  useEffect(() => {
    setAuthorization({
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem("authToken")}`,
      },
    });
    setUserName(window.localStorage.getItem("user"));
  }, []);

  const schema = yup.object().shape({
    username: yup.string().required("Username Required"),
    password: yup
      .string()
      .min(6, "Minimum of 6 characters")
      .required("Password Required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitLogin = ({ username, password }) => {
    const user = { username, password };
    setUserName(user.username);

    axios
      .post("https://kenzie-habits.herokuapp.com/sessions/", user)
      .then((response) => {
        const jwt = jwt_decode(response.data.access);
        window.localStorage.clear();
        window.localStorage.setItem("id", jwt.user_id);
        window.localStorage.setItem("authToken", response.data.access);
        window.localStorage.setItem("user", user.username);
        window.localStorage.setItem("user_id", jwt.user_id);
        setToken(response.data.access);
        setAuthorization({
          headers: {
            Authorization: `Bearer ${window.localStorage.getItem("authToken")}`,
          },
        });
        history.push("/dashboard");
        console.log(authorization);
      })
      .catch((err) => toast.error("Invalid username or password"));
  };

  const clearLocalStorage = () => {
    window.localStorage.clear();
  };

  return (
    <LoginContext.Provider
      value={{
        register,
        handleSubmit,
        errors,
        submitLogin,
        authorization,
        clearLocalStorage,
        username,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};
