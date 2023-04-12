import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [showP,setShowP]=useState("hide")
  
  const handleClick = ()=>{
    setShowP("show")
  }
    return (
      <div className="App" id="main">
       
        <button id="click" onClick={handleClick}>Show</button>
        <p className={showP} id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>
      </div>
    );
  }
  
  export default App
  