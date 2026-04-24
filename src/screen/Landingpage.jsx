import React, { Suspense, lazy } from 'react';
import Navbar from '../component/navbar';
import Hero from '../component/Hero';
import BackgroundVideo from '../component/bgvideo';
import ErrorBoundary from '../component/ErrorBoundary';
import { DevModeProvider } from '../context/DevModeContext';

const About = lazy(() => import('../component/About'));
const Education = lazy(() => import('../component/Education'));
const Projects = lazy(() => import('../component/Projects'));
const GitHubActivity = lazy(() => import('../component/GitHubActivity'));
const GamifiedSection = lazy(() => import('../component/GamifiedSection'));
const Terminal = lazy(() => import('../component/Terminal'));
const Experience = lazy(() => import('../component/Experience'));
const Contact = lazy(() => import('../component/Contact'));
const ResumeViewer = lazy(() => import('../component/ResumeViewer'));
const LinkedInSection = lazy(() => import('../component/LinkedInSection'));
const KonamiManager = lazy(() => import('../component/KonamiManager'));
const DevHUD = lazy(() => import('../component/DevHUD'));

const LoadingFallback = () => (
  <div className="h-screen flex items-center justify-center bg-gray-900">
    <div className="w-10 h-10 border-4 border-[#0367FB] border-t-transparent rounded-full animate-spin"></div>
  </div>
);
const LandingPage = () => {
    const [showResume, setShowResume] = React.useState(false);

    return (
      <DevModeProvider>
        <div className="relative min-h-screen overflow-hidden">
          <BackgroundVideo />
          <Navbar />
          <Hero setShowResume={setShowResume} />
          <Suspense fallback={<LoadingFallback />}>
            <About />
            <ErrorBoundary>
              <GamifiedSection />
            </ErrorBoundary>
            <ErrorBoundary>
              <GitHubActivity />
            </ErrorBoundary>
            <Education />
            <Projects />
            <Experience />
            {showResume && <ResumeViewer />}
            <ErrorBoundary>
              <Terminal />
            </ErrorBoundary>
            <LinkedInSection />
            <KonamiManager />
            <DevHUD />
            <Contact />
          </Suspense>
          <footer className="bg-gray-800 text-white text-center p-4">
            <p>
              &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
            </p>
          </footer>
        </div>
      </DevModeProvider>
    );
}
export default LandingPage;