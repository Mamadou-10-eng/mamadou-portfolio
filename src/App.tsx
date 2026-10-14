import About from './components/About'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {
  return (
    <>
      <a
        href="#main-content"
        className="absolute top-3 left-3 z-[1000] -translate-y-[160%] rounded-full bg-accent px-4 py-[0.65rem] font-semibold text-bg no-underline transition-transform duration-200 ease-[ease] focus:translate-y-0"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
