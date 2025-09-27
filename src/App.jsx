
import './App.css'
import Background from './components/Background'
import Education from './components/Education'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {

  return (
    <Background>
    <div className='flex flex-wrap items-center justify-center '>
      <Navbar/>
      <Hero/>
      <Skills/>
      <Projects/>
      <Education/>
    </div>
    </Background>
  )
}

export default App
