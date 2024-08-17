import Navbar from "./Components/Navbar/Navbar";
import Intro  from "./Components/Intro/Intro";
import FloatingDiv from "./Components/FloatingDiv/FloatingDiv";
import Experience from "./Components/Experience/Experience";
import Services from "./Components/Services/Services";
import Works from "./Components/Works/Works";
import Portfolio from "./Components/Portfolio/Portfolio";
import Testimonial from "./Components/Testimonials/Testimonial";
import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Contact/Contact";
import { themeContext } from "./Context";
import { useContext } from "react";
function App() {
  const theme=useContext(themeContext);
  const darkMode=theme.state.darkMode;
  
  return (
    <div className="App"
    style={{bachground : darkMode?'black': '',
      color : darkMode?'white': ''
    }}
    >



     <Navbar/>
      <Intro/>
      <Services/>
      <FloatingDiv/>
      <Experience/>
      <Works/>
      <Portfolio/>
      <Testimonial/>
      <Contact/>
      <Footer/>
      
     
    </div>
  );
}

export default App;
