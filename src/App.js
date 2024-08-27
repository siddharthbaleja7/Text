import './App.css';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import Accordion from './components/Accordion';
import { useState } from 'react';
import Alert from './components/Alert';

function App() {
  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert = (mesage,type) => {
    setAlert({
      msg : mesage,
      type : type
    })
    setTimeout(() => {
      //this say that after 2000 ms or 2 sec the state of setalert to be null
      setAlert(null);
    },2000);
  }
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert('Dark mode has been enabled','success');
    } else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled','success');
    }
  }
  return (
    <>
    <NavBar title="Text"  mode = {mode} toggleMode={toggleMode}/>
    <Alert alert = {alert} />
    <div className="container my-3">
      <TextForm showAlert= {showAlert} mode = {mode} />
      {/* <Accordion /> */}
    </div>
    </>
  );
}

export default App;