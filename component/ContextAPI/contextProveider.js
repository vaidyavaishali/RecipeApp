import userContext from "./Context";
import axios from "axios";
import { useState } from "react";
const recipeContext = (props) => {
    const [data, setData] = useState([])

    // const Login = () => {
    // axios.post("http://localhost:8000/login").then({
    //     if()
    // })  
    // }

return (
        <userContext value={{ data, setData }}>

        </userContext>
    )

}