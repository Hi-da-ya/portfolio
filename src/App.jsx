import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Terminal from './components/Terminal'
import About from './components/About'
import Projects from './components/Projects'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <section id="home" className="min-h-screen flex items-center pt-20 md:pt-0">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-12">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12 xl:gap-16">
          <Header />
          <Terminal />
        </div>
      </div>
    </section>
    <About /> 
    <Projects/>
    </>
  )
}

export default App
