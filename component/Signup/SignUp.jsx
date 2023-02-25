import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./SignUp.css"
import axios from "axios"
const SignUp = () => {
    const [check, setCheck] = useState(false)
    const [user, setuser] = useState({ email: "", password: "" })
    const Navigate = useNavigate()
    const [confirm_password, setConfirm_password] = useState("")
    const SignUpHandler = () => {
        if (validateUser(user)) {
            if (check === true) {
                axios.post("http://localhost:8000/register", user).then((res) => {
                    if (res.status === 200) {
                        Navigate("/")
                    }
                })
            } else {
                alert("Agree terms & conditions")
            }
        }
    }

    const validateUser = (user) => {
        if (!user.email) {
            alert("email is required")
            return 0;
        } else if (!user.password) {
            alert("password is required")
            return 0;
        } else if (user.password !== confirm_password) {
            alert("Password is not matching")
            return 0;
        }
        return 1;
    }

    return (
        <>
            <div id="main">
                <div id="main-container">
                    <div id="header">
                        <h3>Sign Up</h3>
                    </div>

                    <div id="email">
                        <label>Email</label><br />
                        <input type="email" placeholder="Enter Email" id="email-input" onChange={(e) => setuser({ ...user, email: e.target.value })} />
                    </div>
                    <div id="password">
                        <label>Password</label><br />
                        <input type="password" placeholder="Enter Password" id="password-input" onChange={(e) => setuser({ ...user, password: e.target.value })} />
                    </div>
                    <div id="password">
                        <label>Repeat Password</label><br />
                        <input type="password" placeholder="Enter Password" id="password-input" onChange={(e) => setConfirm_password(e.target.value)} />
                    </div>
                    <div id="checkbox">
                        <input type="checkbox" id="remember-me" onChange={(e) => { setCheck(!check) }} />
                        <label>I Agree with Term & Condition</label>

                    </div>
                    <div id="btn-div">
                        <input type="button" id="btn-continue" value={"Continue"} onClick={SignUpHandler} />
                        <p style={{ marginTop: "0px", marginLeft: "140px" }}>Forgot Password ?</p>
                    </div>

                </div>
            </div>

        </>
    )
}
export default SignUp