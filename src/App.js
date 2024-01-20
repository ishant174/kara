import logo from './logo.svg';
import './App.css';
import Landing  from './components/Landing';
import Value from './components/Value';
import Vision from './components/Vision';
import CV from './components/CV';
import Available from './components/Available';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Landing/>
      <Value/>
<Vision/>
     <CV/>
     <Available/>
      {/* available for  */}
      {/* foooter  */}
    </div>
  );
}

export default App;
