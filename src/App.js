
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';

function App() {

  const [mode, setMode] = useState('light'); // Wheather enable or not
  const toggleMode = ()=>{
    if (mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor='grey';
    }
    else{
    setMode('light');
    document.body.style.backgroundColor='white';
  }
  }
  return (
<>
<Navbar title = "TextAnalyzer" aboutText = "About Mav" Homebutton = "Home" mode={mode} toggleMode={toggleMode}/>
<div className="container my-3">
<TextForm heading = "Enter Text to analyze"/>
{/* <About/> */}
</div>

</>
  );
}

export default App;
