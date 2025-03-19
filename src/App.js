import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      <Navigation/>
    </div>
  );
}

export default App;
