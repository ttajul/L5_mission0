import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';


function App() {
  return (
    <div className="container-fluid bg-dark text-white text-center">
    Container
    <Navbar/>
    <Home/>
    </div>
  );
}

export default App;
