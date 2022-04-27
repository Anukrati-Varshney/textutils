import "./App.css";
import Navbar from "./Components/Navbar";
import About from "./Components/About";

import TextForm from "./Components/TextForm";
import React,{useState} from 'react'
import Alert from "./Components/Alert";
// import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";


function App() {
  const[Mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert =(message,type)=>{
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode =()=>{
    if(Mode ===`light`){
      setMode(`dark`);
      document.body.style.backgroundColor = "#042743";
      showAlert("dark mode has been enabled","success");
      // document.title ="TextUtils - Dark Mode";
    }
    else{
      setMode(`light`);
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been enabled","success");
      // document.title ="TextUtils - Light Mode";s

    }
  }
  return (
    <>
      {/* <Navbar title = "TextUtils" aboutText = "About us"/> */}
      {/* <Router> */}
      <Navbar title = "TextUtils" Mode = {Mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
        
      {/* <Switch> */}
          {/* <Route path="/about">
            <About Mode = {Mode}/>
          </Route> */}
          
          
          {/* <Route exact path="/"> */}
        <TextForm  showAlert={showAlert} heading = "Try TextUtils- Word Counter, Character Counter, Remove extra Space" Mode = {Mode} />

            
          {/* </Route> */}
        {/* </Switch> */}
        </div>
        {/* </Router> */}
        
        {/* <About/> */}

      
      </>
     
    
  );
}

export default App;