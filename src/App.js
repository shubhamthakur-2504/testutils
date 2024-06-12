
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react'



function App() {
  const [Mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)
  const showAlert =(message, type)=>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);

  }
  const toggleMode =()=>{
    if (Mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
      document.getElementById("textarea1").style.backgroundColor = '#040404'
      document.getElementById("textarea1").style.color = 'white'
      showAlert("Darkmode activated",'primary')
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      document.getElementById("textarea1").style.backgroundColor = 'white'
      document.getElementById("textarea1").style.color = 'black'
      showAlert("Lightmode activated",'primary')
    }
  }
  return (
    <>
      <Navbar title='TEXTUTILS' mode = {Mode} toggleMode = {toggleMode} />
      <Alert alert ={alert} />
      <div className="container my-2">
        <Textform heading='ENTER TEXT TO ANALYZE'  showAlert ={showAlert} />
        {/* <About/> */}
      </div>

    </>
  );
}

export default App;
