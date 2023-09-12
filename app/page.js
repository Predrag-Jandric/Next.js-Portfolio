import Skills from '../components/Skills'
import About from '../components/About'
import Projects from '../components/Projects'

export default function Home() {
  return (
    <main >

      <h2 class="aboutAnchorDestinationJS" id="section__title__global">About</h2>

      <About />

      <h2 id="section__title__global">Skills</h2>

      <Skills />

      <h2 class="projectsAnchorDestinationJS" id="section__title__global">Projects</h2>

      <Projects />
    </main>
  )
}
