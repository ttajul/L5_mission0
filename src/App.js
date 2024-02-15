import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Library from './components/Library'


function App() {
  return (
    <div className="container-fluid bg-dark text-white text-center">
    Container
    <Navbar/>
    <Home/>
    <Library/>
    </div>
  );
}

export default App;
