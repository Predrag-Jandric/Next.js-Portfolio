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

      <Navbar />
      <Hero />
      <h2 className="section__title__global">About</h2>
      <About />
      <h2 className="section__title__global">Skills</h2>
      <Skills />
      <h2 className="section__title__global">Projects</h2>
      {/* <Projects /> */}
      <Footer />
      {/* <TestingComp/> */}




    </main>
  )
}


