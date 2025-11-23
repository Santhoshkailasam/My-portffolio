import Navbar from '../component/navbar';
import Hero from '../component/Hero';
import About from '../component/About';
import Education from '../component/Education';
import Projects from '../component/Projects';
import Experience from '../component/Experience';
import Contact from '../component/Contact';
import BackgroundVideo from '../component/bgvideo';
const LandingPage = () => {
    return(
        <div className="relative min-h-screen overflow-hidden">
        <BackgroundVideo />
        <Navbar />
        <Hero />
        <About />
        <Education />
        <Projects />
        <Experience />
        <Contact />
        <footer className="bg-gray-800 text-white text-center p-4">
            <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
            </footer>
        </div>
    )
}
export default LandingPage;