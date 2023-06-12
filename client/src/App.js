import './App.css';
import { Home } from './components/Home.jsx';
import { Projects } from './components/Projects.jsx';
import { About } from './components/About.jsx';
import { Contact } from './components/Contact.jsx';
import NavBar from './components/NavBar';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}

export default App;
