
import './App.css'
import Background from './components/Background'
import Contact from './components/Contact'
import Education from './components/Education'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'
import { Analytics } from "@vercel/analytics/react"
function App() {

  return (
    <Background>
    <div className='flex flex-wrap items-center justify-center '>
      <Navbar/>
      <Hero/>
      <Skills/>
      <Projects/>
      <Education/>
      <Contact/>
      <Footer/>
    </div>
    <Analytics/>
    </Background>
  )
}

export default App
