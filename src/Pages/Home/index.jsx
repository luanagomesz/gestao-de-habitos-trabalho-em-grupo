import homeimg from "../../assets/img/homeimg.png"
import Habbit from "../../assets/img/Habbit.png"
import { HeaderHome, FooterHome, BodyHome } from "./style";

function Home({ history }) {


  return (
    <>
    <HeaderHome>
      <div className="Logo" onClick={() => history.push("/")}>
        <img src={Habbit} alt="logoimg"/>
        <h1>Habbits</h1>
      </div>
      
      <aside>
        <button onClick={() => history.push("/login")}>Login</button>
        <button onClick={() => history.push("/register")}>SignUp</button>
      </aside>
    </HeaderHome>
    <BodyHome>
      <img src={homeimg} alt="homeimg" className="imgHome"/>
      <div className="intros">
        <ul>
          <li className="li1">
            Habbits will help you build and maintain new habits. Make it easier: “hop-on-hop”.<br/>
            <br/>With a clean and intuitive design, Habitts also allows you to create groups and monitor
            your daily activities with more ease and enjoyment.
          </li>
          <li className="li2">
            Create habits, choose the frenquency and difficulty.
          </li>
          <li className="li3">
            Create groups and define goals and actions.
          </li>
        </ul>
      </div>
    </BodyHome> 
      

    <FooterHome>
    <ul>
        <li>Luana Gomes</li>
        <li>Tech Leader</li>
      </ul>
      <ul>
        <li>Ingridy Rodrigues</li>
        <li>Scrum Master</li>
      </ul>
      <ul>
        <li>Débora Gama</li>
        <li>Product Owner</li>
      </ul>
      <ul>
        <li>Ian Kuntz</li>
        <li>Quality Assurance</li>
      </ul>
      <ul>
        <li>Jonatas Heiderich</li>
        <li>Quality Assurance</li>
      </ul>
      
    </FooterHome>
    </>
  );
}

export default Home;
