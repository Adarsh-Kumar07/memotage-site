import { useState } from 'react'
import './App.css'
import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Product from "./components/Product";
import USP from "./components/USP";
import Stats from "./components/Stats";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="font-sans text-gray-800">
      <Navbar />
      <div id="hero"><Hero /></div>
      <div id="problem"><Problem /></div>
      <div id="product"><Product /></div>
      <div id="tech"><USP /></div>
      <div><Stats /></div>
      <div id="cta"><CTA /></div>
      <Footer />
  </div>
  )
}

export default App
