import './styles/app.css'
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Projects from "./components/Projects/Projects.jsx";


function App() {

  return (
    <>
        <div className="landing-page">
            <Navbar />
            <main>
                <Hero />
                <Projects />
            </main>
        </div>
    </>
  )
}

export default App
