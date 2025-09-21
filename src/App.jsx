
import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {

  return (
    <div className='flex flex-wrap items-center justify-center '>
      <Navbar/>
      <Hero/>
      <Skills/>
      <Projects/>
    </div>
  )
}

export default App
