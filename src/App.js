import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
    <NavBar title="Text" />
    <div className="container my-3">
      <h1>Enter the text to analyze</h1>
      <TextForm />
    </div>
    </>
  );
}

export default App;
