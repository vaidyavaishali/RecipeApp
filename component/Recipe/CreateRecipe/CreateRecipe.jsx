import axios from "axios"
import './createRecipe.css'
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const CreateRecipe = () => {
    const navigate = useNavigate()
    const [data, setData] = useState({ title: "", author: "", file: "", ingredients: "", directions: "" })
    const token = localStorage.getItem("token")
    const config = {
        headers: { authorization: token }
    }
    const Create = () => {
        axios.post("https://recipe-backend-eila.onrender.com/register", data, config).then((res) => {
            if (res.status == 200) {
                navigate("/post")
                alert("new receipe added")
            }
        })
    }

    return (
        <>
            <div className="recipe-container">
                <div id="title-div">
                    <label>Recipe Title</label><br />
                    <input type="text" onChange={(e) => { setData({ ...data, title: e.target.value }) }} id="title" />
                </div>
                <div id="author-div">
                    <label>Author</label><br />
                    <input type="text" onChange={(e) => { setData({ ...data, author: e.target.value }) }} id="author" />
                </div>
                <div id="img-div">
                    <label>Please upload Image</label><br />
                    <input type="file" onChange={(e) => { setData({ ...data, file: e.target.value }) }} id="img" />
                </div>
                <div id="ing-div">
                    <label>Ingredients</label><br />
                    <input type="text" onChange={(e) => { setData({ ...data, ingredients: e.target.value }) }} id="ing" />
                </div>
                <div id="dir-div">
                    <label>Recipe Direction</label><br />
                    <input type="text" onChange={(e) => { setData({ ...data, ingredients: e.target.value }) }} id="dir" />
                </div>
                <button onClick={Create} id="create-btn">Submit</button>
            </div>
        </>
    )
}
export default CreateRecipe