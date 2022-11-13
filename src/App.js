import './App.css';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <div data-bs-spy="scroll" data-bs-target="#navbar" data-bs-smooth-scroll="true" className="scrollspy" tabIndex="0">
        <div id="home" className="d-flex align-items-center justify-content-center vh-100">
          <Home />
        </div>
        <div id="aboutMe" className="d-flex align-items-center justify-content-center vh-100">
          <AboutMe />
        </div>
        <div id="education" className="d-flex align-items-center justify-content-center vh-100">
          Education
        </div>
        <div id="experience" className="d-flex align-items-center justify-content-center vh-100">
          Experience
        </div>
      </div>
    </div>
  );
}

export default App;
