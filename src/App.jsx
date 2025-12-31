import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Terminal from './components/Terminal'
import About from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
    <Navbar />
    <section id="home" className="min-h-screen flex items-center pt-20 md:pt-24 lg:pt-0 bg-[#0a192f]">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 md:gap-12 lg:gap-16 xl:gap-20">
          <Header />
          <Terminal />
        </div>
      </div>
    </section>
    <About /> 
    <Projects/>
    <Experience/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
