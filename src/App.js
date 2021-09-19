import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Particles from 'react-tsparticles';
import Navbar from './components/Navbar';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Contacts from './components/Contacts';
import Footer from './components/Footer';

const particle_options = {
  particles: {
    number: {
      values: 30,
      density: {
        enable: true,
        value_area: 900,
        factor: 2000
      }
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#f9ab00"
      }
    },
    opacity: {
      value: 0.5,
      random: true,
    },
    size: {
      value: 5,
      random: true,
    },
    line_linked: {
      enable: true,
      distance: 100,
      color: "#fff",
      opacity: 1,
      width: 1
    },
    move: {
      enable: true,
      speed: 1.5,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: true,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  retina_detect: true,
  fps_limit: 60
}

function App() {
  return (
    <>
      <Particles 
        clasName="particles-canvas"
        options={particle_options}
      />
      <Navbar />
      <Header />
      <AboutMe />
      <Education />
      <Experience />
      <Portfolio />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
