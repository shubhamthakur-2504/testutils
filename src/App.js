
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  return (
    <>
      <Navbar title='TEXTUITLS' />
      <div className="container">
        <Textform heading='ENTER TEXT TO ANALYZE' />
        <About/>
      </div>

    </>
  );
}

export default App;
