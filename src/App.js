import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "react-router-dom"
import Home from './components/Home'
import ContactUs from './components/Contact'
import Signup from './components/Signup'
import Login from './components/Login'
import Navbar from './components/Header'
import Footer from './components/Footer'
import Migraine from './components/Conditions/Migraine'
import Allergy from './components/Conditions/Allergy'
import HIV from './components/Conditions/HIV'
import Cancer from './components/Conditions/Cancer'
import Fever from './components/Conditions/Fever'
import Task from './components/Task'
import TeenHealth from './components/Wellbeing/TeenHealth'
import Pills from './components/Drugs/Pills'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import AddPatient from './components/addpatient'
import PatientDetails from './components/patientdetails'
function App(){
    return(
      <>
        <BrowserRouter>
        <Navbar></Navbar>

          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/contact' element={<ContactUs/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/migraine' element={<Migraine/>}/>
            <Route path='/allergy' element={<Allergy/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/task' element={<Task/>}/>
            <Route path="/cancer" element={<Cancer/>} />
            <Route path='/pills' element={<Pills/>}/>
            <Route path='/add' element={<AddPatient/>}/>
            <Route path='/get' element={<PatientDetails/>}/>
        <Route path="/hiv" element={<HIV/>}/>
        <Route path="/fever" element={<Fever/>} />
        <Route path="/teenhealth" element={<TeenHealth/>} />
       
          </Routes>
          <Footer></Footer>
        </BrowserRouter>
      </>
    )
}

export default App;