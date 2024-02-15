import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ImageLibrary from './components/ImageLibrary'


function App() {
  return (
    <div className="container-fluid bg-dark text-white text-center">
   
    <Navbar/>
    <Home/>
    <ImageLibrary/>
    </div>
  );
}

export default App;
