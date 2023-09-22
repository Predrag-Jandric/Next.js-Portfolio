import Skills from '../components/Skills'
import About from '../components/About'
import Projects from '../components/Projects'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import TestingComp from '../components/TestingComp'

export default function Home() {
  return (
    <main >

      <Navbar/>
      <Hero/>


      
      <About />
      
      <Skills />
      
      <Projects />
      <Footer/>
      <TestingComp/>


    </main>
  )
}


{/* <h2 class="aboutAnchorDestinationJS" id="section__title__global">About</h2>

<h2 id="section__title__global">Skills</h2>

<h2 class="projectsAnchorDestinationJS" id="section__title__global">Projects</h2> */}