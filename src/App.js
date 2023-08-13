import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "react-router-dom"
import Home from './components/Home'
import Signup from './components/Signup'
import Login from './components/Login'
import Navbar from './components/Header'
import {BrowserRouter,Routes,Route} from "react-router-dom"

function App(){
    return(
      <>
        <BrowserRouter>
        <Navbar></Navbar>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
          </Routes>
        </BrowserRouter>
      </>
    )
}

export default App;