import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  const [Mode,setMode]=useState('light')
  const [alert, setAlert] = useState(null);
  //alert is an object here

  const showAlert=(message,type)=>
  {
    setAlert(
      {
        msg:message,
        type:type
      }
    )
  }
 const toggleMode=()=>
  {
    if(Mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor='#393053';
      showAlert('Dark mode has been enabled','success');
      setTimeout(() => {
        setAlert(null);
      }, 1500);
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert('light mode has been enabled','success');
      setTimeout(() => {
        setAlert(null);
      }, 1500);
    }
  }
  return (
    <>
     {/* <Router> */}
      <Navbar title="TextImo" aboutText="About us" Mode={Mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container">
      <TextForm heading="Enter Your text to Analyze" Mode={Mode} showAlert={showAlert} alert={alert}/>
          {/* <Routes> */}
             {/* <Route exact path="/about" element={ <About Mode={Mode}/>} /> */}
             {/* <Route exact path="/" element={ <TextForm heading="Enter Your text to Analyze" Mode={Mode} />}/> */}
          {/* </Routes> */}
          </div>
          {/* </Router> */}
     
    </>
  );
}

export default App;
