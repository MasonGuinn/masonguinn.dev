import './styles/app.css'
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";


function App() {

  return (
    <>
        <div className="landing-page">
            <Navbar />
            <main>
                <Hero />
            </main>
        </div>
    </>
  )
}

export default App
