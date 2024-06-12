import Footer from "./components/Footer"
import Hero from "./components/Hero"
import HeroData from "./components/HeroData"
import Navbar from "./components/Navbar"



function App() {

  return (
    <div
      className="mt-14  md:flex block"
    >
      <div
        className="max-w-7xl"
      >
    <Hero />
      <Navbar />
      <Footer />
      </div>
      <div 

      >
        <HeroData />
      </div>
    </div>
  )
}

export default App
