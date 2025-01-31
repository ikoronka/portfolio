import './App.css';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <Home/>
      <Skills/>
      <Navigation/>
    </div>
  );
}

export default App;
