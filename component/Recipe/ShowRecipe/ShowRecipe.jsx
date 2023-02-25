import axios from "axios"
// import './createRecipe.css'
import { useEffect, useState } from "react"
import { useNavigate, Link } from "react-router-dom"
const ShowRecipe = () => {
    const [recipe, setrecipe] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        const token = window.localStorage.getItem("token")
        const config = {
            headers: { authorization: token }
        }
        axios.get("https://recipe-backend-eila.onrender.com/recipe", config).then((res) => {
            // console.log(res.data.recipeData)
            setrecipe(res.data.recipeData)

        })
    }, [])
    console.log(recipe)


    // console.log(recipe)
    return (
        <>
            <div style={{margin:"auto"}}>
                <header style={{width:"100%", height:"20vh"}}>
                    <input type="text" placeholder="search recipe" style={{width:"300px", height:"30px", margin:"auto"}} />
                    <Link to="/create"><p>New</p></Link>
                </header>
            </div>

        </>
    )
}
export default ShowRecipe