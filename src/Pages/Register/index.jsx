import { IoIosArrowBack } from "react-icons/io";
import { yupResolver } from "@hookform/resolvers/yup";
/* import { Redirect } from "react-router"; */
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import axios from "axios";
import * as yup from "yup";

import Button from "../../Components/Button";
import { RegisterContainer, HeaderContainer } from "./style";
import image1 from "../../assets/img/image-signup.png";
import image2 from "../../assets/img/vector-signup.png";

function Register({ history }) {
  const schema = yup.object().shape({
    username: yup
      .string()
      .required(
        "Name Required"
      ) /* fazer uma verificação com usuario ja existente */,
    email: yup.string().email("Invalid email").required("Email Required"),
    password: yup
      .string()
      .min(6, "Min 6 digits")
      .required("Password Required") /* fazer regex posteriormente */,
    confirm_password: yup
      .string()
      .required("Field Required")
      .oneOf([yup.ref("password")], "Passwords don't match"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = ({ username, password, email }) => {
    const user = { username, password, email };
    axios
      .post("https://kenzie-habits.herokuapp.com/users/", user)
      .then((_) => {
        history.push("/login");
        console.log(user);
      })
      .catch((err) => console.log(err));
  };

  /* if (auth) {
    return <Redirect to="/dashboard" />;
  } */

  return (
    <>
      <HeaderContainer>
        <header>
          <IoIosArrowBack
            onClick={() => history.push("/")}
            size={30}
            color="var(--orange)"
          />
        </header>
        <h2>Signup</h2>
      </HeaderContainer>
      <RegisterContainer>
        <div className="flexContainer">
          <aside className="asideRegister">
            <img src={image1} alt="img-signup" />
          </aside>
        </div>
        <main>
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <input
              placeholder="Username"
              type="text"
              {...register("username")}
            />
            <p className="errors">{errors.username?.message}</p>
            <input placeholder="Email" type="email" {...register("email")} />
            <p className="errors">{errors.email?.message}</p>
            <input
              placeholder="Password"
              type="password"
              {...register("password")}
            />
            <p className="errors">{errors.password?.message}</p>
            <input
              placeholder="Confirm Password"
              type="password"
              {...register("confirm_password")}
            />
            <p className="errors">{errors.confirm_password?.message}</p>
            <Button background={"var(--orange)"} width={"170px"} type="submit">
              Signup
            </Button>
          </form>
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </main>
        <img className="vector" src={image2} alt="vector-signup" />
      </RegisterContainer>
    </>
  );
}

export default Register;
