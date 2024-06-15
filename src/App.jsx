import { useEffect, useState } from "react";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HeroData from "./components/HeroData";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import LightEffect from "./utils/Light";

function App() {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 800);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 800);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [window.screen.width]); 

  return (
    <div className="mt-14 md:flex block max-w-screen-sm">
      <LightEffect />
      <div className="w-full md:max-w-7xl max-w-96 md:fixed">
        <Hero />
        <Navbar />
        <Footer />
      </div>
      <div style={isLargeScreen ? { marginLeft: '55em' } : { marginLeft: '0em' }}>
        <HeroData />
        <Projects />
        <Experience />  
      </div>
    </div>
  );
}

export default App;