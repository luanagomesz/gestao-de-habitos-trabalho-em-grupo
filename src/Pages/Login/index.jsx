import { useHistory } from "react-router"
import { useState } from "react"
import axios from "axios"
import image1 from "../../assets/img/image-login.png"
import image2 from "../../assets/img/Vector-login.png"
import {LoginContainer, HeaderContainer} from "./style"
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom"
import Button from "../../Components/Button"


const FormLogin = () => {

    const history = useHistory()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const SubmitLogin = (evt) => {

        evt.preventDefault()

        const Login = {
        email: email,
        password: password
        
        }

        axios.post("https://kenzie-habits.herokuapp.com/sessions/", Login)
        .then((response) => {

        localStorage.setItem("authToken", JSON.stringify(response.data.access))

        history.push("/dashboard")
      })
      .catch((err) => console.log("Login Fail"))
  }
  // const token = JSON.parse(localStorage.getItem("authToken"));


//   const goTodash = () => {

//     if (token) {

//       history.push("/dashboard");
//     } 
// }

    return(
        <>
            <HeaderContainer>
        <header>
          <IoIosArrowBack onClick={() => history.push("/")} size={30} color="var(--ligthblue)"/>
        </header>
        <h2>Login</h2>
      </HeaderContainer>



            <LoginContainer>
            <div className="flexContainer">
              <aside>
                <img src={image1} alt="img-login"/>
              </aside>
            </div>
            <main>
            <form onSubmit={SubmitLogin}> 
                <input placeholder="Email" onChange={(evt) => setEmail(evt.target.value)} value={email}/>
                <input placeholder="Password" type="password" onChange={(evt) => setPassword(evt.target.value)} value={password}/>
                <Button type="submit" background={"var(--ligthblue)"} width={"170px"}>Login</Button>
            </form>
            <p>
            Don't have an account? <Link to="/register">SignUp</Link>
          </p>
          </main>
          <img className="vector" src={image2} alt="vector-login"/>
      </LoginContainer>

        </>
    )
  }


export default FormLogin