
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  return (
<>
<Navbar title = "MavApp" aboutText = "About Mav" Homebutton = "Home"/>

<div className="container my-3">
<TextForm heading = "Enter Text to analyze"/>
{/* <About/> */}
</div>

</>
  );
}

export default App;
