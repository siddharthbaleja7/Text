import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import Accordion from './components/Accordion';

function App() {
  return (
    <>
    <NavBar title="Text" />
    <div className="container my-3">
      {/* <h1>Enter the text to analyze</h1> */}
      {/* <TextForm /> */}
      <Accordion />
    </div>
    </>
  );
}

export default App;
