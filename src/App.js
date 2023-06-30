import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';


function App() {

  

  return (
    <>
      <Navbar title="TextEditor" />
      <div className="container">
        <Textform />
      </div>
    </>
  );
}

export default App;
