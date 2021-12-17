import homeimg from "../../assets/img/homeimg.png";
import { BodyHome } from "./style";
import logo from "../../assets/img/Habbit.png";
import { HeaderHome } from "./style";
import { FooterHome } from "./style";

function Home({ history }) {
  return (
    <>
      <HeaderHome>
        <div className="logo">
          <img src={logo} alt="Habbits" />
        </div>

        <h1>Habbits</h1>

        <div className="btn-container">
          <button onClick={() => history.push("/login")}>Login</button>
          <button onClick={() => history.push("/register")}>SignUp</button>
        </div>
      </HeaderHome>

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
        </div>

        <div className="img-container">
          <img src={homeimg} alt="homeimg" className="imgHome" />
        </div>

        <FooterHome>
          <span>
            <p>Débora Gama</p>
            <p>Product Owner</p>
          </span>
          <span>
            <p>Ingridy Rodrigues</p>
            <p>Scrum Master</p>
          </span>
          <span>
            <p>Ian Kuntz</p>
            <p>Quality Assurance</p>
          </span>
          <span>
            <p>Jonatas Heiderich</p>
            <p>Quality Assurance</p>
          </span>
        </FooterHome>
      </BodyHome>
    </>
  );
}

export default Home;
