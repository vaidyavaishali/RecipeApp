import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import "./Login.css"
const Login = () => {
    const [user, setuser] = useState({ email: "", password: "" })
    const navigate = useNavigate()

    const LoginSubmit = () => {
        axios.post("https://recipe-backend-eila.onrender.com/login", user).then((res) => {
            console.log(res.status)
            if (res.status === 200) {
                window.localStorage.setItem("token", res.data.token)
                console.log(res.data.token)
                navigate("/showrecipe")
            }
        }).catch((e) => {
            console.log(e)
        })
    }
    return (
        <>
            <div>
                <div id="main-container">
                    <div id="header">
                        <h3>Sign In</h3>
                    </div>
                    <div id="email">
                        <label>Email</label><br />
                        <input type="email" placeholder="Enter Email" id="email-input" onChange={(e) => setuser({ ...user, email: e.target.value })} />
                    </div>
                    <div id="password">
                        <label>Password</label><br />
                        <input type="password" placeholder="Enter Password" id="password-input" onChange={(e) => setuser({ ...user, password: e.target.value })} />
                    </div>
                    <div id="checkbox">
                        <input type="checkbox" id="remember-me" />
                        <label>Remember me</label>

                    </div>
                    <div id="btn-div">
                        <input type="button" id="btn-submit" value={"Submit"} onClick={LoginSubmit} />
                        <p style={{ marginTop: "0px", marginLeft: "140px" }}>Forget Password ?</p>
                    </div>
                    <Link to="/signup"><p>Signup</p></Link>
                </div>
            </div>

        </>
    )
}
export default Login