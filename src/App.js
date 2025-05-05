import './styles/App.css';
import Home from './pages/Home';
import About from './pages/About';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      {/* <Navigation/> */}
      <Footer/>
    </div>
  );
}

export default App;
