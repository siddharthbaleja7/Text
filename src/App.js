import './App.css';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import Accordion from './components/Accordion';
import { useState } from 'react';

function App() {
  const [mode,setMode] = useState('light');
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
    } else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
    <NavBar title="Text"  mode = {mode} toggleMode={toggleMode}/>
    <div className="container my-3">
      <TextForm mode = {mode} />
      {/* <Accordion /> */}
    </div>
    </>
  );
}

export default App;