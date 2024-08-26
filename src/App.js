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
    } else{
      setMode('light');
    }
  }
  return (
    <>
    <NavBar title="Text"  mode = {mode} toggleMode={toggleMode}/>
    <div className="container my-3">
      {/* <h1>Enter the text to analyze</h1> */}
      <TextForm />
      {/* <Accordion /> */}
    </div>
    </>
  );
}

export default App;