import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Holka from './images/holka_gimp.jpg';
import Kytka from './images/kytka.jpg';

function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      <Navigation/>
      <img src={Holka} alt="holka" width={300}/>
      <img src={Kytka} alt="holka" width={300}/>
    </div>
  );
}

export default App;
