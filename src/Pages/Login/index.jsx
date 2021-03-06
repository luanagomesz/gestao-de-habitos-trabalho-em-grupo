import { useContext} from "react";
import image1 from "../../assets/img/image-login.png";
import image2 from "../../assets/img/Vector-login.png";
import { LoginContainer, HeaderContainer } from "./style";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import Button from "../../Components/Button";
import { LoginContext } from "../../Provider/Login/Login";


const FormLogin = ({ history }) => {
  const { errors, register, handleSubmit, submitLogin} =
    useContext(LoginContext);

  return (
    <>
      <HeaderContainer>
        <header>
          <IoIosArrowBack
            onClick={() => history.push("/")}
            size={30}
            color="var(--ligthblue)"
          />
        </header>
        <h1>Login</h1>
      </HeaderContainer>

      <LoginContainer>
        <div className="flexContainer">
          <aside>
            <img src={image1} alt="img-login" />
          </aside>
        </div>
        <main>
          <form onSubmit={handleSubmit(submitLogin)}>
            <input
              placeholder="Username"
              type="text"
              {...register("username")}
            />
            <span className="errors">{errors.username?.message}</span>
            <input
              placeholder="Password"
              type="password"
              {...register("password")}
            />
            <span className="errors">{errors.password?.message}</span>
            <Button
              type="submit"
              background={"var(--ligthblue)"}
              width={"170px"}
            >
              Login
            </Button>
          </form>
          <p>
            Don't have an account? <Link to="/register">SignUp</Link>
          </p>
        </main>
        <img className="vector" src={image2} alt="vector-login" />
      </LoginContainer>
    </>
  );
};

export default FormLogin;
