// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import React, { useState } from 'react';
import Button from './components/Button';
// import { BrowserRouter as Router, Route, Routes,} from "react-router-dom";

// import {
//   BrowserRouter as Router,
//   Link,
//   Route,
//   Routes,
//   Switch,
// } from "react-router-dom";

function App() {

  const [mode, setMode] = useState('dark');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000)
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has enabled", "success");
      document.title = 'Textutils - Light Mode'
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark mode has enabled", "success");
      document.title = 'Textutils - Dark Mode'
    }
  }

  return (
    <div>
    {/* <Router> */}
      
        {/* <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} /> */}

        {/* <Alert alert={alert} /> */}

        <div className="container my-3">
        {/* <Routes>
            <Route path="/about" element={<About />} /> */}
            {/* <Route path="/" element= */}
            {/* <TextForm showAlert={showAlert} heading="Enter the Text to analyze below" mode={mode} /> */}
          {/* // </Routes> */}
        </div>
    {/* </Router> */}

   

    {/* <About/> */}

    <Button/>
    </div>


    
  );
}

export default App;
