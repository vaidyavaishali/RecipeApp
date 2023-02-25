import './App.css';
import Login from './component/Login/Login';
import { Routes, Route } from 'react-router-dom';
import SignUp from './component/Signup/SignUp';
import CreateRecipe from './component/Recipe/CreateRecipe/CreateRecipe';
import ShowRecipe from './component/Recipe/ShowRecipe/ShowRecipe';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path='/create' element={<CreateRecipe/>}/>
        <Route path='/showrecipe' element={<ShowRecipe/>}/>
        <Route path='/signup' element={<SignUp/>} />
      </Routes>

    </div>
  );
}

export default App;
