import './App.css';
import { Home } from './components/Home.jsx';
import { Projects } from './components/Projects.jsx';
import { About } from './components/About.jsx';
import { Contact } from './components/Contact.jsx';
import NavBar from './components/NavBar';
import { Footer } from './components/Footer.jsx';
import { Element } from 'react-scroll';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Contact />
      <Element name='projects'>
        <Projects />
      </Element>
      <Footer />
    </div>
  );
}

export default App;
