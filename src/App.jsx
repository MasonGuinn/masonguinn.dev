import './styles/app.css'
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Divider from './assets/Divider.svg?react';
import React from "react";


function App() {

  return (
    <>
        <div className="landing-page">
            <Navbar />
            <Hero />
        </div>
        <main>
            <Divider className="heroDivider" />
            <Projects />
        </main>
    </>
  )
}

export default App
