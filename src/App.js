import './styles/App.css';
import Home from './pages/Home';
import About from './pages/About';
import Navigation from './components/Navigation';
import TopBar from './components/TopBar';

function App() {
    return (
        <div className="App">
            <TopBar />
            <Home/>
            <About/>
            <Navigation/>
        </div>
    );
}

export default App;