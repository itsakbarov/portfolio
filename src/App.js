import { React } from 'react'
import Home from "./containers/Home/Home";
import About from "./containers/About";
import Skills from "./containers/Skills";
import Appbar from "./components/Appbar";
import  './assets/styles/main.scss'
import Portfolio from './containers/Portfolio/Portfolio';
import Contact from './containers/Contact/Contact';
import Footer from './containers/Footer/Footer';

function App() {
  return (
    <div className="App">
    <Appbar />
    <Home />
    <About />
    <Skills />
    <Portfolio />
    <Contact />
    <Footer/>
    </div>
  );
}

export default App;
