import Navbar from '../component/navbar';
import Hero from '../component/hero';
import About from '../component/About';
import Education from '../component/Education';
import Projects from '../component/Projects';
import Experience from '../component/Experience';
import Contact from '../component/Contact';
const LandingPage = () => {
    return(
        <div >
        <Navbar />
        <Hero />
        <About />
        <Education />
        <Projects />
        <Experience />
        <Contact />
        </div>
    )
}
export default LandingPage;