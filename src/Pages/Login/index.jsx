import { useHistory } from "react-router"
import { useState } from "react"
import axios from "axios"
import image1 from "../../assets/img/image-login.png"
import image2 from "../../assets/img/Vector-login.png"
import {LoginContainer, HeaderContainer} from "./style"
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom"
import Button from "../../Components/Button"
import jwt_decode from "jwt-decode"


const FormLogin = () => {

    const history = useHistory()

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const submitLogin = (evt) => {

        evt.preventDefault()

        const login = {

        username: username,
        password: password
        
        }
        console.log(login)
        axios.post("https://kenzie-habits.herokuapp.com/sessions/", login).then((response) => {
          console.log(response)
          const jwt = jwt_decode(response.data.access)

        localStorage.setItem("id", JSON.stringify(jwt.user_id))
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
        <h1>Login</h1>
      </HeaderContainer>



            <LoginContainer>
            <div className="flexContainer">
              <aside>
                <img src={image1} alt="img-login"/>
              </aside>
            </div>
            <main>
            <form onSubmit={(evt) => submitLogin(evt)}> 
                <input placeholder="Username" onChange={(evt) => setUsername(evt.target.value)} value={username}/>
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