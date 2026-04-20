import React, { Suspense, lazy } from 'react';
import Navbar from '../component/navbar';
import Hero from '../component/Hero';
import BackgroundVideo from '../component/bgvideo';

const About = lazy(() => import('../component/About'));
const Education = lazy(() => import('../component/Education'));
const Projects = lazy(() => import('../component/Projects'));
const Experience = lazy(() => import('../component/Experience'));
const Contact = lazy(() => import('../component/Contact'));

const LoadingFallback = () => (
  <div className="h-screen flex items-center justify-center bg-gray-900">
    <div className="w-10 h-10 border-4 border-[#0367FB] border-t-transparent rounded-full animate-spin"></div>
  </div>
);
const LandingPage = () => {
    return (
        <div className="relative min-h-screen overflow-hidden">
            <BackgroundVideo />
            <Navbar />
            <Hero />
            <Suspense fallback={<LoadingFallback />}>
                <About />
                <Education />
                <Projects />
                <Experience />
                <Contact />
            </Suspense>
            <footer className="bg-gray-800 text-white text-center p-4">
                <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
            </footer>
        </div>
    )
}
export default LandingPage;