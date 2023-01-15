
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';

function App() {

  const [darkmode, setDarkMode] = useState(false); // Wheather enable or not
  return (
<>
<Navbar title = "TextAnalyzer" aboutText = "About Mav" Homebutton = "Home" mode={darkmode}/>
<div className="container my-3">
<TextForm heading = "Enter Text to analyze"/>
{/* <About/> */}
</div>

</>
  );
}

export default App;
