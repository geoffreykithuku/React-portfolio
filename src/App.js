import Navbar from "./Components/Navbar/Navbar";
import Intro from './Components/Intro/Intro';
import Services from './Components/Services/Services';
import './App.css';
import Experience from "./Components/Experience/Experience";
import Work from "./Components/Work/Work";
import Portfolio from "./Components/Portfolio/Portfolio";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact.jsx";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Intro/>
     <Services/>
     <Experience/>
     <Work/>
     <Portfolio/>
     <Testimonials/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
