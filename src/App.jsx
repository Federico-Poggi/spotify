import Home from './Component/Home.jsx'
import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";




function App() {

  return (
    <BrowserRouter>
        <Home/>
    </BrowserRouter>
  )
}

export default App
