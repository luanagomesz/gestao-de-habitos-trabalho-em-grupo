import homeimg from "../../assets/img/homeimg.png";
import Habbit from "../../assets/img/Habbit.png";
import { HeaderHome, FooterHome, BodyHome } from "./style";
import Header from "../../Components/Header";

function Home({ history }) {
  return (
    <>
      <BodyHome>
        <div className="intros">
          <div className="box-1">
            Habbits will help you build and maintain new habits. Make it easier:
            “hop-on-hop”.
            <br />
            <br />
            With a clean and intuitive design, Habitts also allows you to create
            groups and monitor your daily activities with more ease and
            enjoyment.
          </div>
          <div className="box-2">
            Create habits, choose the frenquency and difficulty.
          </div>
          <div className="box-3">
            Create groups and define goals and actions.
          </div>
          <button onClick={() => history.push("/login")}>Login</button>
          <button onClick={() => history.push("/register")}>SignUp</button>
        </div>
        <div className="img-container">
          <img src={homeimg} alt="homeimg" className="imgHome" />
        </div>
      </BodyHome>
    </>
  );
}

export default Home;
