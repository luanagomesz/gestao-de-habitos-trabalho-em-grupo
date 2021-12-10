import { useHistory } from "react-router"
import { useState } from "react"
import axios from "axios"

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
  const token = JSON.parse(localStorage.getItem("authToken"));


  const goTodash = () => {

    if (token) {

      history.push("/dashboard");
    } 
}
  const logout = () => {

    localStorage.clear()
    history.push("/")

  }
    return(
        <div>
            <header>
                {token && <button onClick={goTodash}>Dashboard</button>}
                <button onClick={() => history.push("/")}>Home</button>
                <button onClick={() => history.push("/register")}>SignUp</button>
            </header>
            <form onSubmit={SubmitLogin}> 
                <input placeholder="Email" onChange={(evt) => setEmail(evt.target.value)} value={email}/>
                <input placeholder="Password" type="password" onChange={(evt) => setPassword(evt.target.value)} value={password}/>
                <button onClick={logout}>Logout</button>
            </form>
            
        </div>
    )
  }


export default FormLogin