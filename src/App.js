
import './App.css';

import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
<>
<Navbar title = "MavApp" aboutText = "About Mav" Homebutton = "Home"/>

<div className="container my-3">
<TextForm heading = "Enter Text to analyze"/>

</div>

{/* <Navbar/> */}
{/* <Navbar title = "MavApp" /> */}
</>
  );
}

export default App;
